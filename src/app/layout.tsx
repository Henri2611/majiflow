import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { PwaRegister } from "@/components/pwa-register";
import { AppSplash } from "@/components/layout/app-splash";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "900"],
});





export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "MajiFlow - Clean water, delivered simply",
    template: "%s · MajiFlow",
  },
  description:
    "Order clean, affordable drinking water from refill stations near you. Browse, place and track orders in one place.",
  keywords: [
    "water delivery Kenya",
    "refill water Nairobi",
    "M-Pesa water order",
    "SaaS water business",
  ],
  openGraph: {
    title: "MajiFlow - Clean water, delivered simply",
    description:
      "Order clean, affordable drinking water from refill stations near you.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0052FF",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <head>
        {/* Entrance animations server-render at opacity:0. Without JS nothing ever
            reveals them, so force them visible to keep content readable. */}
        <noscript>
          <style>{`[style*="opacity:0"],.reveal,.stagger>*{opacity:1 !important;transform:none !important}.app-splash{display:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>{children}</Providers>
        <PwaRegister />
        <AppSplash />
      </body>
    </html>
  );
}