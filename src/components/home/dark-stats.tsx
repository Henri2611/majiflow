import Image from "next/image";
import { Droplets } from "lucide-react";
import nightWater from "@/assets/images/backdrops/night-water.webp";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Stagger, StaggerItem } from "@/components/ui/animated-section";
import { CountUp } from "@/components/ui/count-up";
import { ParallaxBackdrop } from "@/components/ui/parallax-backdrop";
import { AnimatedSection } from "@/components/ui/animated-section";
import { InfoChip } from "@/components/shared/top-bar";

const stats = [
  { value: 2.8, decimals: 1, suffix: "M+", label: "Cans the platform would carry at scale", note: "Illustrative target" },
  { value: 34, suffix: "%", label: "Revenue growth a busy station might see", note: "Illustrative target" },
  { value: 68, suffix: "%", label: "Repeat rate a subscription tier aims for", note: "Illustrative target" },
  { value: 98.2, decimals: 1, suffix: "%", label: "Orders on time, the service goal", note: "Illustrative target" },
];

export function DarkStats() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 text-white lg:py-32">
      <ParallaxBackdrop strength={30} className="absolute inset-0">
        <Image
          src={nightWater}
          alt=""
          fill
          sizes="100vw"
          aria-hidden
          className="pointer-events-none scale-110 object-cover opacity-25 blur-3xl"
        />
      </ParallaxBackdrop>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 size-[30rem] -translate-y-1/2 rounded-full bg-transparent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 size-[26rem] rounded-full bg-[#4D7CFF]/15 blur-[110px] animate-float-slow"
      />

      <Container className="relative">
        <AnimatedSection className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel tone="dark" pulse>
              What we are aiming for
            </SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] sm:text-4xl md:text-[2.75rem]">
              Water is local. <span className="text-gradient">These are the goals.</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-3">
            <p className="text-sm leading-relaxed text-slate-400">
              The figures below are targets for the platform, not measurements from it. Nothing in
              MajiFlow has been delivered, and no revenue has changed hands.
            </p>
            <InfoChip />
          </div>
        </AnimatedSection>

        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="flex h-full flex-col justify-between gap-10 bg-transparent p-7 transition-colors duration-300 hover:bg-transparent-soft">
                <Droplets className="size-6 text-[#4D7CFF]/60" aria-hidden />
                <div>
                  <p className="font-display text-4xl tracking-tight text-white">
                    <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {s.note}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}