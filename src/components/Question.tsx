import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import type { QuestionChapter } from '../content/types'
import { EASE, Rich } from './ui'

export function Question({ chapter }: { chapter: QuestionChapter }) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <section className="flex min-h-[100svh] items-center justify-center px-6 py-20 md:px-12">
      <div className="mx-auto w-full max-w-3xl text-center">
        <motion.p
          className="serif text-xl italic text-[var(--muted)] md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.6 }}
        >
          {chapter.prelude}
        </motion.p>

        <motion.div
          className="mx-auto my-10 h-14 w-px origin-top md:my-12 md:h-20"
          style={{ background: 'var(--accent)' }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.7 }}
          transition={{ duration: 1.4, ease: EASE, delay: 1.6 }}
          aria-hidden="true"
        />

        <motion.h2
          ref={headingRef}
          tabIndex={-1}
          className="display mx-auto max-w-[13ch] !text-[clamp(2.75rem,10vw,6rem)]"
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 2, ease: EASE, delay: 2.4 }}
        >
          <Rich text={chapter.question} />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 4.2 }}
        >
          <p className="serif mx-auto mt-14 max-w-[32rem] text-[1.375rem] leading-snug italic text-[var(--muted)] md:mt-20 md:text-[1.625rem]">
            {chapter.note}
          </p>

          <p className="serif mt-12 text-xl italic text-[var(--muted)]">— {chapter.signature}</p>
        </motion.div>
      </div>
    </section>
  )
}
