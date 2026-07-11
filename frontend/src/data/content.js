import {
  Smartphone,
  BatteryLow,
  BrainCircuit,
  CloudFog,
  Zap,
  RefreshCw,
  Moon,
  HeartPulse,
  BookOpen,
  Search,
  MoonStar,
  Sprout,
} from "lucide-react";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1585332757084-e9622d190a51?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  pain: "https://images.unsplash.com/photo-1610354878912-08f1ab8ae913?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200",
  before: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200",
  after: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200",
  author: "https://images.unsplash.com/photo-1618994841620-863a9d6f4dca?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200",
};

export const PAINS = [
  {
    icon: Smartphone,
    t: "O scroll infinito rouba suas horas",
    d: '"Só mais um vídeo" vira 2h da manhã. Os apps são projetados por psicólogos para te manter preso.',
  },
  {
    icon: BatteryLow,
    t: "Você acorda mais cansado do que dormiu",
    d: "A privação de sono destrói sua energia, seu humor e sua paciência já nas primeiras horas do dia.",
  },
  {
    icon: BrainCircuit,
    t: "A mente não desliga na cama",
    d: "Preocupações, ansiedade e pensamentos acelerados te mantêm acordado, mesmo de olhos fechados.",
  },
  {
    icon: CloudFog,
    t: "Névoa mental e foco despedaçado",
    d: "Concentração, memória e criatividade despencam. Tarefas simples se tornam exaustivas.",
  },
];

export const STATS = [
  {
    icon: Smartphone,
    n: "90%",
    d: "dos adultos usam algum eletrônico na hora que antecede o sono",
  },
  {
    icon: Moon,
    n: "2h+",
    d: "é o tempo médio em frente às telas após as 21h",
  },
  {
    icon: HeartPulse,
    n: "1 em 3",
    d: "adultos relatam problemas crônicos de sono ligados às telas",
  },
];

export const SCIENCE = [
  {
    icon: Zap,
    t: "A Luz Azul",
    d: 'As telas emitem luz que o cérebro interpreta como "dia", suprimindo a melatonina — o hormônio do sono — e mantendo você em estado de alerta.',
  },
  {
    icon: BrainCircuit,
    t: "A Dopamina",
    d: "Cada notificação libera uma micro-dose de prazer. Seu cérebro fica hiperativo, como tentar dormir depois de um café forte.",
  },
  {
    icon: RefreshCw,
    t: "O Ciclo Circadiano",
    d: "A estimulação desregula seu relógio interno de 24h. Seu corpo pensa que ainda é dia — levando à insônia crônica e fadiga constante.",
  },
];

export const MODULES = [
  {
    icon: BookOpen,
    n: "Módulo 1",
    t: "A Realidade da Insônia Digital",
    d: "A ciência da luz azul, os custos invisíveis e um teste para descobrir seu nível de dependência noturna.",
  },
  {
    icon: Search,
    n: "Módulo 2",
    t: "Desvendando o Vício",
    d: "O ciclo da recompensa, o FOMO e os hábitos inconscientes. Aprenda a identificar seus gatilhos pessoais.",
  },
  {
    icon: MoonStar,
    n: "Módulo 3",
    t: "O Protocolo Desligar & Dormir",
    d: "Cinco passos práticos para criar um santuário do sono, definir limites e domar a ansiedade noturna.",
  },
  {
    icon: Sprout,
    n: "Módulo 4",
    t: "Reconstruindo Hábitos",
    d: "Exercício, conexão humana real e desintoxicação digital contínua para um sono profundamente restaurador.",
  },
];

export const PROTOCOL_STEPS = [
  {
    t: "A Zona Livre de Telas",
    d: "Transforme seu quarto num santuário do sono, longe de qualquer dispositivo.",
  },
  {
    t: "O Toque de Recolher Digital",
    d: "Defina um horário fixo para desligar as telas e sinalizar ao cérebro que é hora de desacelerar.",
  },
  {
    t: "Substitutos Saudáveis",
    d: "Leitura, meditação, diário de gratidão — atividades que preparam a mente para o descanso.",
  },
  {
    t: "A Rotina Noturna Perfeita",
    d: "Um ritual relaxante e consistente que treina seu corpo para o sono profundo.",
  },
  {
    t: "Gerenciando a Ansiedade",
    d: "Técnicas simples como brain dump e respiração diafragmática para acalmar a mente agitada.",
  },
];

