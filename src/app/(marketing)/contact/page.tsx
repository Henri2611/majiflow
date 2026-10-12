"use client";

import { useState } from "react";
import { Inbox, Mail, ShieldAlert, XCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast";
import { DataNotice } from "@/components/shared/top-bar";

const topics = [
  "I want to order water",
  "I run a refill business - register me",
  "Billing or subscription help",
  "Support for an existing order",
  "Press or partnership",
  "Something else",
];

const notes = [
  {
    icon: Inbox,
    label: "No inbox",
    text: "Submitting the form validates your input and shows the states, but nothing is sent anywhere. There is no backend, no mail provider and no stored enquiries.",
  },
  {
    icon: Mail,
    label: "No support address",
    text: "The contact details that used to sit here were invented for the mock-up. A real deployment would publish a monitored address and hours before taking enquiries.",
  },
  {
    icon: ShieldAlert,
    label: "No support desk",
    text: "Nobody is on the other end of an order, so there is no response window to promise. The order pages point back to this page instead of an escalation path.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: topics[0], message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      toast({
        kind: "info",
        title: "Nothing was sent",
        message: "Thanks for your message. We will get back to you shortly.",
      });
      setForm({ name: "", email: "", phone: "", topic: topics[0], message: "" });
    }, 900);
  };

  return (
    <>
      <PageHero
        label="Contact"
        pulseLabel
        title={
          <>
            The form is ready. <span className="text-gradient">The honest answer is no inbox.</span>
          </>
        }
        description="This page shows the validation, the fields and the states a real enquiry form would have. It does not have a team behind it."
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl text-foreground">What is missing</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rather than invent a phone number and a reply time, here is what a live service would
                need to add first.
              </p>
              <div className="mt-8 flex flex-col gap-4">
                {notes.map((n) => (
                  <div key={n.label} className="flex items-start gap-3.5 rounded-2xl border border-border bg-white p-5 shadow-card">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-transparent text-white shadow-accent">
                      <n.icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{n.label}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <DataNotice className="mt-6">
                The form fields and topics are regular content, nothing more.
              </DataNotice>
            </div>

            <form onSubmit={submit} className="rounded-3xl border border-border bg-white p-6 shadow-layered sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" required>
                  <Input
                    required
                    placeholder="e.g. Amani Otieno"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                  />
                </Field>
                <Field label="Phone number" required hint="Collected to show a real field, not used.">
                  <Input
                    required
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    autoComplete="tel"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Email" required>
                    <Input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      autoComplete="email"
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="What's this about?" required>
                    <Select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}>
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Message" required>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Tell us what's happening…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </Field>
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full group" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </Button>
              <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <XCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                Nothing is transmitted. Your input is cleared and a notice is shown.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
