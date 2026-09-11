"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";

const REASONS = [
  "Buying a home",
  "Selling a home",
  "Investing / presale",
  "Just have a question",
];

const PHONE = "+17788612129";
const PHONE_DISPLAY = "(778) 861-2129";
const EMAIL = "chris@christopherng.ca";
const INSTAGRAM = "https://instagram.com/chrisngprec";
const ADDRESS_LINES = ["#500 - 666 Burrard Street", "Vancouver, British Columbia V6C 3P6"];
const MAP_SRC =
  "https://www.google.com/maps?q=666+Burrard+Street,+Vancouver,+BC+V6C+3P6&output=embed";

const inputClass =
  "w-full bg-white border border-forest/20 rounded-xl px-4 py-3 font-jost text-[15px] text-forest placeholder:text-pine/40 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest/30 transition-colors duration-300 ease-premium";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block font-jost text-[12px] uppercase tracking-caps text-forest/70 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: REASONS[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry: ${form.reason}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLooking to: ${form.reason}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Contact</p>
          <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.03em] max-w-2xl">
            Let&rsquo;s talk about your next move.
          </h2>
          <p className="font-jost text-pine/75 text-[16px] md:text-[17px] leading-[1.8] mt-6 max-w-lg">
            Buying, selling, or just running the numbers on an idea.
            There&rsquo;s no team here, so whatever you send comes straight
            to me.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 md:gap-10 mt-16">
          {/* Info column */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <p className="eyebrow text-clay mb-3">Direct</p>
                  <a
                    href={`tel:${PHONE}`}
                    className="block font-archivo font-extrabold text-forest text-xl hover:text-clay transition-colors duration-300 ease-premium"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="block font-archivo font-extrabold text-forest text-xl mt-1 hover:text-clay transition-colors duration-300 ease-premium"
                  >
                    {EMAIL}
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block font-jost text-[13px] uppercase tracking-caps text-forest/70 mt-3 hover:text-clay transition-colors duration-300 ease-premium"
                  >
                    @chrisngprec
                  </a>
                </div>

                <div className="border-t border-forest/15 pt-8">
                  <p className="eyebrow text-clay mb-3">Office</p>
                  {ADDRESS_LINES.map((l) => (
                    <p
                      key={l}
                      className="font-jost text-pine/80 text-[15px] leading-relaxed"
                    >
                      {l}
                    </p>
                  ))}
                </div>

                <div className="border-t border-forest/15 pt-8">
                  <p className="font-jost text-pine/70 text-[14px] leading-relaxed italic">
                    I read and respond to every message myself, usually
                    within a few hours.
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-forest/15 aspect-[4/3]">
                  <iframe
                    className="w-full h-full"
                    src={MAP_SRC}
                    title="Office location"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <div className="md:col-span-7">
            <Reveal delay={80}>
              {sent ? (
                <div className="rounded-2xl border border-forest/15 bg-white p-10">
                  <p className="font-archivo font-extrabold text-forest text-xl">
                    Almost done.
                  </p>
                  <p className="font-jost text-pine/75 text-[15px] leading-relaxed mt-3">
                    Your email app should be open with your message ready to
                    send. If nothing opened, email me directly at{" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="underline hover:text-clay"
                    >
                      {EMAIL}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <Field label="Name">
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                      />
                    </Field>
                  </div>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="I'm looking to">
                    <select
                      value={form.reason}
                      onChange={(e) => update("reason", e.target.value)}
                      className={inputClass}
                    >
                      {REASONS.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="btn font-jost text-[12px] uppercase tracking-caps bg-forest text-cream px-8 py-4 hover:bg-clay"
                  >
                    Send it to Chris
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