export const BEFORE_ITEMS = [
  "Rola o feed até de madrugada",
  "Acorda esgotado e irritado",
  "Mente acelerada e ansiosa",
  "Foco e humor despencando",
];

export const AFTER_ITEMS = [
  "Desliga as telas com tranquilidade",
  "Acorda descansado e com energia",
  "Mente calma pronta para o sono",
  "Clareza, bom humor e disposição",
];

export const TESTIMONIALS = [
  {
    text: "Eu passava horas rolando o Instagram na cama. Na primeira semana aplicando o toque de recolher digital já dormi como não dormia há anos. Mudou minha vida.",
    name: "Mariana Alves",
    role: "Professora, 34 anos",
    img: "https://i.pravatar.cc/80?img=47",
  },
  {
    text: "Achei que fosse mais um 'guia genérico', mas é embasado em ciência de verdade. O teste de dependência me abriu os olhos. Acordo com energia hoje.",
    name: "Rafael Souza",
    role: "Analista de TI, 29 anos",
    img: "https://i.pravatar.cc/80?img=12",
  },
  {
    text: "A parte de ansiedade noturna foi um divisor de águas. O brain dump esvaziou minha cabeça e finalmente parei de acordar 3h da manhã.",
    name: "Camila Ferreira",
    role: "Empreendedora, 41 anos",
    img: "https://i.pravatar.cc/80?img=45",
  },
  {
    text: "Simples, direto e prático. Montei minha rotina noturna em 10 minutos e em duas semanas minha concentração nos estudos disparou.",
    name: "Diego Martins",
    role: "Estudante, 24 anos",
    img: "https://i.pravatar.cc/80?img=33",
  },
  {
    text: "Trabalho em turnos e achava que insônia era meu destino. Os pilares do sono restaurador me devolveram noites tranquilas.",
    name: "Patrícia Lima",
    role: "Enfermeira, 38 anos",
    img: "https://i.pravatar.cc/80?img=26",
  },
  {
    text: "Vale cada centavo. O melhor investimento que fiz na minha saúde esse ano. Recomendo para todo mundo que vive grudado no celular.",
    name: "Lucas Andrade",
    role: "Designer, 31 anos",
    img: "https://i.pravatar.cc/80?img=15",
  },
];

export const OFFER_INCLUDES = [
  "Guia completo em PDF com 4 módulos e 45 páginas",
  "O Protocolo Desligar & Dormir passo a passo",
  "Teste de nível de dependência digital noturna",
  "Plano de implementação semana a semana",
  "Técnicas anti-ansiedade para acalmar a mente",
  "Lista de ferramentas e apps de bem-estar digital",
];

export const FAQS = [
  {
    q: "Como vou receber o guia?",
    a: "O acesso é 100% digital e imediato. Assim que a compra for confirmada pela Kiwify, você recebe o guia em PDF diretamente no seu e-mail para ler no celular, tablet ou computador.",
  },
  {
    q: "Preciso ter conhecimento técnico?",
    a: "Não. O guia foi escrito em linguagem simples, direta e sem jargões. Qualquer pessoa consegue aplicar o método — basta seguir o passo a passo do Protocolo Desligar & Dormir.",
  },
  {
    q: "Em quanto tempo verei resultados?",
    a: "Muitas pessoas relatam melhora já nos primeiros dias. Com aplicação consistente do protocolo, a transformação costuma se manifestar de forma clara entre a segunda e a terceira semana.",
  },
  {
    q: "E se eu uso o celular para trabalhar à noite?",
    a: "O método não exige que você abandone as telas — ele ensina a usá-las de forma estratégica. Você vai aprender ajustes práticos, substitutos saudáveis e limites inteligentes que protegem seu sono mesmo com rotina noturna de trabalho.",
  },
  {
    q: "O pagamento é seguro?",
    a: "Sim. O pagamento é processado pela Kiwify, uma das maiores plataformas de produtos digitais do Brasil, com criptografia de ponta a ponta. Além disso, você conta com garantia incondicional de 7 dias.",
  },
];
