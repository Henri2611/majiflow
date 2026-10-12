import Link from "next/link";
import { MapPin } from "lucide-react";
import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/ui/container";
import { CITIES } from "@/lib/constants";

const customerLinks = [
  { href: "/how-it-works", label: "How ordering works" },
  { href: "/browse", label: "Browse businesses" },
  { href: "/register", label: "Create an account" },
  { href: "/cart", label: "Your cart" },
  { href: "/faqs", label: "Customer FAQs" },
];

const businessLinks = [
  { href: "/for-business", label: "Why MajiFlow" },
  { href: "/business/register", label: "Register your business" },
  { href: "/pricing", label: "Plans & pricing" },
  { href: "/business/build", label: "Live dashboard build" },
  { href: "/faqs#businesses", label: "Business FAQs" },
];

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms of service" },
  { href: "/privacy", label: "Privacy policy" },
];

const REPO_URL = "https://github.com/dhecaptain/majiflow";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-ink text-slate-300">
      <Container className="pb-24 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandMark dark />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              A working build of a platform that connects homes to water refill stations and gives
              those businesses a storefront and back office. The stations, prices, ratings and orders
              here are sample content, and no payments are collected.
            </p>
            <a
              href={REPO_URL}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition-all duration-200 hover:border-[#4D7CFF]/50 hover:bg-[#0052FF]/20 hover:text-white"
            >
              Bugs and questions on GitHub
            </a>
          </div>

          <FooterCol title="Customers" links={customerLinks} />
          <FooterCol title="Businesses" links={businessLinks} />
          <FooterCol title="Company" links={companyLinks} />
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Cities in the build data
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <Link
                  key={c}
                  href="/browse"
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-400 transition-colors hover:border-[#4D7CFF]/50 hover:text-white"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#4D7CFF]" aria-hidden />
                <span>
                  This build has no office, phone line or inbox behind it, and the contact form does
                  not send anywhere.
                </span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              What is in the build
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Six seeded stations across five cities, each with its own products, prices, delivery
              fee and opening hours. Order status is stored, but payment, SMS and rider dispatch are
              not part of the build.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} MajiFlow. A build with sample data.</p>
          <p className="font-mono uppercase tracking-widest">
            No payments · no SMS · sample stations
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}