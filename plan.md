# plan.md — Landing Page (clone + tema claro)

## 1) Objetivos
- Recriar a landing page fornecida **tal qual** em estrutura e **com o mesmo conteúdo/copy** (títulos, textos, depoimentos, preços R$ 39,99 → R$ 19,99, módulos, FAQ, CTAs).
- Aplicar **novo tema claro** baseado na imagem de referência (wellness): fundos creme/bege, verdes (sage/forest), acentos dourados, sensação orgânica/natural.
- **Substituir imagens** que não estejam condizentes com o tema/estética por alternativas relacionadas a sono/descanso bem-estar, mantendo alta conversão.
- Manter CTAs com link **placeholder `#`**.
- Preservar/elevar elementos de conversão: contagem regressiva 30 min, sticky bar, social proof, efeitos visuais, microinterações.

## 2) Implementation Steps

### Fase 1 — POC (pular)
- Não há integrações externas nem fluxo arriscado; construir diretamente.

### Fase 2 — V1 App Development (clone + redesign)
**User stories (V1)**
1. Como visitante, quero entender em 5s o problema (insônia digital) e a promessa do guia para decidir continuar lendo.
2. Como visitante, quero ver prova social (+2.000 pessoas e depoimentos) para confiar antes de comprar.
3. Como visitante, quero um CTA visível e repetido, com rolagem suave até a oferta, para comprar sem fricção.
4. Como visitante, quero ver preço com âncora e desconto + timer para sentir urgência e agir agora.
5. Como visitante, quero ler FAQ e garantia de 7 dias para reduzir risco percebido.

**Passos**
1. **Analisar assets atuais** (todas as imagens do crawl) e classificar: (a) condizente com tema “sono” porém estética escura; (b) fora do tema; (c) ok.
2. **Selecionar novas imagens** (clareadas, manhã/luz natural/serenidade/uso consciente de telas) para:
   - Hero
   - Pain section image
   - Before/After
   - Autor
   - Qualquer outra que conflite com o tema claro/wellness
   (manter avatars dos depoimentos via pravatar).
3. **Definir design system** (Tailwind + CSS vars):
   - Paleta: creme/bege de fundo, verde sage/forest para headers/botões, dourado quente para badges/urgência.
   - Tipografia: headings com serifa ou semi-serif (opcional) + body sans legível.
   - Componentes: botões, cards, badges, accordion, sticky bar.
4. **Implementar página em React** (frontend-only) reproduzindo as 13 seções:
   - Hero com badge “Você não está sozinho”, H1, subtítulo, timer 30:00, CTA, avatars +2.000, imagem hero, stat card “+2.000 noites transformadas”.
   - Pain section com 4 cards.
   - Stats 90% / 2h+ / 1 em 3.
   - Science (Luz Azul/Dopamina/Ciclo circadiano) + fontes.
   - 4 módulos.
   - Protocolo 5 passos.
   - Antes/Depois com bullets.
   - Depoimentos (6).
   - Autor (quote + nome).
   - Oferta (desconto, preço riscado, CTA, selos, garantia).
   - FAQ accordion (5 perguntas).
   - Final CTA section.
   - Sticky bottom bar (preço + timer + CTA para #oferta).
5. **Elementos de conversão e efeitos**
   - Countdown funcional de 30 min: persistir em `localStorage` (timestamp de expiração) para não resetar em refresh.
   - Scroll spy leve/anchors: botões levam ao bloco de oferta `#oferta`.
   - Animações discretas (fade/slide on scroll), hover states, glow/sombra suave em CTAs.
   - Badges/selos ("Desconto relâmpago", “Compra segura”, “Garantia 7 dias”) com estilo claro.
6. **Acessibilidade e responsividade**
   - Contrast ratio no tema claro, foco visível, headings semânticos, mobile-first.

**Checkpoint (fim da Fase 2)**
- Conteúdo 100% idêntico ao original (copy e ordem), apenas tema/imagens alterados.
- Timer e sticky bar funcionando.

**Testes (chamar testing agent)**
- Verificar: timer persiste, CTAs rolam para oferta, accordion FAQ abre/fecha, layout mobile/desktop, nenhuma quebra visual.

### Fase 3 — Refinos e expansão (pós V1)
**User stories (Refino)**
1. Como visitante, quero carregamento rápido (imagens otimizadas) para não abandonar a página.
2. Como visitante, quero ver consistência visual (paleta) em todas as seções para sentir profissionalismo.
3. Como visitante, quero microcopy de urgência/prova social bem posicionada para aumentar confiança.
4. Como visitante, quero uma leitura confortável (espaçamento/line-height) para consumir todo o conteúdo.
5. Como dono do site, quero imagens 100% coerentes (tema sono + estética clara) para fortalecer marca.

**Passos**
1. Otimizar imagens (tamanho, compressão, `loading="lazy"`, `srcset` se aplicável).
2. Ajustar animações para não impactar performance; respeitar `prefers-reduced-motion`.
3. Polir UI: sombras, separadores orgânicos (waves/gradients suaves), consistência de ícones.
4. Revisar UX de sticky bar (fechamento opcional? somente se não reduzir conversão) e estados hover/focus.

**Testes (chamar testing agent)**
- Lighthouse quick pass (perf/ a11y), cross-browser sanity (Chrome/Firefox), verificação final de conteúdo.

## 3) Next Actions
1. Rodar agente de visão para sugerir imagens novas (tema sono/insônia digital) com estética clara/wellness.
2. Rodar agente de design para definir tokens (cores/typography/components) a partir da imagem de referência.
3. Implementar a página completa em React/Tailwind/shadcn em uma entrega (mínimo de chamadas de escrita).
4. Rodar testing agent e corrigir issues.

## 4) Success Criteria
- A landing page replica estrutura e copy do original sem divergências.
- Tema claro fiel à referência (creme + verdes + dourado), aparência “saúde e bem-estar”.
- Todas as imagens são coerentes com o tema (sono/descanso/uso de tela) e com estética clara.
- Countdown 30 min persiste e aparece em Hero/Oferta/CTA final/Sticky bar.
- CTAs funcionam (âncoras/scroll), FAQ accordion ok, responsivo e sem regressões visuais.
