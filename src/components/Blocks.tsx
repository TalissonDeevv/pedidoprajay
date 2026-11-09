import type { Block } from '../content/types'
import { Reveal, Rich } from './ui'

/** Corpo da carta: parágrafos corridos, como uma carta aberta. */
export function Blocks({ blocks }: { blocks: Block[] }) {
  const firstParagraph = blocks.findIndex((b) => b.type === 'paragraph')
  return (
    <div className="flex flex-col gap-7 md:gap-9">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <Reveal key={i}>
              <p className={`letter-text ${i === firstParagraph ? 'dropcap' : ''}`}>
                <Rich text={block.text} />
              </p>
            </Reveal>
          )
        }
        if (block.type === 'line') {
          return (
            <Reveal key={i} className="my-4 md:my-8">
              <p className="serif max-w-[40rem] text-[1.75rem] leading-[1.25] italic md:text-[2.375rem]">
                <Rich text={block.text} />
              </p>
            </Reveal>
          )
        }
        if (block.type === 'pause') {
          return (
            <Reveal key={i} className="my-8 flex items-center gap-3 md:my-14" y={0}>
              <span aria-hidden="true" className="block h-px w-10 bg-[var(--accent)]" />
              <span aria-hidden="true" className="block size-1 rounded-full bg-[var(--accent)]" />
            </Reveal>
          )
        }
        return (
          <Reveal key={i}>
            <figure className="my-4">
              <img src={block.src} alt={block.alt} loading="lazy" decoding="async" className="h-auto w-full" />
              {block.caption && <figcaption className="eyebrow mt-3 !normal-case !tracking-normal">{block.caption}</figcaption>}
            </figure>
          </Reveal>
        )
      })}
    </div>
  )
}
