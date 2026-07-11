import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import {
  Hero,
  PainSection,
  StatsSection,
  ScienceSection,
} from "@/components/landing/Sections1";
import {
  ModulesSection,
  ProtocolSection,
  BeforeAfterSection,
  TestimonialsSection,
  AuthorSection,
} from "@/components/landing/Sections2";
import {
  OfferSection,
  GuaranteeSection,
  FaqSection,
  FinalCtaSection,
  StickyBar,
} from "@/components/landing/Sections3";

export default function LandingPage() {
  const { minutes, seconds } = useCountdown();

  return (
    <main className="overflow-x-hidden">
      <Hero minutes={minutes} seconds={seconds} />
      <PainSection />
      <StatsSection />
      <ScienceSection />
      <ModulesSection />
      <ProtocolSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <AuthorSection />
      <OfferSection minutes={minutes} seconds={seconds} />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection minutes={minutes} seconds={seconds} />
      <StickyBar minutes={minutes} seconds={seconds} />
    </main>
  );
}
