import { Droplets } from "lucide-react";
import { Container } from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-[#0052FF] text-white shadow-accent">
        <Droplets className="size-6" aria-hidden />
      </span>
      <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <span className="size-2 rounded-full bg-[#0052FF] animate-pulse-dot" aria-hidden />
        Loading…
      </p>
    </Container>
  );
}
