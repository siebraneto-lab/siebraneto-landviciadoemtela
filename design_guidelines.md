{
  "brand": {
    "name": "Viciado em Tela, Refém da Insônia",
    "attributes": [
      "calmo e acolhedor (bem-estar)",
      "confiável e científico (sem cara de ‘místico’)",
      "orgânico/natural (folhas, curvas suaves)",
      "alta conversão (urgência + prova social + clareza)",
      "mobile-first (tráfego de anúncios)"
    ],
    "non_negotiables": [
      "Manter o texto/copy em português EXATAMENTE como no site original e na mesma ordem de seções.",
      "Tema claro baseado na paleta da imagem de referência: creme/off-white + verdes sálvia/floresta + acentos dourado/âmbar.",
      "Trocar apenas imagens que conflitam com o tema claro por fotos claras, naturais e serenas.",
      "Reforçar elementos de conversão: CTAs fortes, microinterações, selos de confiança, sticky bar com timer.",
      "Todos elementos interativos e informativos-chave DEVEM ter data-testid (kebab-case)."
    ]
  },

  "design_tokens": {
    "typography": {
      "google_fonts_import": "@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:opsz,wght@8..144,500,600,700&family=Figtree:wght@400;500;600;700&display=swap');",
      "font_families": {
        "display": "'EB Garamond', ui-serif, Georgia, serif",
        "body": "'Figtree', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
      },
      "scale_tailwind": {
        "h1": "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight",
        "h2": "text-base md:text-lg font-medium text-muted-foreground",
        "section_title": "text-2xl sm:text-3xl font-semibold tracking-tight",
        "body": "text-sm sm:text-base leading-relaxed",
        "small": "text-xs sm:text-sm"
      },
      "usage_rules": [
        "Headlines (H1/section titles) em EB Garamond para sensação editorial/premium.",
        "Corpo, bullets, FAQ e microcopy em Figtree para legibilidade mobile.",
        "Evitar CAPS LOCK em blocos longos; usar apenas em badges curtas (ex: ‘OFERTA’)."
      ]
    },

    "color_system": {
      "note": "Valores em HSL para casar com shadcn tokens (index.css). Ajustar para contraste AA.",
      "light_theme_root": {
        "--background": "38 45% 96%",
        "--foreground": "160 18% 14%",

        "--card": "40 50% 98%",
        "--card-foreground": "160 18% 14%",

        "--popover": "40 50% 98%",
        "--popover-foreground": "160 18% 14%",

        "--primary": "158 28% 22%",
        "--primary-foreground": "40 50% 98%",

        "--secondary": "120 18% 92%",
        "--secondary-foreground": "158 28% 22%",

        "--muted": "36 28% 92%",
        "--muted-foreground": "160 10% 34%",

        "--accent": "42 55% 88%",
        "--accent-foreground": "160 18% 14%",

        "--destructive": "0 72% 52%",
        "--destructive-foreground": "40 50% 98%",

        "--border": "34 18% 84%",
        "--input": "34 18% 84%",
        "--ring": "158 28% 22%",

        "--radius": "1rem",

        "custom": {
          "--brand-cream": "38 45% 96%",
          "--brand-paper": "40 50% 98%",
          "--brand-sage": "122 18% 72%",
          "--brand-forest": "158 28% 22%",
          "--brand-moss": "150 18% 34%",
          "--brand-amber": "38 78% 55%",
          "--brand-gold-soft": "42 55% 88%",
          "--shadow-soft": "0 0% 0% / 0.06",
          "--shadow-med": "0 0% 0% / 0.10"
        }
      },
      "state_colors": {
        "success": "142 45% 35%",
        "warning": "38 78% 55%",
        "info": "190 45% 35%"
      },
      "gradients": {
        "allowed_usage": [
          "Somente em fundos de seção (hero/topo) e overlays decorativos.",
          "Nunca em áreas de leitura longa (cards de texto, FAQ, depoimentos).",
          "Nunca em elementos <100px (badges pequenos, ícones).",
          "Nunca exceder 20% do viewport."
        ],
        "recipes": {
          "hero_wash": "bg-[radial-gradient(1200px_600px_at_20%_0%,hsl(var(--brand-gold-soft))_0%,transparent_55%),radial-gradient(900px_500px_at_90%_10%,hsl(var(--brand-sage))_0%,transparent_55%)]",
          "section_warm": "bg-[linear-gradient(135deg,hsl(var(--brand-paper))_0%,hsl(var(--brand-cream))_55%,hsl(var(--brand-paper))_100%)]"
        }
      },
      "texture": {
        "noise_overlay_css": ".noise-overlay{position:absolute;inset:0;pointer-events:none;background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.10%22/%3E%3C/svg%3E');mix-blend-mode:multiply;opacity:.35;}",
        "usage": [
          "Aplicar noise-overlay apenas em hero e faixas decorativas (não em cards de texto).",
          "Manter opacidade baixa para não sujar o layout."
        ]
      }
    },

    "spacing_and_layout": {
      "container": "max-w-6xl mx-auto px-4 sm:px-6",
      "section_padding": "py-12 sm:py-16",
      "grid_rules": [
        "Mobile-first: 1 coluna; subir para 2 colunas em sm/md; 3 colunas apenas quando necessário (ex: stats).",
        "Usar mais respiro: gap-6 sm:gap-8; cards com p-5 sm:p-6.",
        "Evitar centralizar tudo: títulos alinhados à esquerda; CTAs podem ser centralizados apenas em blocos de oferta/final."
      ],
      "card_style": "rounded-2xl bg-card shadow-[0_10px_30px_-18px_hsl(var(--shadow-med))] border border-border"
    },

    "shadows_and_radius": {
      "radius": {
        "card": "rounded-2xl",
        "button": "rounded-xl",
        "pill": "rounded-full"
      },
      "shadow_presets": {
        "soft": "shadow-[0_10px_30px_-18px_hsl(var(--shadow-med))]",
        "lift_on_hover": "hover:shadow-[0_18px_50px_-26px_hsl(var(--shadow-med))]"
      }
    }
  },

  "components": {
    "component_path": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "accordion": "/app/frontend/src/components/ui/accordion.jsx",
      "avatar": "/app/frontend/src/components/ui/avatar.jsx",
      "progress": "/app/frontend/src/components/ui/progress.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "sonner_toast": "/app/frontend/src/components/ui/sonner.jsx"
    },

    "section_blueprints": {
      "hero": {
        "layout": [
          "Topo com badge de urgência + mini prova social (avatars + ‘+2.000 pessoas’).",
          "H1 grande (EB Garamond) + subtítulo (Figtree) + CTA primário.",
          "Ao lado/abaixo (mobile) um card de oferta com preço riscado e timer 30min.",
          "Fundo com gradient leve (hero_wash) + noise overlay + formas orgânicas (SVG)."
        ],
        "cta": {
          "primary_button_classes": "bg-primary text-primary-foreground hover:bg-[hsl(var(--brand-forest))] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
          "microinteraction": [
            "Hover: leve lift (translate-y-[-1px]) + sombra mais forte.",
            "Active: scale-95.",
            "Pulse sutil no ícone/halo do CTA a cada 6s (prefers-reduced-motion respeitado)."
          ]
        },
        "data_testids": {
          "primary_cta": "hero-primary-cta-button",
          "countdown": "hero-countdown-timer",
          "social_proof": "hero-social-proof"
        }
      },

      "pain_points": {
        "layout": "Grid de 4 cards (1 col mobile, 2 col sm). Cada card com ícone line (lucide-react) + título + texto.",
        "card_hover": "hover:-translate-y-0.5 hover:border-[hsl(var(--brand-sage))]",
        "data_testids": {
          "card": "pain-point-card"
        }
      },

      "stats_band": {
        "layout": "Faixa com 3 stats em cards compactos (ou 3 col md). Fundo sólido (secondary) para contraste.",
        "visual": "Números grandes em display font; label em muted.",
        "data_testids": {
          "stat": "stats-band-stat"
        }
      },

      "science_explainer": {
        "layout": "3 cards (Luz Azul, Dopamina, Ciclo Circadiano) com mini-ilustração/ícone + bullets.",
        "accent": "Usar borda esquerda fina em amber (border-l-4 border-[hsl(var(--brand-amber))]) para ‘científico’.",
        "data_testids": {
          "science_card": "science-explainer-card"
        }
      },

      "modules": {
        "layout": "4 cards (1 col mobile, 2 col sm). Cada módulo com badge ‘Módulo X’ e lista curta.",
        "data_testids": {
          "module_card": "module-card"
        }
      },

      "protocol_steps": {
        "layout": "Lista numerada em 5 passos com conectores (linha vertical) + micro animação de entrada ao scroll.",
        "component": "Pode ser feito com divs + Badge para número; sem precisar de timeline lib.",
        "data_testids": {
          "step": "protocol-step"
        }
      },

      "before_after": {
        "layout": "Comparação lado a lado em md; em mobile vira carrossel simples (shadcn carousel) ou stack.",
        "component": "Preferir /ui/carousel.jsx se houver swipe no mobile.",
        "data_testids": {
          "before_image": "before-after-before-image",
          "after_image": "before-after-after-image"
        }
      },

      "testimonials": {
        "layout": "6 cards com Avatar + nome + texto. 1 col mobile, 2 col sm, 3 col lg.",
        "trust": "Adicionar estrelas (lucide Star) em amber suave.",
        "data_testids": {
          "testimonial": "testimonial-card"
        }
      },

      "author_quote": {
        "layout": "Card largo com foto do autor (clara) + citação em EB Garamond itálico + assinatura.",
        "data_testids": {
          "author_block": "author-quote-block"
        }
      },

      "offer": {
        "anchor": "#oferta",
        "layout": [
          "Card principal com preço (riscado + atual), lista do que recebe, selos Kiwify/segurança.",
          "Timer destacado (Progress + texto) e CTA grande.",
          "Adicionar ‘chips’ de confiança: ‘Compra segura’, ‘Acesso imediato’, ‘7 dias de garantia’."
        ],
        "data_testids": {
          "offer_card": "offer-card",
          "offer_cta": "offer-buy-now-button",
          "offer_timer": "offer-countdown-timer",
          "price": "offer-price"
        }
      },

      "guarantee": {
        "layout": "Bloco com ícone de escudo + texto. Fundo accent (gold-soft) bem leve.",
        "data_testids": {
          "guarantee": "guarantee-block"
        }
      },

      "faq": {
        "component": "Accordion (shadcn)",
        "layout": "Perguntas em accordion com bordas suaves; ícone chevron.",
        "data_testids": {
          "faq": "faq-accordion",
          "faq_item": "faq-item"
        }
      },

      "final_cta": {
        "layout": "Seção curta com headline + timer + CTA. Fundo sólido (secondary) para ‘fechar’ com clareza.",
        "data_testids": {
          "final_cta": "final-cta-button",
          "final_timer": "final-countdown-timer"
        }
      },

      "sticky_bottom_bar": {
        "layout": "Barra fixa no bottom com blur leve (glass) + preço + timer + CTA.",
        "classes": "fixed bottom-3 left-0 right-0 z-50 px-4",
        "inner_classes": "mx-auto max-w-6xl rounded-2xl border border-border bg-[hsl(var(--brand-paper))]/85 backdrop-blur-md shadow-[0_18px_60px_-30px_hsl(var(--shadow-med))]",
        "data_testids": {
          "sticky_bar": "sticky-purchase-bar",
          "sticky_cta": "sticky-buy-now-button",
          "sticky_timer": "sticky-countdown-timer"
        }
      }
    },

    "button_variants": {
      "primary": {
        "shape": "rounded-xl",
        "tailwind": "rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-[0_12px_30px_-18px_hsl(var(--shadow-med))] hover:shadow-[0_18px_50px_-26px_hsl(var(--shadow-med))] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        "focus": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
      },
      "secondary": {
        "tailwind": "rounded-xl bg-secondary text-secondary-foreground border border-border px-5 py-3 text-sm font-semibold hover:bg-[hsl(var(--brand-sage))]/25"
      },
      "ghost": {
        "tailwind": "rounded-xl bg-transparent text-foreground px-4 py-2 text-sm font-semibold hover:bg-muted"
      }
    }
  },

  "motion": {
    "library": {
      "name": "framer-motion",
      "install": "npm i framer-motion",
      "usage": [
        "Scroll-reveal em seções (fade + translateY 12px).",
        "Pulse sutil no CTA (box-shadow) com keyframes CSS se preferir sem lib.",
        "Respeitar prefers-reduced-motion: reduzir durations e remover loops."
      ]
    },
    "principles": [
      "Nada de transition: all. Use transition-colors, transition-shadow, transition-opacity.",
      "Microinterações: hover lift (1-2px), foco visível, pressed scale.",
      "Timers: trocar números com crossfade rápido (150ms) para sensação ‘vivo’."
    ],
    "css_snippets": {
      "cta_glow": "@keyframes ctaGlow{0%,100%{box-shadow:0 12px 30px -18px hsl(var(--shadow-med));}50%{box-shadow:0 18px 55px -26px hsl(var(--shadow-med));}} .cta-glow{animation:ctaGlow 6s ease-in-out infinite;} @media (prefers-reduced-motion: reduce){.cta-glow{animation:none;}}"
    }
  },

  "accessibility": {
    "rules": [
      "Contraste AA: texto em forest/foreground sobre cream/paper; evitar sage claro para texto.",
      "Focus ring sempre visível (ring em forest).",
      "Botões e áreas clicáveis >= 44px de altura no mobile.",
      "Timers devem ter aria-label (ex: ‘Tempo restante da oferta’).",
      "Accordion: manter navegação por teclado (shadcn já cobre)."
    ]
  },

  "image_urls": {
    "note": "O tool de imagens falhou (provedores indisponíveis). Use placeholders agora e depois substituir por fotos claras/serenas (Unsplash/Pexels) mantendo o tema.",
    "categories": [
      {
        "category": "hero",
        "description": "Foto clara de quarto com luz da manhã / pessoa descansando (sem clima noturno).",
        "urls": [
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
        ]
      },
      {
        "category": "before_after",
        "description": "Antes: pessoa cansada com celular na cama (ainda claro). Depois: pessoa relaxada lendo/respirando sem tela.",
        "urls": [
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
        ]
      },
      {
        "category": "testimonials_avatars",
        "description": "Avatares neutros (pode usar UI Avatar fallback).",
        "urls": [
          "https://i.pravatar.cc/96?img=12",
          "https://i.pravatar.cc/96?img=32",
          "https://i.pravatar.cc/96?img=45"
        ]
      },
      {
        "category": "author",
        "description": "Foto do autor em fundo claro (ou placeholder).",
        "urls": [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        ]
      },
      {
        "category": "trust_badges",
        "description": "Selos (SVGs locais recomendados). Se precisar remoto, usar ícones simples (shield/lock) via lucide-react.",
        "urls": []
      }
    ]
  },

  "instructions_to_main_agent": {
    "global_css_updates": [
      "Atualizar /app/frontend/src/index.css: substituir tokens :root para a paleta clara (cream/sage/forest/amber) acima.",
      "Adicionar import do Google Fonts no topo do index.css e setar body font-family para Figtree; headings via classes.",
      "Remover/ignorar estilos default do App.css (header escuro). Não centralizar container global.",
      "Adicionar utilitários CSS: .noise-overlay e animação .cta-glow (sem transition: all)."
    ],
    "component_usage": [
      "Usar shadcn Button/Card/Badge/Avatar/Accordion/Separator/Progress/Carousel.",
      "FAQ obrigatoriamente com Accordion.",
      "Toasts (se usados) com Sonner (/components/ui/sonner.jsx)."
    ],
    "conversion_enhancements": [
      "CTA primário repetido: hero, oferta, final CTA, sticky bar.",
      "Timer persistente: hero + oferta + final + sticky bar (mesma fonte de verdade no estado).",
      "Adicionar prova social acima da dobra (avatars + contagem).",
      "Adicionar selos de confiança próximos ao CTA (lock/shield + ‘Compra segura’ etc).",
      "Adicionar microinterações: hover lift, pressed scale, focus ring, pulse sutil no CTA (respeitar reduced motion)."
    ],
    "testing_requirements": [
      "Adicionar data-testid em: todos botões CTA, timers, accordion FAQ, cards de depoimento, preço, sticky bar.",
      "Usar kebab-case e nomes por função (ex: offer-buy-now-button)."
    ],
    "js_file_note": [
      "O projeto usa .jsx/.js: criar componentes em .jsx e evitar exemplos em .tsx.",
      "Framer Motion em React funciona normalmente em .jsx."
    ]
  },

  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
