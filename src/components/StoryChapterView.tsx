import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { StoryChapter } from '../content/types'
import { Blocks } from './Blocks'
import { EASE, NextButton, Reveal, Rich, pad } from './ui'

interface Props {
  chapter: StoryChapter
  number: number
  onNext: () => void
}

export function StoryChapterView({ chapter, number, onNext }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Leva o foco (leitores de tela / teclado) para o novo capítulo.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <article className="mx-auto w-full max-w-6xl px-6 pt-28 pb-24 md:px-12 md:pt-40 md:pb-36">
      <header>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <span className="eyebrow">Capítulo {pad(number)}</span>
          <motion.span
            className="hairline block w-16 origin-left md:w-24"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
          />
        </motion.div>

        <motion.h2
          ref={headingRef}
          tabIndex={-1}
          className="display mt-7 max-w-[15ch] md:mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.25 }}
        >
          <Rich text={chapter.title} />
        </motion.h2>
      </header>

      <div className="mt-14 md:mt-24">
        <Blocks blocks={chapter.blocks} />

        <Reveal className="mt-20 border-t border-[var(--rule)] pt-8 md:mt-28">
          <NextButton label={chapter.cta} onClick={onNext} />
        </Reveal>
      </div>
    </article>
  )
}
