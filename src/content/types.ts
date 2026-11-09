/**
 * Tipos do conteúdo. Você não precisa mexer aqui para editar textos —
 * isso fica em `story.ts`. Este arquivo só descreve o formato.
 */

/** Temas visuais disponíveis. As cores de cada tema ficam em `src/index.css`. */
export type ThemeName = 'night' | 'paper' | 'sand' | 'wine'

/**
 * Blocos de conteúdo de um capítulo. Em qualquer texto, palavras entre
 * asteriscos ficam em itálico: "o que significa *amar* alguém".
 */
export type Block =
  | { type: 'paragraph'; text: string }
  /** Frase em destaque, em serifa maior — use com moderação. */
  | { type: 'line'; text: string }
  /** Pausa visual discreta entre partes da carta. */
  | { type: 'pause' }
  | { type: 'image'; src: string; alt: string; caption?: string }

export interface OpeningChapter {
  layout: 'opening'
  id: string
  theme: ThemeName
  eyebrow: string
  headline: string
  subline: string
  cta: string
  /** Texto do botão secundário, exibido só quando há música configurada. */
  ctaSilent: string
  signature: string
}

export interface StoryChapter {
  layout: 'story'
  id: string
  theme: ThemeName
  title: string
  blocks: Block[]
  cta: string
}

export interface QuestionChapter {
  layout: 'question'
  id: string
  theme: ThemeName
  prelude: string
  question: string
  /** Texto depois da pergunta, convidando a responder no WhatsApp. */
  note: string
  signature: string
}

export type Chapter = OpeningChapter | StoryChapter | QuestionChapter

export interface Story {
  from: string
  to: string
  music: {
    /**
     * Músicas tocadas em sequência (voltam para a primeira no fim).
     * Caminho de um arquivo em /public ou uma URL. Lista vazia desativa o player.
     */
    tracks: { src: string; title?: string }[]
    /** Volume inicial, de 0 a 1. */
    initialVolume: number
  }
  chapters: Chapter[]
}
