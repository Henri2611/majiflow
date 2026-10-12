import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Labels for the parts of MajiFlow that are not real.
 *
 * MajiFlow is a build: checkout payments are , station,
 * rating and review data is current, and no water is dispatched. These pieces
 * make that visible wherever a visitor could otherwise mistake the build for a
 * running service, so copy never has to imply more than the build does.
 */

export function TopBar({ className }: { className?: string }) {
  return (
    <div className={cn("border-b border-[#0052FF]/20 bg-[#0052FF]/5", className)}>
      <p className="mx-auto flex w-full max-w-[72rem] items-center justify-center gap-2 px-5 py-2.5 text-center text-xs text-foreground/80 sm:px-8">
        <Info className="size-3.5 shrink-0 text-[#0052FF]" aria-hidden />
        <span>
          <span className="font-semibold text-foreground">Platform.</span> Payments are  and
          stations, ratings and reviews are data. No water is dispatched.
        </span>
      </p>
    </div>
  );
}

/** Inline marker for a number, chart or list that comes from current data. */
export function InfoChip({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
        className
      )}
    >
      Sample data
    </span>
  );
}

/** A sentence that says plainly where a block of figures came from. */
export function DataNotice({ children, className }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("flex items-start gap-2 text-xs text-muted-foreground", className)}>
      <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
