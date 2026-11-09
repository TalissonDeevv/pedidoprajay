import type { Story } from './types'

/**
 * ────────────────────────────────────────────────────────────────
 *  TODO O CONTEÚDO DO SITE ESTÁ AQUI.
 *
 *  • Para mudar os nomes, altere FROM e TO.
 *  • Cada capítulo é uma sequência de parágrafos, como uma carta.
 *    Para adicionar um parágrafo, copie um bloco { type: 'paragraph', text: '…' }.
 *  • Para mudar a ordem dos capítulos, reordene o array `chapters`
 *    (mantenha a abertura primeiro e a pergunta por último).
 *  • Palavras entre *asteriscos* aparecem em itálico.
 *  • Temas: 'night' (preto), 'paper' (branco quente),
 *    'sand' (bege) e 'wine' (preto avinhado).
 * ────────────────────────────────────────────────────────────────
 */

const FROM = 'Talisson'
const TO = 'Jay'

export const story: Story = {
  from: FROM,
  to: TO,

  music: {
    // Tocam em sequência, a partir do capítulo 02. Arquivos em public/audio/.
    tracks: [
      { src: `${import.meta.env.BASE_URL}audio/alianca.mp3`, title: 'Aliança — Tribalistas' },
      { src: `${import.meta.env.BASE_URL}audio/chapeu-de-palha.mp3`, title: 'Bem — Chapéu de Palha' },
    ],
    initialVolume: 0.45,
  },

  chapters: [
    // ── 01 ─────────────────────────────────────────────────────────
    {
      layout: 'opening',
      id: 'antes-de-tudo',
      theme: 'night',
      eyebrow: `Uma carta para ${TO}`,
      headline: 'Algumas coisas merecem mais do que uma simples mensagem.',
      subline: 'Essa é uma delas. Vai no seu tempo, não tem pressa nenhuma aqui.',
      cta: 'Começar',
      ctaSilent: 'Começar sem som',
      signature: `De ${FROM}`,
    },

    // ── 02 ─────────────────────────────────────────────────────────
    {
      layout: 'story',
      id: 'o-que-eu-gostaria',
      theme: 'paper',
      title: 'O que eu gostaria que você *soubesse*',
      blocks: [
        { type: 'line', text: 'Antes de qualquer coisa, eu queria que você soubesse por que tudo isso existe.' },
        {
          type: 'paragraph',
          text: `${TO}, eu pensei muito em como te dizer algumas coisas. Pensei em só te mandar uma mensagem, em esperar um momento no meio de uma conversa, em falar de uma vez e ver o que acontecia. Mas nada disso me parecia certo. Não porque uma mensagem simples seria errada, mas porque ela não daria conta de tudo o que eu queria te dizer. E o que eu tenho pra te dizer é importante pra mim. Eu não queria que passasse como mais uma notificação no meio do seu dia.`,
        },
        {
          type: 'paragraph',
          text: 'Então eu resolvi fazer isso aqui. Um site inteiro, com capítulos, com música, com tudo o que eu venho pensando há bastante tempo, escrito com calma. Talvez pareça exagerado. Mas quando o assunto é importante de verdade, eu me perco nas palavras. Falo rápido, esqueço a parte que mais queria dizer, fico com a sensação de que não mostrei direito o que eu sinto. Escrevendo, eu consegui ir devagar. Consegui apagar, voltar, reescrever, até chegar no que é verdade. Cada parte disso foi pensada com carinho, e nada aqui foi feito às pressas. É um pedaço de quem eu sou, do que eu sinto e do que eu acredito.',
        },
        { type: 'pause' },
        {
          type: 'paragraph',
          text: 'Quando eu te conheci, sinceramente, eu nunca imaginei que um dia a gente chegaria até aqui. Eu te conheci por meio da Sarah, e naquele momento eu te enxergava como uma amiga que estava chegando na minha vida. Não passava pela minha cabeça que, algum tempo depois, você se tornaria alguém tão especial pra mim. Eu não tinha planos, não tinha expectativas, não ficava imaginando nada do que poderia acontecer entre a gente. Se alguém me dissesse, naquela época, que um dia eu estaria fazendo um site inteiro só pra conseguir te dizer o que eu sinto, eu provavelmente nem acreditaria.',
        },
        {
          type: 'paragraph',
          text: 'Mas, de algum jeito, a nossa história foi tomando um caminho que eu não esperava. E hoje, quando eu olho pra trás, eu acho bonito perceber que algumas pessoas entram na nossa vida de um jeito tão simples, sem anunciar nada, sem dar nenhum sinal do quanto ainda vão significar. Você chegou como alguém que eu achava que seria só mais uma amizade, e acabou ocupando um espaço muito especial no meu coração.',
        },
        {
          type: 'paragraph',
          text: 'Eu não sei dizer exatamente em que momento tudo mudou, nem quando eu comecei a te enxergar de um jeito diferente. Só sei que, quando eu percebi, já existia em mim um sentimento que eu não queria tratar como uma coisa qualquer. E eu sou grato por isso. Pela forma tão inesperada como os nossos caminhos se cruzaram, e por tudo o que veio a partir daí.',
        },
        { type: 'line', text: 'Às vezes as pessoas mais importantes chegam sem avisar.' },
        { type: 'pause' },
        {
          type: 'paragraph',
          text: 'Tem algumas coisas que eu preciso te dizer como se estivesse olhando nos seus olhos. Eu sei que você já passou por coisas difíceis. Sei que já te machucaram de um jeito que nunca deveria ter acontecido, e que isso não ficou só no passado. Algumas experiências deixam marcas que não somem porque o tempo passou ou porque uma pessoa nova apareceu. Elas ficam no jeito como a gente confia, no jeito como a gente se entrega, no medo que aparece sem pedir licença.',
        },
        {
          type: 'paragraph',
          text: 'Eu não vou fingir que sei tudo o que você sentiu, porque eu não sei. E você não precisa me contar. Só quero que você saiba que eu reconheço que isso existe, e que eu respeito. Reconstruir a confiança leva tempo, e esse tempo é seu. Você não precisa estar completamente bem pra merecer carinho. Não precisa ter superado tudo, não precisa estar sem medo, não precisa ser uma pessoa sem cicatrizes. Você merece respeito do jeito que você é agora, inclusive nos dias em que não estiver bem e não quiser fingir que está.',
        },
        {
          type: 'paragraph',
          text: 'Eu imagino que coisas assim façam a gente duvidar de muita coisa. Do próprio valor, das intenções de quem chega, de se vale a pena se abrir de novo. Se em algum momento você sentir isso comigo, eu vou entender. A desconfiança, às vezes, é só uma forma de se proteger. E eu não quero que você precise se proteger de mim.',
        },
        {
          type: 'paragraph',
          text: 'Você não precisa esconder de mim as suas fragilidades. Mas também não precisa me mostrar tudo de uma vez. Confiança não é uma coisa que eu tenha o direito de exigir. É uma coisa que se constrói, aos poucos, com atitude e com tempo. Quando você quiser conversar sobre qualquer coisa, do jeito que for, eu vou estar aqui pra ouvir, sem julgamento e sem pressa. E se tiver coisas que você preferir guardar, eu vou respeitar também. Eu quero conhecer a pessoa que você é por inteiro, inclusive as partes que talvez sejam mais difíceis de mostrar. Não pra consertar nada. Só pra estar perto.',
        },
        { type: 'line', text: 'Você não precisa ser perfeita pra ser cuidada.' },
        { type: 'pause' },
        {
          type: 'paragraph',
          text: 'Tem outra coisa que eu quero falar com sinceridade. A gente nem sempre esteve perto. Teve momentos em que os nossos caminhos pareceram ir pra lados diferentes, em que eu não sabia o que ia acontecer com a gente, e em que eu realmente não tinha certeza se um dia teria a chance de viver alguma coisa ao seu lado. Não foi tudo perfeito, e eu não quero contar essa história como se tivesse sido.',
        },
        {
          type: 'paragraph',
          text: 'Mas, mesmo nesses momentos, o que eu sentia por você não foi embora. E muitas vezes eu coloquei a nossa história nas mãos de Deus. Eu orei por isso. Pedi que, se fosse da vontade Dele, e se existisse um caminho bom pra nós dois, os nossos caminhos pudessem se encontrar de novo. Não estou dizendo que Deus me prometeu alguma coisa, nem que você tinha que estar destinada a mim. Era só o que existia no meu coração, entregue a quem eu confio que sabe mais do que eu. E eu fui aprendendo a ter paz com isso: se fosse pra ser, que fosse bom pra você também.',
        },
        { type: 'pause' },
        {
          type: 'paragraph',
          text: 'E eu não quero que esse capítulo seja só sobre você. Seria injusto falar das suas inseguranças sem te mostrar as minhas. Eu também tenho os meus medos. Tem dias em que eu duvido do meu próprio valor, em que olho no espelho e não gosto do que vejo, em que é difícil acreditar que alguém poderia realmente me escolher e querer construir uma vida comigo. Eu carrego coisas da minha história que ainda influenciam o jeito como eu enxergo tudo isso, e no próximo capítulo eu vou te contar um pouco mais sobre elas.',
        },
        {
          type: 'paragraph',
          text: 'Não estou te dizendo isso pra que você cuide das minhas inseguranças. Elas são minhas, e lidar com elas é responsabilidade minha. Estou dizendo porque eu não quero me apresentar como alguém que tem tudo resolvido. Eu sou humano, com falhas e partes frágeis, como todo mundo. E o que eu gostaria, de verdade, é de uma relação em que nós dois pudéssemos ser sinceros sobre o que sentimos, sem medo de parecer fracos e sem medo de ser demais. Do mesmo jeito que eu quero respeitar o que existe em você, eu gostaria de poder ser inteiro com você também.',
        },
        {
          type: 'paragraph',
          text: 'E, já que eu estou sendo sincero, tem mais uma coisa que eu quero que você saiba sobre mim. Eu sei que o meu porte físico e as minhas limitações não combinam com a imagem que muita gente tem de um homem. Eu não tenho o corpo que normalmente se associa a essa figura, e convivo com condições físicas que fazem parte da minha realidade e vão continuar fazendo. Eu não fujo disso, e não estou dizendo isso pra que você sinta pena.',
        },
        {
          type: 'paragraph',
          text: 'Mas existe muito mais em mim do que aquilo que dá pra ver por fora. Eu sou um homem que tem sonhos, responsabilidades e projetos. Tenho vontade de crescer, vontade de construir uma família, tenho os meus valores e a minha fé em Deus. E levo muito a sério qualquer compromisso que eu assumo com alguém. Pra mim, ser homem numa relação nunca foi sobre ter um certo corpo, força ou aparência. É sobre caráter. É ser responsável, respeitar, ter maturidade, saber cuidar e saber ouvir, reconhecer os próprios erros e permanecer firme naquilo que escolheu construir. Não te digo isso pra provar que eu sou suficiente. Digo só pra que você conheça o homem que existe além do que aparece.',
        },
        { type: 'pause' },
        {
          type: 'paragraph',
          text: 'Tem outra coisa que eu não quero ignorar. A gente vive em lugares diferentes. Você tem a sua vida aí no Mato Grosso do Sul, com a sua rotina, os seus compromissos, a sua família e as suas responsabilidades. Eu tenho a minha aqui em Pernambuco, com os meus desafios, os meus projetos e os meus planos. São estados diferentes, rotinas diferentes, realidades que nem sempre se parecem.',
        },
        {
          type: 'paragraph',
          text: 'Eu sei que a distância exige muita coisa: maturidade, diálogo, paciência e, principalmente, vontade dos dois lados. Não vou te dizer que seria fácil, porque não seria, e eu não quero te vender uma ideia bonita que não existe. Mas eu também não enxergo essa diferença como um muro impossível. Não quero que a distância vire desculpa pra falta de cuidado, de consideração ou de compromisso. Se um dia for escolha dos dois construir alguma coisa, eu quero fazer a minha parte pra que você tenha espaço de verdade na minha vida, mesmo estando longe.',
        },
        {
          type: 'paragraph',
          text: 'Eu gostaria de conhecer a sua realidade, respeitar os seus momentos, fazer parte das pequenas coisas do seu dia e encontrar jeitos de estar presente mesmo quando não der pra estar perto. E gostaria que você conhecesse a minha também: os meus sonhos, as minhas dificuldades, as coisas que fazem parte de quem eu sou. Sem que ninguém precise abandonar a própria vida pra caber na vida do outro. Só duas vidas que, aos poucos, aprendem a caminhar juntas.',
        },
        { type: 'pause' },
        {
          type: 'paragraph',
          text: 'E tem uma coisa sobre nós dois que eu quero te dizer com muita sinceridade. A nossa história é um pouco diferente. A gente mora em estados diferentes, cada um tem a sua rotina, e as nossas conversas nem sempre têm uma frequência constante. Ainda existem muitas experiências que a gente nunca viveu junto. Até hoje, a gente nunca fez uma chamada de voz, nem de vídeo, e nem tem o costume de conversar por áudio com frequência. Quase tudo o que a gente construiu até aqui foi por mensagem escrita. E talvez, pra algumas pessoas, pareça estranho eu dizer o quanto o que eu sinto por você é forte.',
        },
        { type: 'line', text: 'Mas eu quero que você entenda uma coisa: eu amo muito você.' },
        {
          type: 'paragraph',
          text: 'Eu sei que ainda tem muita coisa que a gente precisa conhecer um sobre o outro. Tem conversas que a gente ainda não teve, momentos que ainda não dividiu, experiências que ainda não viveu. Eu não quero fingir que já conheço todos os seus detalhes, nem que a gente sabe exatamente como seria dividir a vida de perto. Mas o que eu sinto por você é sincero. Você se tornou alguém muito especial pra mim. Alguém em quem eu penso, por quem eu oro, e com quem eu tenho vontade de viver coisas que, por enquanto, ainda estão só nos meus sonhos.',
        },
        {
          type: 'paragraph',
          text: 'E eu não estou te dizendo isso pra criar nenhuma obrigação, nem pra que você sinta que precisa sentir a mesma coisa, na mesma intensidade. Eu só quero ser honesto sobre o que existe dentro de mim. Sem esconder, e sem fazer disso um peso pra você.',
        },
        {
          type: 'paragraph',
          text: 'Eu também sei que uma relação precisa ir além do que a gente constrói por mensagem, à distância. Eu quero conhecer a sua voz. Quero conversar com você de verdade, dividir momentos simples, dar risada junto, e descobrir aos poucos como é a nossa conexão nesses momentos também. Mas sem pular etapas e sem transformar isso numa cobrança. Eu quero que essas coisas aconteçam naturalmente, no tempo certo, com vontade e com segurança dos dois lados.',
        },
        { type: 'pause' },
        {
          type: 'paragraph',
          text: 'Eu não escrevi nada disso pra te convencer de nada. Escrevi porque precisava colocar pra fora, e porque achei que você merecia me conhecer de verdade, do jeito que eu sou por dentro, e não só do jeito que eu consigo mostrar.',
        },
        { type: 'line', text: 'Agora que você me conhece um pouco mais por dentro, eu queria te contar o que eu aprendi sobre amar alguém.' },
      ],
      cta: 'Continuar',
    },

    // ── 03 ─────────────────────────────────────────────────────────
    {
      layout: 'story',
      id: 'o-que-significa-amar',
      theme: 'night',
      title: 'O que significa *amar* alguém',
      blocks: [
        {
          type: 'paragraph',
          text: 'Muita gente fala de amor como aquilo que aparece nos filmes: o frio na barriga, a saudade apertada, a declaração feita no momento perfeito, com a música certa tocando ao fundo. E eu não acho que isso esteja errado. Essas coisas existem e são bonitas. Mas eu fui entendendo que elas são só a parte que aparece. O amor de verdade mora muito mais no que a gente faz do que no que a gente diz, e quase sempre nos dias em que não tem nada de especial acontecendo.',
        },
        {
          type: 'paragraph',
          text: 'Pra mim, amar alguém começa pelo respeito. É enxergar o outro como uma pessoa inteira, com vontades, limites, opiniões e um jeito próprio de ver o mundo, que nem sempre vai ser igual ao meu, e tudo bem que não seja. Passa pela honestidade, que é falar a verdade com cuidado, mesmo quando é difícil e mesmo quando seria mais confortável ficar quieto. E passa pela lealdade, que eu entendo como ser a mesma pessoa quando você está perto e quando você não está.',
        },
        {
          type: 'paragraph',
          text: 'Amar também é ter responsabilidade afetiva. É lembrar que tudo o que eu faço, e tudo o que eu deixo de fazer, chega até você de alguma forma, e levar isso a sério. É ter paciência pra entender que ninguém muda no tempo do outro, que cada um tem os seus dias, os seus processos e as suas dificuldades. É ter compreensão: tentar entender antes de querer ser entendido, ouvir antes de responder.',
        },
        {
          type: 'paragraph',
          text: 'E amar é reciprocidade. Os dois cuidando, os dois se esforçando, os dois aparecendo. Nunca uma pessoa carregando a relação sozinha enquanto a outra só recebe. Ao mesmo tempo, é liberdade: estar junto porque quer, e não porque precisa, porque tem medo de ficar sozinho ou porque não sabe como ir embora. E, no fim de tudo, é companheirismo. Ser parceiro de verdade no dia bom, no dia comum e principalmente no dia difícil.',
        },
        {
          type: 'paragraph',
          text: 'Eu sei que tudo isso pode parecer coisa demais, quase uma exigência. Mas não é assim que eu vejo. Nada disso acontece de uma vez, nem de forma perfeita. São coisas que a gente vai aprendendo a praticar, errando, corrigindo, tentando de novo. Ninguém chega pronto num relacionamento. O que importa, pra mim, é a vontade de caminhar nessa direção, e a disposição de olhar pra si mesmo com honestidade quando a gente se afasta dela.',
        },
        {
          type: 'paragraph',
          text: 'Tem uma coisa que eu acho importante dizer: amor não é competição. Eu não quero ficar medindo quem ama mais, quem mandou mensagem primeiro, quem cedeu mais vezes, quem sentiu mais saudade. Não acredito em relação que vira placar. Quero que seja um lugar onde os dois se sintam cuidados, onde ninguém precise provar nada pra ninguém, e onde o carinho não seja uma disputa, mas uma coisa que a gente divide.',
        },
        {
          type: 'paragraph',
          text: 'No fundo, eu acho que amar é escolher cuidar de alguém sem deixar de cuidar de si mesmo. É querer o bem do outro mesmo quando isso não tem nada a ver com a gente. É ficar feliz com a felicidade da outra pessoa, torcer pelas conquistas dela, respeitar as decisões dela. E é, ao mesmo tempo, ser cuidado de volta, sentir que tem alguém do outro lado fazendo o mesmo esforço. Quando as duas coisas acontecem juntas, o amor deixa de ser só um sentimento e vira um lugar seguro pra estar.',
        },
        { type: 'pause' },
        { type: 'line', text: 'Talvez você se pergunte por que essas coisas importam tanto pra mim. A resposta está na minha história.' },
        {
          type: 'paragraph',
          text: 'Durante muito tempo, eu tive dificuldade de acreditar que alguém pudesse realmente me escolher. Não como segunda opção, não por falta de alternativa, mas escolher mesmo. Em vários momentos eu carreguei a sensação de que ninguém olharia pra mim e enxergaria uma pessoa com quem gostaria de construir uma vida.',
        },
        {
          type: 'paragraph',
          text: 'A minha aparência sempre foi uma das minhas maiores inseguranças. Eu não me acho bonito, e muitas vezes, quando vejo uma mulher que eu acho bonita, a primeira coisa que passa pela minha cabeça é que ela nunca se interessaria por alguém como eu. Além disso, eu tenho limitações físicas e convivo com as questões da minha condição. Em alguns momentos, isso mexeu muito com o jeito como eu enxergo o meu corpo e o meu valor. Já me perguntei, mais de uma vez, se alguém conseguiria olhar além disso e ainda assim querer dividir a vida comigo.',
        },
        {
          type: 'paragraph',
          text: 'Não é que eu queira alguém por pena, nem que eu ache que atração não importa. Importa, e eu sei disso. Eu só queria sentir que alguém poderia me enxergar por inteiro e gostar de mim sem me fazer sentir que eu preciso ser outra pessoa pra merecer esse amor.',
        },
        {
          type: 'paragraph',
          text: 'Uma das coisas que mais me marcaram foi a sensação de não ser importante de verdade pra alguém. Eu já me senti deixado de lado, invisível, pouco considerado. E isso foi construindo em mim um medo de não ser suficiente, de me entregar inteiro pra alguém que não tinha a mesma vontade de construir alguma coisa comigo. Teve uma vez em que eu tentei falar sobre as minhas inseguranças e ouvi que eu era inseguro. Parece pouco, mas aquilo me fez guardar mais coisas pra mim. Passei a ter receio de mostrar o que eu sentia e acabar sendo visto como alguém difícil de lidar.',
        },
        {
          type: 'paragraph',
          text: 'Também vivi momentos em que os pedidos de desculpa existiam, mas a mudança não vinha. Com o tempo, isso foi enfraquecendo a minha confiança nas palavras. É por isso que, pra mim, atitude pesa tanto. Não porque eu duvide de tudo o que me dizem, mas porque eu aprendi do jeito difícil que o carinho de verdade aparece no que a pessoa faz, e não só no que ela fala.',
        },
        {
          type: 'paragraph',
          text: 'Mesmo assim, eu nunca deixei de querer um amor verdadeiro. Sempre quis alguém com quem dividir as pequenas coisas, conversar sobre o dia, comemorar as conquistas, atravessar as dificuldades e fazer planos. Quero construir uma família, ter uma companheira, viver uma relação em que os dois se escolham todos os dias. Quero poder ser vulnerável sem sentir vergonha, falar dos meus medos sem que isso seja visto como fraqueza. E quero oferecer exatamente esse mesmo espaço pra quem estiver comigo.',
        },
        {
          type: 'paragraph',
          text: 'Tudo isso mudou a forma como eu vejo o amor. Eu não quero um relacionamento só pra deixar de me sentir sozinho. Quero estar com alguém porque existe amor, admiração, vontade e uma escolha que parte dos dois. Não espero uma pessoa perfeita, porque eu também não sou, e não espero que ninguém resolva as minhas inseguranças ou carregue a minha felicidade. Mas desejo uma relação em que os dois tenham vontade de cuidar do que estão construindo. Aprendi que não quero precisar implorar por carinho, atenção ou consideração. Quero que essas coisas façam parte da relação naturalmente, e quero oferecê-las do mesmo jeito.',
        },
        {
          type: 'paragraph',
          text: `Eu te conto isso, ${TO}, não pra que você compense nada do que eu vivi, nem pra que você se sinta responsável por curar alguma coisa em mim. Você não tem que provar nada. Eu só queria que você conhecesse essa parte de mim que nem sempre eu consigo mostrar, e entendesse por que reciprocidade e escolha mútua significam tanto pra alguém que, por muito tempo, achou que não seria escolhido.`,
        },
        { type: 'line', text: 'E eu estou aprendendo a não deixar que o meu passado decida o amor que eu posso viver daqui pra frente.' },
        { type: 'pause' },
        { type: 'line', text: 'Mas tem uma coisa que, pra mim, vem antes de tudo isso.' },
        {
          type: 'paragraph',
          text: 'Eu acredito que um relacionamento não pode ser construído só sobre sentimento. Carinho, atração, vontade de estar junto, planos pro futuro: tudo isso importa, e eu não quero diminuir nada disso. Mas sentimento muda de intensidade, os dias mudam, a gente muda. E eu acredito que existe uma coisa que precisa vir antes, sustentando todo o resto. Pra mim, essa coisa é Jesus.',
        },
        {
          type: 'paragraph',
          text: 'Eu penso muito nisso como uma casa. Imagina duas pessoas construindo uma casa juntas. Elas escolhem as paredes, as portas, as janelas, a cor de cada cômodo, os móveis, cada detalhe. Podem ter os planos mais bonitos do mundo pra aquele lugar. Mas, se não existir uma estrutura firme por baixo, tudo isso fica frágil. Na primeira chuva forte, aparece a rachadura. Não adianta a casa ser bonita se aquilo que sustenta ela não aguenta o peso.',
        },
        {
          type: 'paragraph',
          text: 'É assim que eu enxergo um relacionamento. Pra mim, Cristo precisa ser o fundamento, a coluna principal dessa casa. E eu não estou dizendo que basta colocar Deus no centro e os problemas desaparecem. Eles não desaparecem. A gente continua sendo humano, continua errando, continua tendo opiniões diferentes e dias difíceis. A diferença é que, quando Ele é o fundamento de verdade, é a Palavra Dele que orienta o jeito como a gente age quando esses dias chegam. É com Ele que a gente aprende a amar sem egoísmo, a respeitar, a perdoar, a ter paciência, a agir com humildade e a não desistir do outro na primeira dificuldade.',
        },
        {
          type: 'paragraph',
          text: 'Na prática, eu acho que isso aparece nas coisas mais simples. É lembrar do que Ele ensina antes de deixar o orgulho falar mais alto numa discussão. É saber pedir perdão, reconhecer quando errou, respeitar os limites do outro, ser honesto mesmo quando a verdade é difícil e cuidar do que está sendo construído. É orar junto, buscar a direção de Deus nas decisões, e deixar que a fé faça parte não só do que a gente fala, mas do que a gente faz no dia a dia.',
        },
        {
          type: 'paragraph',
          text: 'E eu não quero que Deus seja lembrado só quando as coisas apertam. Quero que Ele esteja também nas conquistas, nos planos, nas escolhas pequenas, no jeito de tratar o outro numa terça-feira qualquer. Não como uma regra pesada, mas como a base que faz todo o resto ficar de pé.',
        },
        { type: 'line', text: 'Eu não quero só construir uma casa com alguém. Quero aprender a construí-la sobre Cristo, porque acredito que é Ele quem deve sustentar e orientar tudo aquilo que for vivido ali dentro.' },
      ],
      cta: 'Próximo capítulo',
    },

    // ── 04 ─────────────────────────────────────────────────────────
    {
      layout: 'story',
      id: 'o-relacionamento',
      theme: 'paper',
      title: 'O relacionamento que eu gostaria de *construir*',
      blocks: [
        {
          type: 'paragraph',
          text: 'Quando eu imagino um relacionamento, eu não penso em duas metades que se completam. Não gosto muito dessa ideia, porque ela faz parecer que cada um está incompleto sozinho. Eu penso em duas pessoas inteiras, cada uma com a sua vida, os seus sonhos, os seus amigos e o seu jeito, que escolhem caminhar juntas. E que escolhem de novo todo dia, não por costume, nem por obrigação, mas porque querem.',
        },
        {
          type: 'paragraph',
          text: 'Eu quero uma relação em que a gente converse de verdade, inclusive sobre os assuntos difíceis. Prefiro mil vezes uma conversa desconfortável a um silêncio que vai pesando aos poucos até virar distância. Quero que a gente possa dizer o que incomoda sem medo, e ouvir o que incomoda sem se defender antes de entender. E quero que exista respeito pelo espaço e pelo tempo de cada um, porque às vezes a gente precisa de um pouco de silêncio, de ficar no próprio canto, e isso não significa que alguma coisa esteja errada.',
        },
        {
          type: 'paragraph',
          text: 'Quero estar presente nos dias difíceis, mesmo sem ter a resposta certa, só estando ali do lado. E quero comemorar junto as pequenas conquistas, aquelas que parecem pequenas pra todo mundo, mas que pra gente significam muito. Acredito em confiança sem controle, em confiar porque escolheu confiar e não porque está vigiando. E acredito em liberdade sem descaso: cada um ter a própria vida, sem esquecer que do outro lado tem alguém que se importa.',
        },
        {
          type: 'paragraph',
          text: 'Gosto da ideia de um carinho que aparece nas atitudes pequenas, no detalhe, sem precisar de data especial pra existir. De duas pessoas que sabem reconhecer quando erram, que pedem desculpa de verdade e mudam o que precisa ser mudado, em vez de só repetir as mesmas coisas. E de planos feitos em conjunto: sonhar junto, decidir junto, construir junto, sem que um precise se apagar pra caber na vida do outro.',
        },
        {
          type: 'paragraph',
          text: 'Também quero que exista espaço pra cada um continuar crescendo. Que a relação não seja um lugar onde os dois param no tempo, mas um lugar que incentiva. Que eu possa te ver correr atrás dos seus objetivos e sentir orgulho, e que você possa fazer o mesmo comigo. Que os nossos mundos se encontrem sem que nenhum dos dois precise abandonar o seu. Acho bonito quando duas pessoas se somam assim: cada uma trazendo o que tem, e as duas saindo maiores do que entraram.',
        },
        {
          type: 'paragraph',
          text: 'Eu não espero perfeição. Nem sua, nem minha. E não vou te prometer uma vida sem problemas, porque isso não existe, e eu prefiro te dizer a verdade a te dizer uma coisa bonita. Vão existir dias ruins, desencontros, conversas difíceis, momentos em que a gente não vai se entender de primeira. O que eu acredito é em duas pessoas dispostas a atravessar tudo isso com maturidade, com respeito e com vontade sincera de construir alguma coisa juntas. Não é sobre nunca ter problema. É sobre saber de que lado a gente está quando ele aparecer.',
        },
        {
          type: 'paragraph',
          text: 'E quando os problemas vierem, eu quero que a gente lembre que não é um contra o outro. São os dois juntos contra o problema. Que a gente consiga respirar antes de responder, ouvir antes de julgar, e voltar a conversar quando a cabeça esfriar. Que o orgulho nunca valha mais do que a vontade de resolver. Eu não sei se vou acertar sempre, mas sei que quero tentar desse jeito.',
        },
      ],
      cta: 'Quero continuar lendo',
    },

    // ── 05 ─────────────────────────────────────────────────────────
    {
      layout: 'story',
      id: 'as-pequenas-coisas',
      theme: 'sand',
      title: 'As pequenas *coisas*',
      blocks: [
        {
          type: 'paragraph',
          text: 'Se eu for sincero, eu não sonho só com os grandes momentos. Eles são bons, claro, mas o que mais me encanta é uma coisa bem mais simples: a ideia de dividir a rotina com alguém. Os dias normais, sem nada de especial, que acabam ficando especiais justamente por serem divididos.',
        },
        {
          type: 'paragraph',
          text: 'É perguntar como foi o seu dia e querer ouvir a resposta de verdade, inteira, com os detalhes que parecem não ter importância. É ser a primeira pessoa pra quem você conta quando alguma coisa dá certo, e também quando alguma coisa dá errado. É rir de coisas bobas que só fazem sentido pra gente, daquelas que ninguém de fora entenderia mesmo se a gente tentasse explicar.',
        },
        {
          type: 'paragraph',
          text: 'É fazer planos, dos grandes aos que nunca saem do papel. É mandar uma mensagem no meio do dia, sem motivo nenhum, só porque lembrou. É conversar antes de dormir até um dos dois começar a responder cada vez mais devagar. É ir conhecendo os seus gostos aos poucos, sem pressa: o que te irrita, o que te acalma, o que te faz bem.',
        },
        {
          type: 'paragraph',
          text: 'É saber como você gosta de ser cuidada nos dias ruins, se prefere conversar ou só ter companhia em silêncio. É lembrar de uma coisa pequena que você falou de passagem e trazer de volta depois, só pra você perceber que eu estava prestando atenção. É dividir uma música, uma indicação, uma notícia boba, um pensamento aleatório no meio da tarde. É ter alguém pra contar as coisas que não interessam a mais ninguém.',
        },
        {
          type: 'paragraph',
          text: 'Eu acho que é aí que as relações de verdade se constroem. Não só nos dias especiais, mas na soma de todos os dias comuns. Nas mensagens de bom dia, nas conversas que se estendem sem querer, nos planos que mudam, nas risadas que ninguém mais entende. É nesse dia a dia que a gente vai conhecendo o outro de verdade, e é nele que eu gostaria de estar com você.',
        },
        {
          type: 'paragraph',
          text: 'E é também apoiar os seus sonhos, inclusive os que você ainda não contou pra ninguém. E, acima de tudo, é ter liberdade pra ser exatamente quem a gente é, sem precisar fingir nada, sem personagem, sem medo de parecer bobo demais ou sério demais. Pode parecer pouco. Pra mim, é quase tudo.',
        },
      ],
      cta: 'Continuar',
    },

    // ── 06 ─────────────────────────────────────────────────────────
    {
      layout: 'story',
      id: 'o-que-eu-quero-oferecer',
      theme: 'night',
      title: 'O que eu quero *oferecer*',
      blocks: [
        {
          type: 'paragraph',
          text: `Eu não sou perfeito, ${TO}, e não quero que nada disso aqui pareça que eu acho que sou. Tem muita coisa que eu ainda estou aprendendo: sobre mim, sobre relações, sobre o jeito certo de cuidar de alguém. Eu vou errar, provavelmente mais de uma vez. Não tenho todas as respostas, e não vou fingir que tenho.`,
        },
        {
          type: 'paragraph',
          text: 'Mas tem algumas coisas que eu posso te oferecer de verdade. Disposição pra aprender e pra mudar o que for preciso. Atenção pra te ouvir, mesmo quando o assunto não for fácil. Vontade de te compreender, inclusive nos dias em que nem você vai estar se entendendo direito. Humildade pra reconhecer quando eu errar, sem orgulho e sem desculpa pronta. Respeito pelos seus limites, até pelos que você ainda não falou em voz alta. E reciprocidade, que é cuidar de você do mesmo jeito que eu gostaria de ser cuidado.',
        },
        {
          type: 'paragraph',
          text: 'Eu também quero te oferecer constância. Não grandes gestos de vez em quando e silêncio no resto do tempo, mas uma presença em que dá pra confiar. Quero que você saiba onde está comigo, que não precise ficar adivinhando o que eu sinto ou se alguma coisa mudou. Se algo me incomodar, quero ter a maturidade de falar. Se eu precisar de espaço, quero ter o cuidado de explicar. Acho que muito da segurança numa relação vem disso: de não deixar o outro no escuro.',
        },
        {
          type: 'paragraph',
          text: 'Ao mesmo tempo, tem uma coisa que eu faço questão de deixar clara: eu não quero colocar sobre você a responsabilidade pela minha felicidade. Isso é trabalho meu. Não quero que você sinta que precisa estar sempre bem, sempre disponível, sempre forte por minha causa, nem que precisa dar conta de todas as minhas necessidades. Ninguém deveria carregar esse peso por outra pessoa, e eu não quero que você carregue.',
        },
        {
          type: 'paragraph',
          text: 'Eu não estou procurando alguém pra preencher um vazio. Estou procurando alguém com quem dividir a vida. São coisas diferentes, e pra mim essa diferença importa muito. Eu quero somar à sua vida, não pesar nela. Quero que, estando comigo, você continue sendo você, com tudo o que já é, e que a gente possa crescer junto sem que ninguém precise se diminuir.',
        },
      ],
      cta: 'Tem mais uma coisa',
    },

    // ── 07 ─────────────────────────────────────────────────────────
    {
      layout: 'story',
      id: 'uma-escolha',
      theme: 'night',
      title: 'Uma escolha que precisa ser dos *dois*',
      blocks: [
        {
          type: 'paragraph',
          text: 'Antes da pergunta, tem mais uma coisa que eu preciso que você saiba, talvez a mais importante de todas.',
        },
        {
          type: 'paragraph',
          text: 'Um relacionamento só faz sentido quando é escolhido pelas duas pessoas. Não por pressão, não por medo de magoar o outro, não por obrigação, e muito menos porque alguém se deu ao trabalho de fazer um site. Eu não escrevi tudo isso pra te convencer de nada. Escrevi porque queria que você soubesse quem eu sou e o que eu sinto. O que você vai fazer com isso é inteiramente seu.',
        },
        {
          type: 'paragraph',
          text: 'Eu sei que receber uma coisa assim pode trazer muita coisa ao mesmo tempo. Pode ser alegria, pode ser surpresa, pode ser dúvida, pode ser tudo junto. E qualquer uma dessas reações é legítima. Você não me deve nada por ter lido até aqui, nem precisa responder de um jeito específico pra não me deixar triste. O que eu mais quero é que você se sinta livre, porque só uma escolha livre pode ser o começo de alguma coisa boa.',
        },
        {
          type: 'paragraph',
          text: 'A sua resposta precisa ser livre e verdadeira. Se for sim, que seja um sim tranquilo, de quem quer de verdade. Se você precisar de tempo, ou quiser conversar antes, isso também é uma resposta bonita e honesta, e eu vou receber com o mesmo carinho. Seja qual for, o que eu sinto por você não muda, e o respeito também não.',
        },
        {
          type: 'paragraph',
          text: 'O que vem a seguir não é uma cobrança. É um convite.',
        },
      ],
      cta: 'Chegamos ao final',
    },

    // ── 08 ─────────────────────────────────────────────────────────
    {
      layout: 'question',
      id: 'a-pergunta',
      theme: 'night',
      prelude: 'Então, com toda a calma do mundo:',
      question: `${TO}, você aceita *namorar* comigo?`,
      note: 'Agora é com você. Me manda a sua resposta lá no WhatsApp: eu vou estar com o celular na mão, um pouco ansioso, mas sem pressa nenhuma pra você.',
      signature: FROM,
    },
  ],
}
