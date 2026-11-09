import { motion } from 'motion/react'
import type { OpeningChapter } from '../content/types'
import { EASE, NextButton } from './ui'

interface Props {
  chapter: OpeningChapter
  hasMusic: boolean
  onStart: (withMusic: boolean) => void
}

export function Opening({ chapter, hasMusic, onStart }: Props) {
  const words = chapter.headline.split(' ')
  const wordsEnd = 0.9 + words.length * 0.09

  return (
    <section className="relative flex min-h-[100svh] flex-col px-6 pt-[max(2rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] md:px-12">
      <motion.p
        className="eyebrow pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.3 }}
      >
        {chapter.eyebrow}
      </motion.p>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center py-16">
        <h1 className="display max-w-[16ch] !text-[clamp(2.5rem,8.4vw,6.25rem)]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '105%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1.3, ease: EASE, delay: 0.9 + i * 0.09 }}
              >
                {w}
                {i < words.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hairline mt-10 w-24 origin-left md:mt-14"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: EASE, delay: wordsEnd + 0.2 }}
        />

        <motion.p
          className="body-text mt-8 max-w-[28rem] text-[var(--muted)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: wordsEnd + 0.5 }}
        >
          {chapter.subline}
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: wordsEnd + 1 }}
        >
          <NextButton label={chapter.cta} onClick={() => onStart(hasMusic)} />
          {hasMusic && (
            <button type="button" className="btn-quiet" onClick={() => onStart(false)}>
              {chapter.ctaSilent}
            </button>
          )}
        </motion.div>
      </div>

      <motion.p
        className="serif text-lg italic text-[var(--muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: wordsEnd + 1.4 }}
      >
        {chapter.signature}
      </motion.p>
    </section>
  )
}
