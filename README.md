# Uma carta para Jay

Site em React + TypeScript + Vite + Tailwind CSS + Motion.

## Rodar no computador

```bash
npm install
npm run dev
```

## Personalizar

Quase tudo fica em **`src/content/story.ts`**:

| O quê | Onde |
|---|---|
| Nomes | `FROM` e `TO`, no topo do arquivo |
| Textos | cada capítulo tem uma lista de parágrafos (`{ type: 'paragraph', text: '…' }`) |
| Frase final (pedindo a resposta no WhatsApp) | `note`, no último capítulo |
| Ordem dos capítulos | reordene o array `chapters` (abertura primeiro, pergunta por último) |
| Cor de cada capítulo | `theme`: `'night'`, `'paper'`, `'sand'` ou `'wine'` |
| Músicas | `music.tracks` (tocam em sequência a partir do capítulo 02) |
| Imagem (opcional) | `{ type: 'image', src: '…', alt: '…' }` dentro de um capítulo |

As cores dos temas ficam no topo de **`src/index.css`**.

Palavras entre `*asteriscos*` aparecem em itálico.

### Música

As músicas ficam em `public/audio/` e são listadas em `music.tracks`, na ordem em que tocam.
Elas começam quando ela entra no capítulo 02 (se clicou em "Começar") e tocam uma depois da outra, voltando à primeira no fim.

## Publicar

```bash
npm run build
```

Na Vercel: importe o repositório, framework **Vite** (detectado automaticamente), build `npm run build`, saída `dist`.
O site usa caminhos relativos, então funciona em qualquer endereço.
