import { motion } from 'motion/react'
import type { Music } from '../hooks/useMusic'
import { EASE, pad } from './ui'

/** Barra superior: progresso da narrativa + voltar. */
export function Progress({
  current,
  total,
  title,
  onBack,
}: {
  current: number
  total: number
  title: string
  onBack: () => void
}) {
  const plainTitle = title.replace(/\*/g, '')
  return (
    <motion.nav
      aria-label="Progresso da carta"
      className="fixed inset-x-0 top-0 z-40 bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] pt-[env(safe-area-inset-top)] backdrop-blur-md transition-colors duration-[1200ms]"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="relative h-px w-full bg-[var(--rule)]">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[var(--accent)]"
          initial={false}
          animate={{ width: `${(current / total) * 100}%` }}
          transition={{ duration: 1.2, ease: EASE }}
        />
      </div>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6 md:px-12">
        <button type="button" onClick={onBack} className="btn-quiet !no-underline -ml-1 gap-2 px-1">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
            <path d="M14 5H1.5M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1" />
          </svg>
          Voltar
        </button>
        <p className="eyebrow flex min-w-0 items-center gap-3" aria-live="polite">
          <span className="hidden truncate !normal-case !tracking-[0.02em] md:inline md:text-[0.8125rem]">{plainTitle}</span>
          <span className="tabular-nums text-[var(--fg)]">
            {pad(current)} <span className="text-[var(--muted)]">/ {pad(total)}</span>
          </span>
        </p>
      </div>
    </motion.nav>
  )
}

/** Player discreto. Só aparece quando há música configurada e o arquivo carregou. */
export function MusicPlayer({ music, visible }: { music: Music; visible: boolean }) {
  // aparece junto com a música, a partir do capítulo 02
  if (music.status !== 'ready' || !visible) return null
  const { playing, muted, volume, volumeSupported, title } = music
  const effective = muted ? 0 : volume

  return (
    <motion.div
      role="group"
      aria-label="Música de fundo"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex items-center gap-1 rounded-full border border-[var(--rule)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] py-1 pr-3 pl-1 text-[var(--fg)] backdrop-blur-md transition-colors duration-[1200ms] md:right-6 md:bottom-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay: 0.5 }}
    >
      <button
        type="button"
        onClick={music.toggle}
        aria-label={playing ? 'Pausar música' : 'Tocar música'}
        className="grid size-10 place-items-center rounded-full transition-colors hover:bg-[var(--rule)]"
      >
        {playing ? (
          <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true">
            <rect x="1" width="2" height="12" fill="currentColor" />
            <rect x="7" width="2" height="12" fill="currentColor" />
          </svg>
        ) : (
          <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true">
            <path d="M1 0l9 6-9 6z" fill="currentColor" />
          </svg>
        )}
      </button>

      <span className="eq mr-1" data-playing={playing && !muted} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {title && <span className="eyebrow hidden max-w-[10rem] truncate !tracking-[0.12em] md:inline">{title}</span>}

      <button
        type="button"
        onClick={music.toggleMute}
        aria-label={muted ? 'Ativar som' : 'Silenciar'}
        aria-pressed={muted}
        className="grid size-10 place-items-center rounded-full text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
          <path d="M1 5h3l4-3.5v11L4 9H1z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
          {muted ? (
            <path d="M11 5l4 4M15 5l-4 4" stroke="currentColor" strokeWidth="1" />
          ) : (
            <path d="M11 4.5c1.2 1.4 1.2 3.6 0 5M13 2.5c2.2 2.6 2.2 6.4 0 9" stroke="currentColor" strokeWidth="1" />
          )}
        </svg>
      </button>

      {volumeSupported && (
        <input
          type="range"
          className="volume"
          min={0}
          max={1}
          step={0.01}
          value={effective}
          aria-label="Volume"
          aria-valuetext={`${Math.round(effective * 100)}%`}
          onChange={(e) => music.setVolume(Number(e.target.value))}
          style={{ ['--v' as string]: `${effective * 100}%` }}
        />
      )}
    </motion.div>
  )
}
