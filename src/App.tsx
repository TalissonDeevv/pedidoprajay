import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MusicPlayer, Progress } from './components/Chrome'
import { Opening } from './components/Opening'
import { Question } from './components/Question'
import { StoryChapterView } from './components/StoryChapterView'
import { EASE } from './components/ui'
import { story } from './content/story'
import { useMusic } from './hooks/useMusic'

const THEME_COLOR: Record<string, string> = {
  night: '#0d0b0a',
  paper: '#f4eee5',
  sand: '#e6dac7',
  wine: '#150b0c',
}

export default function App() {
  const { chapters } = story
  const [index, setIndex] = useState(0)
  const music = useMusic(story.music.tracks, story.music.initialVolume)
  // a música só começa quando ela entra no capítulo 02 (e se escolheu ouvir)
  const wantsMusic = useRef(false)
  const musicStarted = useRef(false)
  const chapter = chapters[index]

  // Tema da página (fundo transiciona suavemente via CSS) + cor da barra do navegador.
  useEffect(() => {
    document.documentElement.dataset.theme = chapter.theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[chapter.theme] ?? '#0d0b0a')
  }, [chapter.theme])

  const { play } = music
  useEffect(() => {
    if (index < 1 || !wantsMusic.current || musicStarted.current) return
    // espera a abertura sair e o capítulo 02 aparecer
    const t = window.setTimeout(() => {
      musicStarted.current = true
      play()
    }, 900)
    return () => window.clearTimeout(t)
  }, [index, play])

  const goTo = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(chapters.length - 1, i))),
    [chapters.length],
  )

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain" aria-hidden="true" />

      <AnimatePresence>
        {chapter.layout === 'story' && (
          <Progress
            key="progress"
            current={index + 1}
            total={chapters.length}
            title={chapter.title}
            onBack={() => goTo(index - 1)}
          />
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, ease: EASE } }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.7, ease: EASE } }}
          >
            {chapter.layout === 'opening' && (
              <Opening
                chapter={chapter}
                hasMusic={music.status === 'ready'}
                onStart={(withMusic) => {
                  if (withMusic) {
                    wantsMusic.current = true
                    music.unlock()
                  }
                  goTo(index + 1)
                }}
              />
            )}
            {chapter.layout === 'story' && (
              <StoryChapterView chapter={chapter} number={index + 1} onNext={() => goTo(index + 1)} />
            )}
            {chapter.layout === 'question' && <Question chapter={chapter} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <MusicPlayer music={music} visible={index >= 1} />
    </MotionConfig>
  )
}
