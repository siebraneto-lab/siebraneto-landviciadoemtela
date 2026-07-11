import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Lock, Clock } from "lucide-react";

/* ---------- Scroll reveal wrapper ---------- */
export const Reveal = ({ children, delay = 0, className = "" }) => {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Countdown display ---------- */
export const CountdownDisplay = ({ minutes, seconds, variant = "dark", testId }) => {
  const boxCls =
    variant === "dark"
      ? "bg-[#2e4222] border border-[#2e4222] text-white"
      : "bg-white border border-[#2e4222]/15 text-[#2e4222]";
  const units = [
    { value: minutes, label: "MIN" },
    { value: seconds, label: "SEG" },
  ];
  return (
    <div
      data-testid={testId}
      aria-label="Tempo restante da oferta"
      className="flex items-center justify-center gap-3"
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-3">
          <div
            className={`flex flex-col items-center rounded-2xl px-5 py-3 min-w-[78px] shadow-sm ${boxCls}`}
          >
            <span className="tick-num font-serif-h text-4xl md:text-5xl leading-none font-semibold">
              {u.value}
            </span>
            <span className="mt-1 text-[10px] tracking-[0.25em] text-[#e8761e] font-bold">
              {u.label}
            </span>
          </div>
          {i === 0 && (
            <span className="text-3xl md:text-4xl font-bold text-[#8fae72] -mt-3">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

/* ---------- CTA button ---------- */
export const CtaButton = ({ children, testId, href = "#oferta", className = "" }) => {
  const handleClick = (e) => {
    if (href && href.startsWith("#") && href.length > 1) {
      const target = document.getElementById(href.slice(1));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 16;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      data-testid={testId}
      className={`cta-pulse inline-flex items-center justify-center gap-2 rounded-full bg-[#e8761e] hover:bg-[#cf5f10] text-white font-extrabold tracking-tight text-center transition-colors duration-300 py-5 px-8 text-lg md:text-xl hover:-translate-y-0.5 active:scale-[0.98] transition-transform ${className}`}
    >
      {children}
    </a>
  );
};

/* ---------- Kiwify security seal ---------- */
export const KiwifySeal = ({ onDark = false, testId }) => (
  <div
    data-testid={testId}
    className={`inline-flex items-center gap-3 rounded-full px-4 py-2 ${
      onDark
        ? "bg-white/10 border border-white/20"
        : "bg-white border border-[#2e4222]/10 shadow-sm"
    }`}
  >
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00a868]">
      <ShieldCheck className="h-4 w-4 text-white" strokeWidth={2.5} />
    </div>
    <div className="text-left leading-tight">
      <div
        className={`flex items-center gap-1 text-sm font-bold ${
          onDark ? "text-white" : "text-[#2e4222]"
        }`}
      >
        Compra Segura
        <span className="text-[#00a868] font-extrabold">Kiwify</span>
      </div>
      <div
        className={`flex items-center gap-1 text-[11px] ${
          onDark ? "text-white/60" : "text-[#5a7344]/70"
        }`}
      >
        <Lock className="h-3 w-3" /> Pagamento 100% criptografado
      </div>
    </div>
  </div>
);

/* ---------- Urgency pill badge ---------- */
export const UrgencyBadge = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold bg-[#e8761e]/10 text-[#a8500e] border border-[#e8761e]/30">
    <Clock className="h-3.5 w-3.5" />
    {children}
  </div>
);
