# plan.md — Landing Page (clone + tema claro)

## 1) Objetivos
- **Status atual (atingido na Fase 2/V1):** Landing page recriada em React (frontend-only) com **estrutura e copy 100% idênticos** ao original (títulos, textos, depoimentos, módulos, FAQ, preços R$ 39,99 → R$ 19,99, CTAs).
- Aplicar **tema claro wellness** baseado na imagem de referência: fundo creme (#f7f4e9), verde sálvia (#8fae72), verde floresta (#2e4222), dourado (#c9922e), sensação orgânica/natural.
- **Substituir imagens** que não condizem com o tema/estética por alternativas relacionadas a sono/descanso e estética clara (feito nas principais imagens; manter coerência geral).
- Manter CTAs com link **placeholder `#`** (exceto âncoras internas como `#oferta`), pronto para integrar checkout real depois.
- Preservar/elevar elementos de conversão: **contagem regressiva 30 min**, sticky bar, social proof, efeitos visuais, microinterações.

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

**Passos (V1) — concluído**
1. **Analisar assets atuais** (imagens do original) e classificar: (a) condizente com tema “sono” porém estética escura; (b) fora do tema; (c) ok. ✅
2. **Selecionar novas imagens** coerentes com sono/descanso + estética clara/wellness para:
   - Hero ✅ (trocado de “caminhada em parque” → “quarto claro/sereno”)
   - Before/After ✅ (After com estética clara/serena)
   - Pain/Autor e demais: manter ou ajustar conforme coerência ✅
   - Avatares via pravatar mantidos ✅
3. **Definir design system** (Tailwind + CSS vars) com paleta clara e tipografia (serif display + sans body + script accent). ✅
4. **Implementar página em React (frontend-only)** reproduzindo as 13 seções com o mesmo conteúdo:
   - Hero (badge “Você não está sozinho”, H1, subtítulo, timer 30:00, CTA, avatars +2.000, imagem, stat card “+2.000 noites transformadas”) ✅
   - Pain section (4 cards + imagem) ✅
   - Stats (90% / 2h+ / 1 em 3) ✅
   - Science (Luz Azul/Dopamina/Ciclo circadiano) + fontes ✅
   - 4 módulos ✅
   - Protocolo 5 passos ✅
   - Antes/Depois ✅
   - Depoimentos (6) ✅
   - Autor (quote + “Siebra Neto”) ✅
   - Oferta (#oferta, desconto, preço, CTA, selos) ✅
   - Garantia 7 dias ✅
   - FAQ (5 itens) ✅
   - Final CTA section (dark green) ✅
   - Sticky bottom bar (preço + timer + CTA) ✅
5. **Elementos de conversão e efeitos** ✅
   - Countdown 30 min evergreen com persistência em `localStorage` (`nr_offer_deadline`), sincronizado em 4 instâncias (hero/oferta/final/sticky). ✅
   - CTAs com âncora e rolagem suave; **ajuste de offset**: issue low de scroll offset (335px) corrigida com `scrollTo` programático (hero e sticky). ✅
   - Animações discretas: scroll reveal (framer-motion), hover lift, glow/pulse CTA, grain/floating. ✅
6. **Acessibilidade e responsividade** ✅
   - Mobile-first, sem overflow horizontal, foco/contraste adequados. ✅

**Checkpoint (fim da Fase 2) — concluído**
- Conteúdo 100% idêntico ao original (copy e ordem), apenas tema/imagens alterados. ✅
- Timer e sticky bar funcionando. ✅
- CTAs com placeholder `#` conforme pedido. ✅

**Testes (testing agent) — concluído**
- Iteration_1: **98% pass**, sem bugs críticos. ✅
- Único ponto LOW (offset de scroll para #oferta) **corrigido**. ✅

### Fase 3 — Refinos e expansão (pós V1)
**User stories (Refino)**
1. Como visitante, quero carregamento rápido (imagens otimizadas) para não abandonar a página.
2. Como visitante, quero consistência visual (paleta) em todas as seções para sentir profissionalismo.
3. Como visitante, quero microcopy de urgência/prova social bem posicionada para aumentar confiança.
4. Como visitante, quero uma leitura confortável (espaçamento/line-height) para consumir todo o conteúdo.
5. Como dono do site, quero imagens 100% coerentes (tema sono + estética clara) para fortalecer marca.
6. Como dono do site, quero **integrar o checkout real** quando eu fornecer o link.

**Passos (Refino) — sob demanda**
1. Otimizar imagens (compressão, dimensões, `loading="lazy"`, preconnect, `srcset` se aplicável).
2. Ajustar animações/performance; respeitar `prefers-reduced-motion` (já considerado, mas pode ser polido).
3. Polir UI: sombras, separadores orgânicos sutis, consistência de ícones e espaçamento.
4. Revisar UX do sticky bar (eventual botão de fechar/controle de frequência — somente se não reduzir conversão).
5. **Troca fina de imagens** restantes que possam não estar 100% alinhadas ao “tema claro/sono”.
6. Quando o usuário enviar o link, substituir `href="#"` por checkout real (Kiwify) e adicionar tracking/UTMs se necessário.

**Testes (após refino)**
- Lighthouse quick pass (perf/a11y), cross-browser sanity, verificação final de conteúdo.

## 3) Next Actions
1. (Opcional) Revisar lista de imagens e substituir as que ainda estiverem menos coerentes com “sono + estética clara”.
2. (Opcional) Otimização de performance (imagens/lazy loading) e micro-polish visual.
3. (Quando disponível) Inserir link real do checkout Kiwify no CTA principal/oferta/final.
4. Rodar novo ciclo curto de testes após qualquer alteração (principalmente após integrar checkout).

## 4) Success Criteria
- Landing page replica estrutura e copy do original sem divergências. ✅
- Tema claro fiel à referência (creme + verdes + dourado), aparência “saúde e bem-estar”. ✅
- Imagens coerentes com o tema (sono/descanso/uso de tela) e com estética clara. ✅ (com espaço para refino opcional)
- Countdown 30 min persiste e aparece em Hero/Oferta/CTA final/Sticky bar; sincronizado. ✅
- CTAs funcionam (âncoras/scroll com offset adequado), FAQ abre/fecha, responsivo e sem regressões visuais. ✅