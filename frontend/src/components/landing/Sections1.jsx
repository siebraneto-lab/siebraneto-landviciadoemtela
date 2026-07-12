import React from "react";
import { Sparkles, ChevronDown, TrendingDown } from "lucide-react";
import { Reveal, CountdownDisplay, CtaButton, UrgencyBadge } from "./shared";
import { PAINS, STATS, SCIENCE, IMAGES } from "@/data/content";

/* ============ HERO ============ */
export const Hero = ({ minutes, seconds }) => (
  <section className="relative overflow-hidden bg-[#f7f4e9] pt-20 pb-16 md:pt-28 md:pb-24">
    <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#8fae72]/20 blur-[110px]" />
    <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#e8761e]/10 blur-[100px]" />
    <div className="relative z-10 mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div className="text-center lg:text-left">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[#7a9a58] font-script text-2xl md:text-3xl">
            <Sparkles className="h-5 w-5" /> Você não está sozinho
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-3 font-serif-h text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.02] text-[#2e4222] tracking-tight">
            Viciado em tela,
            <br />
            <span className="font-script font-bold text-[#e8761e]">refém da insônia?</span>
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-[#5a7344]">
            Você se deita exausto, mas a mente não para. O celular é a última coisa que
            você vê à noite. Descubra o método prático e{" "}
            <span className="font-semibold text-[#2e4222]">baseado em ciência</span> para
            reconquistar suas noites de sono profundo.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-3xl border border-[#2e4222]/10 bg-[#fdfbf4] p-5 max-w-md mx-auto lg:mx-0 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-[#7a9a58] font-semibold">
              A oferta especial termina em
            </p>
            <div className="mt-3">
              <CountdownDisplay
                minutes={minutes}
                seconds={seconds}
                variant="dark"
                testId="hero-countdown"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="mt-8 flex flex-col items-center lg:items-start gap-4">
            <CtaButton testId="hero-buy-button" className="w-full sm:w-auto">
              Quero reconquistar meu sono agora
            </CtaButton>
            <div
              className="flex flex-col sm:flex-row items-center gap-3"
              data-testid="hero-social-proof"
            >
              <div className="flex -space-x-3">
                {[11, 12, 13, 14, 15].map((n) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/64?img=${n}`}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-[#f7f4e9] object-cover"
                  />
                ))}
              </div>
              <div className="text-center sm:text-left text-sm text-[#5a7344]">
                <span className="font-bold text-[#2e4222]">+2.000 pessoas</span> já voltaram
                a dormir bem
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-[#8fae72]/20 blur-xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-[#2e4222]/10">
            <img
              src={IMAGES.hero}
              alt="Pessoa deitada na cama no escuro com a luz do celular refletindo no rosto"
              className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover"
              data-testid="hero-image"
            />
          </div>
          <div className="absolute -bottom-5 left-3 sm:-left-5 rounded-2xl bg-white shadow-xl px-5 py-3 border border-[#2e4222]/5 float-slow">
            <div className="font-serif-h text-2xl font-bold text-[#2e4222]">+2.000</div>
            <div className="text-xs text-[#5a7344]">noites transformadas</div>
          </div>
        </div>
      </Reveal>
    </div>
    <div className="relative z-10 mt-12 flex justify-center">
      <ChevronDown className="h-6 w-6 text-[#8fae72] animate-bounce" />
    </div>
  </section>
);

/* ============ PAIN ============ */
export const PainSection = () => (
  <section className="bg-[#edefdd] py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12 items-center">
      <Reveal>
        <div className="text-center lg:text-left">
          <UrgencyBadge>Reconheça a dor antes que ela te custe mais noites</UrgencyBadge>
          <h2 className="mt-5 font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222] leading-tight">
            Se você se identifica,{" "}
            <span className="font-script text-[#e8761e]">
              as telas já estão te custando caro.
            </span>
          </h2>
          <p className="mt-5 text-[#5a7344] leading-relaxed">
            A insônia digital não é uma falha sua — é um problema sistêmico. Mas continuar
            ignorando significa perder saúde, relacionamentos e qualidade de vida, uma
            noite mal dormida de cada vez.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl border-4 border-white shadow-lg">
            <img
              src={IMAGES.pain}
              alt="Pessoa cansada acordada à noite com o celular"
              className="w-full h-64 object-cover"
              data-testid="pain-image"
            />
          </div>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-5">
        {PAINS.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.07}>
            <div
              data-testid="pain-point-card"
              className="h-full rounded-3xl bg-[#fdfbf4] border border-[#2e4222]/10 p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-transform duration-300"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8fae72]/20">
                <p.icon className="h-5 w-5 text-[#5a7344]" />
              </div>
              <h3 className="mt-4 font-serif-h text-xl font-semibold text-[#2e4222]">
                {p.t}
              </h3>
              <p className="mt-2 text-sm text-[#5a7344] leading-relaxed">{p.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ============ STATS ============ */
export const StatsSection = () => (
  <section className="bg-[#f7f4e9] py-20 md:py-28">
    <div className="mx-auto max-w-5xl px-5 text-center">
      <Reveal>
        <span className="font-script text-2xl md:text-3xl text-[#7a9a58]">
          Uma epidemia silenciosa
        </span>
        <h2 className="mt-2 font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222]">
          Você não está sozinho nessa batalha
        </h2>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div
              data-testid="stats-band-stat"
              className="rounded-3xl bg-[#fdfbf4] border border-[#2e4222]/10 p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#8fae72]/20">
                <s.icon className="h-6 w-6 text-[#5a7344]" />
              </div>
              <div className="mt-4 font-serif-h text-5xl md:text-6xl font-bold text-[#2e4222]">
                {s.n}
              </div>
              <p className="mt-3 text-sm text-[#5a7344] leading-relaxed">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-10 text-[#5a7344] max-w-xl mx-auto">
          Não é uma falha sua; é um problema sistêmico.{" "}
          <span className="text-[#2e4222] font-semibold">
            Este guia existe para mudar isso.
          </span>
        </p>
      </Reveal>
    </div>
  </section>
);

/* ============ SCIENCE ============ */
export const ScienceSection = () => (
  <section className="bg-[#edefdd] py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-5">
      <Reveal>
        <div className="text-center max-w-2xl mx-auto">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8fae72]/20">
            <TrendingDown className="h-7 w-7 text-[#5a7344]" />
          </div>
          <h2 className="mt-4 font-serif-h text-3xl md:text-5xl font-bold text-[#2e4222]">
            Como a tela rouba seu sono
          </h2>
          <p className="mt-4 text-[#5a7344]">
            Para vencer um inimigo, precisamos conhecê-lo. Três mecanismos cientificamente
            comprovados sabotam suas noites:
          </p>
        </div>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {SCIENCE.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.08}>
            <div
              data-testid="science-explainer-card"
              className="group h-full rounded-3xl bg-[#fdfbf4] border border-[#2e4222]/10 border-l-4 border-l-[#e8761e] p-8 shadow-sm hover:border-[#8fae72]/50 transition-colors duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2e4222] group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-6 w-6 text-[#8fae72]" />
              </div>
              <h3 className="mt-6 font-serif-h text-2xl font-semibold text-[#2e4222]">
                {s.t}
              </h3>
              <p className="mt-3 text-sm text-[#5a7344] leading-relaxed">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-10 text-center text-xs text-[#5a7344]/70">
          Fontes: National Sleep Foundation, Journal of Clinical Sleep Medicine.
        </p>
      </Reveal>
    </div>
  </section>
);
