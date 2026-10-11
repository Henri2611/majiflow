"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import type { WeeklyOperatingHours } from "@/lib/types";
import {
  BUSINESS_TIME_ZONE,
  getBusinessAvailability,
  type BusinessAvailability as Availability,
} from "@/lib/business-hours";

export function useBusinessAvailability(hours: WeeklyOperatingHours | undefined) {
  const [availability, setAvailability] = useState<Availability>({
    state: "unknown",
    hoursLabel: "Hours unavailable",
  });

  useEffect(() => {
    const refresh = () => setAvailability(getBusinessAvailability(hours));
    refresh();
    const interval = window.setInterval(refresh, 60_000);
    return () => window.clearInterval(interval);
  }, [hours]);

  return availability;
}

const stateStyles = {
  open: "bg-emerald-50 text-emerald-700",
  closed: "bg-rose-50 text-rose-700",
  unknown: "bg-amber-50 text-amber-800",
};

export function BusinessAvailability({ hours }: { hours: WeeklyOperatingHours | undefined }) {
  const availability = useBusinessAvailability(hours);
  const stateLabel = availability.state === "unknown" ? "Unknown" : availability.state === "open" ? "Open" : "Closed";

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs" aria-live="polite">
      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold capitalize ${stateStyles[availability.state]}`}>
        <span className="size-1.5 rounded-full bg-current" aria-hidden />
        {stateLabel}
      </span>
      <span className="inline-flex items-center gap-1.5 text-muted-foreground">
        <Clock className="size-3.5" aria-hidden />
        {availability.hoursLabel}
      </span>
      <span className="text-muted-foreground">{BUSINESS_TIME_ZONE.replace("Africa/", "")} time</span>
    </div>
  );
}
