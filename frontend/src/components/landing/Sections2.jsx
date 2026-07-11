import React from "react";
import { X, Check, Star, Quote } from "lucide-react";
import { Reveal } from "./shared";
import {
  MODULES,
  PROTOCOL_STEPS,
  BEFORE_ITEMS,
  AFTER_ITEMS,
  TESTIMONIALS,
  IMAGES,
} from "@/data/content";

/* ============ MODULES ============ */
export const ModulesSection = () => (
  <section className="bg-[#f7f4e9] py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-2xl md:text-3xl text-[#7a9a58]">
            O que você vai receber
          </span>
          <h2 className="mt-2 font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222]">
            4 módulos poderosos para transformar suas noites
          </h2>
          <p className="mt-4 text-[#5a7344]">
            Um método prático, gradual e baseado em ciência — do entendimento do problema
            à sua nova vida com sono de qualidade.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 gap-6">
        {MODULES.map((m, i) => (
          <Reveal key={m.n} delay={i * 0.07}>
            <div
              data-testid="module-card"
              className="h-full rounded-3xl bg-[#fdfbf4] border border-[#2e4222]/10 p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8fae72]/20">
                  <m.icon className="h-6 w-6 text-[#5a7344]" />
                </div>
                <span className="rounded-full bg-[#e8761e]/10 border border-[#e8761e]/30 px-3 py-1 text-xs font-bold text-[#a8500e]">
                  {m.n}
                </span>
              </div>
              <h3 className="mt-5 font-serif-h text-2xl font-semibold text-[#2e4222]">
                {m.t}
              </h3>
              <p className="mt-3 text-sm text-[#5a7344] leading-relaxed">{m.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ============ PROTOCOL ============ */
export const ProtocolSection = () => (
  <section className="bg-[#edefdd] py-20 md:py-28">
    <div className="mx-auto max-w-3xl px-5">
      <Reveal>
        <div className="text-center">
          <h2 className="font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222]">
            O Protocolo "Desligar &amp; Dormir"
          </h2>
          <p className="mt-4 text-[#5a7344]">
            Cinco passos claros e progressivos. Comece com o passo 1 hoje mesmo — e some um
            novo a cada semana.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 space-y-0">
        {PROTOCOL_STEPS.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.06}>
            <div data-testid="protocol-step" className="relative flex gap-5 pb-10 last:pb-0">
              {i < PROTOCOL_STEPS.length - 1 && (
                <span className="absolute left-6 top-14 bottom-0 w-px bg-[#8fae72]/40" />
              )}
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#2e4222] text-white font-serif-h text-xl font-bold shadow-md">
                {i + 1}
              </div>
              <div className="rounded-3xl bg-[#fdfbf4] border border-[#2e4222]/10 p-6 shadow-sm flex-1 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-serif-h text-xl font-semibold text-[#2e4222]">{s.t}</h3>
                <p className="mt-2 text-sm text-[#5a7344] leading-relaxed">{s.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ============ BEFORE / AFTER ============ */
export const BeforeAfterSection = () => (
  <section className="bg-[#f7f4e9] py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222]">
            Antes e depois do Protocolo
          </h2>
          <p className="mt-4 text-[#5a7344]">
            A transformação começa a se manifestar já na segunda ou terceira semana de
            aplicação consistente.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="h-full rounded-[2rem] bg-[#fdfbf4] border border-[#2e4222]/10 overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={IMAGES.before}
                alt="Antes: pessoa presa ao celular na cama"
                className="w-full h-56 object-cover grayscale-[35%]"
                data-testid="before-after-before-image"
              />
              <span className="absolute top-4 left-4 rounded-full bg-[#2e4222]/80 backdrop-blur px-4 py-1.5 text-xs font-bold text-white">
                Antes
              </span>
            </div>
            <div className="p-7">
              <h3 className="font-serif-h text-2xl font-semibold text-[#2e4222]">
                Refém da tela
              </h3>
              <ul className="mt-4 space-y-3">
                {BEFORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5a7344]">
                    <X className="mt-0.5 h-4 w-4 text-red-500/70 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[2rem] bg-[#fdfbf4] border-2 border-[#8fae72]/50 overflow-hidden shadow-lg shadow-[#8fae72]/10">
            <div className="relative">
              <img
                src={IMAGES.after}
                alt="Depois: pessoa serena e descansada ao amanhecer"
                className="w-full h-56 object-cover"
                data-testid="before-after-after-image"
              />
              <span className="absolute top-4 left-4 rounded-full bg-[#e8761e] px-4 py-1.5 text-xs font-bold text-white">
                Depois
              </span>
            </div>
            <div className="p-7">
              <h3 className="font-serif-h text-2xl font-semibold text-[#2e4222]">
                Dono das suas noites
              </h3>
              <ul className="mt-4 space-y-3">
                {AFTER_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#3c4d2e]">
                    <Check className="mt-0.5 h-4 w-4 text-[#7a9a58] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ============ TESTIMONIALS ============ */
export const TestimonialsSection = () => (
  <section className="bg-[#edefdd] py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222]">
            +2.000 pessoas já voltaram a dormir bem
          </h2>
          <p className="mt-4 text-[#5a7344]">
            Histórias reais de quem quebrou o ciclo da insônia digital.
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 0.07}>
            <div
              data-testid="testimonial-card"
              className="h-full rounded-3xl bg-[#fdfbf4] border border-[#2e4222]/10 p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform duration-300 flex flex-col"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-[#e8761e] text-[#e8761e]" />
                ))}
              </div>
              <p className="mt-4 text-sm text-[#3c4d2e] leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover border-2 border-[#8fae72]/40"
                />
                <div>
                  <div className="text-sm font-bold text-[#2e4222]">{t.name}</div>
                  <div className="text-xs text-[#5a7344]">{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ============ AUTHOR ============ */
export const AuthorSection = () => (
  <section className="bg-[#f7f4e9] py-20 md:py-28">
    <div className="mx-auto max-w-4xl px-5">
      <Reveal>
        <div
          data-testid="author-quote-block"
          className="grid md:grid-cols-[280px_1fr] gap-8 items-center rounded-[2rem] bg-[#fdfbf4] border border-[#2e4222]/10 p-8 md:p-10 shadow-sm"
        >
          <div className="relative mx-auto">
            <div className="absolute -inset-2 rounded-full bg-[#8fae72]/20 blur-lg" />
            <img
              src={IMAGES.author}
              alt="Autor do guia"
              className="relative h-52 w-52 md:h-60 md:w-60 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
          <div>
            <span className="font-script text-2xl text-[#7a9a58]">Uma palavra do autor</span>
            <div className="mt-3 flex gap-3">
              <Quote className="h-8 w-8 text-[#e8761e]/60 flex-shrink-0 rotate-180" />
              <blockquote className="font-serif-h italic text-xl md:text-2xl text-[#2e4222] leading-snug">
                "A mudança não acontece da noite para o dia — mas a sua próxima noite pode
                ser o começo de tudo."
              </blockquote>
            </div>
            <p className="mt-5 text-sm text-[#5a7344] leading-relaxed">
              Este guia foi criado com empatia, ciência e um único propósito: devolver a
              você o descanso que você merece.
            </p>
            <p className="mt-4 font-script text-3xl text-[#e8761e]">Siebra Neto</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
