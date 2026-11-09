import { useCallback, useEffect, useRef, useState } from 'react'

export type MusicStatus = 'none' | 'loading' | 'ready' | 'error'

export interface Track {
  src: string
  title?: string
}

export interface Music {
  status: MusicStatus
  playing: boolean
  muted: boolean
  volume: number
  /** iOS ignora `audio.volume`; nesse caso o controle de volume é escondido. */
  volumeSupported: boolean
  /** Título da música atual. */
  title?: string
  /**
   * Libera o áudio dentro de um clique, sem tocar nada ainda — o Safari do
   * iPhone só deixa tocar depois se o primeiro play acontecer num clique.
   */
  unlock: () => void
  play: () => void
  pause: () => void
  toggle: () => void
  toggleMute: () => void
  setVolume: (v: number) => void
}

const FADE_MS = 1400

/**
 * Um único <audio> para o site inteiro: as músicas atravessam os capítulos
 * sem reiniciar e tocam em sequência, voltando à primeira no fim.
 * Nada toca antes de um clique (os navegadores bloqueiam).
 */
export function useMusic(tracks: Track[], initialVolume: number): Music {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<number | null>(null)
  const volumeRef = useRef(initialVolume)
  const tracksRef = useRef(tracks)
  const [trackIndex, setTrackIndex] = useState(0)
  // true enquanto a música está saindo em fade antes de pausar
  const pausingRef = useRef(false)
  // true enquanto o unlock está com o áudio rodando em silêncio
  const unlockingRef = useRef(false)

  const [status, setStatus] = useState<MusicStatus>(tracks.length ? 'loading' : 'none')
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolumeState] = useState(initialVolume)
  const [volumeSupported, setVolumeSupported] = useState(true)

  // a lista vem de um arquivo estático; só a chave importa para recriar o áudio
  const key = tracks.map((t) => t.src).join('|')

  useEffect(() => {
    const list = tracksRef.current
    if (!list.length) return
    const a = new Audio()
    a.preload = 'metadata'
    a.volume = 0.5
    setVolumeSupported(Math.abs(a.volume - 0.5) < 0.01)
    a.volume = volumeRef.current

    let current = 0
    const onReady = () => setStatus((s) => (s === 'loading' ? 'ready' : s))
    const onError = () => {
      // se uma faixa falhar depois da primeira, pula para a próxima
      if (current > 0 && list.length > 1) onEnded()
      else setStatus('error')
    }
    const onPlay = () => {
      if (!unlockingRef.current) setPlaying(true)
    }
    const onPause = () => {
      if (!unlockingRef.current) setPlaying(false)
    }
    function onEnded() {
      current = (current + 1) % list.length
      setTrackIndex(current)
      a.src = list[current].src
      a.play().catch(() => setPlaying(false))
    }
    a.addEventListener('loadedmetadata', onReady)
    a.addEventListener('error', onError)
    a.addEventListener('play', onPlay)
    a.addEventListener('pause', onPause)
    a.addEventListener('ended', onEnded)
    a.src = list[0].src
    audioRef.current = a

    return () => {
      a.removeEventListener('loadedmetadata', onReady)
      a.removeEventListener('error', onError)
      a.removeEventListener('play', onPlay)
      a.removeEventListener('pause', onPause)
      a.removeEventListener('ended', onEnded)
      a.pause()
      a.removeAttribute('src')
      a.load()
      audioRef.current = null
    }
  }, [key])

  const cancelFade = () => {
    if (fadeRef.current !== null) cancelAnimationFrame(fadeRef.current)
    fadeRef.current = null
  }

  const fadeTo = useCallback((target: number, done?: () => void) => {
    const a = audioRef.current
    if (!a) return
    cancelFade()
    const from = a.volume
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / FADE_MS)
      const eased = t * (2 - t)
      a.volume = Math.min(1, Math.max(0, from + (target - from) * eased))
      if (t < 1) fadeRef.current = requestAnimationFrame(step)
      else {
        fadeRef.current = null
        done?.()
      }
    }
    fadeRef.current = requestAnimationFrame(step)
  }, [])


  const unlock = useCallback(() => {
    const a = audioRef.current
    if (!a || !a.paused || status === 'error') return
    unlockingRef.current = true
    const wasMuted = a.muted
    a.muted = true
    a.play()
      .then(() => {
        if (!unlockingRef.current) return
        a.pause()
        a.currentTime = 0
      })
      .catch(() => {})
      .finally(() => {
        if (unlockingRef.current) a.muted = wasMuted
        unlockingRef.current = false
      })
  }, [status])

  const play = useCallback(() => {
    const a = audioRef.current
    if (!a || status === 'error') return
    pausingRef.current = false
    cancelFade()
    if (unlockingRef.current) {
      // o unlock ainda não terminou: aproveita o play dele
      unlockingRef.current = false
      a.muted = muted
      a.currentTime = 0
      a.volume = 0
      setPlaying(true)
      fadeTo(volumeRef.current)
      return
    }
    if (!a.paused) {
      setPlaying(true)
      fadeTo(volumeRef.current)
      return
    }
    a.volume = 0
    a.play()
      .then(() => fadeTo(volumeRef.current))
      .catch(() => setPlaying(false))
  }, [fadeTo, status, muted])

  const pause = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    pausingRef.current = true
    setPlaying(false)
    fadeTo(0, () => {
      pausingRef.current = false
      a.pause()
    })
  }, [fadeTo])

  const toggle = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    if (a.paused || pausingRef.current) play()
    else pause()
  }, [play, pause])

  const toggleMute = useCallback(() => {
    const a = audioRef.current
    if (!a) return
    a.muted = !a.muted
    setMuted(a.muted)
  }, [])

  const setVolume = useCallback((v: number) => {
    const a = audioRef.current
    volumeRef.current = v
    setVolumeState(v)
    if (!a) return
    cancelFade()
    a.volume = v
    if (a.muted && v > 0) {
      a.muted = false
      setMuted(false)
    }
  }, [])

  return {
    status,
    playing,
    muted,
    volume,
    volumeSupported,
    title: tracks[trackIndex]?.title,
    unlock,
    play,
    pause,
    toggle,
    toggleMute,
    setVolume,
  }
}
