import React, { useState, useEffect } from "react";
import { Flame, Check, ShieldCheck, Plus, Minus, Sun } from "lucide-react";
import { Reveal, CountdownDisplay, CtaButton, KiwifySeal, UrgencyBadge } from "./shared";
import { OFFER_INCLUDES, FAQS, CHECKOUT_URL } from "@/data/content";

/* ============ OFFER ============ */
export const OfferSection = ({ minutes, seconds }) => (
  <section id="oferta" className="bg-[#edefdd] py-20 md:py-28 scroll-mt-6">
    <div className="mx-auto max-w-3xl px-5">
      <Reveal>
        <div className="text-center">
          <UrgencyBadge>Oferta expira em 30:00 — não perca!</UrgencyBadge>
          <h2 className="mt-5 font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222]">
            Comece hoje sua nova vida com sono de qualidade
          </h2>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div
          data-testid="offer-card"
          className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#fdfbf4] border border-[#2e4222]/10 shadow-2xl shadow-[#2e4222]/10"
        >
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#8fae72]/20 blur-2xl" />
          <div className="bg-[#2e4222] px-5 sm:px-8 py-6 text-center">
            <div className="inline-flex items-center gap-2 text-[#f4a259] font-bold text-sm">
              <Flame className="h-4 w-4" /> DESCONTO RELÂMPAGO — 50% OFF
            </div>
            <h3 className="mt-2 font-serif-h text-2xl md:text-3xl font-semibold text-white">
              Viciado em Tela, Refém da Insônia
            </h3>
            <p className="text-white/60 text-sm">
              O Guia Definitivo para Reconquistar Suas Noites
            </p>
          </div>
          <div className="p-5 sm:p-8 md:p-10">
            <ul className="grid sm:grid-cols-2 gap-3">
              {OFFER_INCLUDES.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-[#3c4d2e]">
                  <Check className="mt-0.5 h-4 w-4 text-[#7a9a58] flex-shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-center">
              <div
                className="flex flex-wrap items-end justify-center gap-3"
                data-testid="offer-price"
              >
                <span className="text-[#5a7344]/60 text-xl sm:text-2xl font-medium line-through">
                  R$ 39,99
                </span>
                <div className="font-serif-h text-5xl sm:text-6xl md:text-7xl font-bold text-[#2e4222] leading-none">
                  R$ 19<span className="text-2xl sm:text-3xl align-top">,99</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-[#cf5f10] font-semibold text-center">
                Você economiza R$ 20,00 — apenas nos próximos 30 minutos
              </p>
              <div className="mt-6 w-full max-w-xs">
                <CountdownDisplay
                  minutes={minutes}
                  seconds={seconds}
                  variant="light"
                  testId="pricing-countdown"
                />
              </div>
              <div className="mt-8 w-full flex flex-col items-center gap-4">
                <CtaButton
                  testId="pricing-buy-button"
                  href={CHECKOUT_URL}
                  className="w-full max-w-sm"
                >
                  Quero meu guia por R$ 19,99
                </CtaButton>
                <KiwifySeal testId="pricing-kiwify-seal" />
                <p className="text-xs text-[#5a7344]/70 flex items-center gap-1.5 text-center px-2">
                  <ShieldCheck className="h-3.5 w-3.5" /> Acesso imediato após a compra ·
                  Compra 100% segura
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ============ GUARANTEE ============ */
export const GuaranteeSection = () => (
  <section className="bg-[#f7f4e9] py-16">
    <div className="mx-auto max-w-3xl px-5">
      <Reveal>
        <div
          data-testid="guarantee-block"
          className="flex flex-col md:flex-row items-center gap-6 rounded-3xl border-2 border-dashed border-[#8fae72]/60 bg-[#fdfbf4] p-8 text-center md:text-left"
        >
          <div className="flex-shrink-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#8fae72]/20">
            <ShieldCheck className="h-9 w-9 text-[#5a7344]" />
          </div>
          <div>
            <h3 className="font-serif-h text-2xl font-semibold text-[#2e4222]">
              Garantia incondicional de 7 dias
            </h3>
            <p className="mt-2 text-sm text-[#5a7344] leading-relaxed">
              Aplique o método sem risco. Se em 7 dias você não sentir que está no caminho
              para reconquistar seu sono, devolvemos 100% do seu investimento. O risco é
              todo nosso.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ============ FAQ ============ */
const FaqItem = ({ faq, index, open, onToggle }) => (
  <div
    data-testid="faq-item"
    className="rounded-2xl bg-[#fdfbf4] border border-[#2e4222]/10 overflow-hidden"
  >
    <button
      data-testid={`faq-toggle-${index}`}
      onClick={onToggle}
      aria-expanded={open}
      className="w-full flex items-center justify-between gap-4 p-5 text-left"
    >
      <span className="font-semibold text-[#2e4222]">{faq.q}</span>
      {open ? (
        <Minus className="h-5 w-5 text-[#e8761e] flex-shrink-0" />
      ) : (
        <Plus className="h-5 w-5 text-[#8fae72] flex-shrink-0" />
      )}
    </button>
    <div
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <p className="px-5 pb-5 text-sm text-[#5a7344] leading-relaxed">{faq.a}</p>
      </div>
    </div>
  </div>
);

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-[#f7f4e9] pb-24 pt-8">
      <div className="mx-auto max-w-2xl px-5">
        <Reveal>
          <h2 className="text-center font-serif-h text-3xl md:text-4xl font-bold text-[#2e4222]">
            Perguntas frequentes
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <FaqItem
                faq={f}
                index={i}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ FINAL CTA ============ */
export const FinalCtaSection = ({ minutes, seconds }) => (
  <section className="relative bg-[#2e4222] pt-24 pb-52 md:pb-40 grain overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#8fae72]/25 blur-[120px] soft-glow" />
    <div className="relative z-10 mx-auto max-w-2xl px-5 text-center">
      <Reveal>
        <Sun className="mx-auto h-10 w-10 text-[#f4a259] float-slow" />
        <h2 className="mt-6 font-serif-h text-3xl md:text-5xl font-bold text-white leading-tight">
          Não permita que o celular continue roubando suas noites
        </h2>
        <p className="mt-5 text-white/70">
          Você já deu o passo mais difícil: reconhecer o problema. Agora reconquiste seu
          sono, sua energia e sua vida — uma noite de cada vez.
        </p>
        <div className="mt-8 mx-auto max-w-xs">
          <CountdownDisplay
            minutes={minutes}
            seconds={seconds}
            variant="dark"
            testId="final-countdown"
          />
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CtaButton testId="final-buy-button" href={CHECKOUT_URL} className="w-full sm:w-auto">
            Garantir meu guia por R$ 19,99
          </CtaButton>
          <KiwifySeal onDark testId="final-kiwify-seal" />
        </div>
        <p className="mt-8 font-script text-3xl text-[#f4a259]">
          Boas noites de sono para você.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ============ STICKY BAR ============ */
export const StickyBar = ({ minutes, seconds }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 550);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-testid="sticky-purchase-bar"
      className={`fixed bottom-0 inset-x-0 z-50 bg-[#2e4222]/95 backdrop-blur-lg border-t border-white/10 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-3">
        <div className="leading-tight">
          <div className="text-white/50 text-[10px] md:text-xs line-through">R$ 39,99</div>
          <div className="text-white font-serif-h text-xl md:text-2xl font-bold">
            R$ 19,99
          </div>
        </div>
        <div
          data-testid="sticky-countdown"
          className="text-[#f4a259] text-xs md:text-base font-bold tabular-nums"
        >
          {minutes}:{seconds}
        </div>
        <a
          href={CHECKOUT_URL}
          data-testid="sticky-buy-button"
          className="flex-1 max-w-[55%] md:max-w-xs text-center rounded-full bg-[#e8761e] hover:bg-[#cf5f10] text-white font-bold py-3 text-sm md:text-base transition-colors duration-300"
        >
          Comprar agora
        </a>
      </div>
    </div>
  );
};
