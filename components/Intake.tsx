"use client";

import { useState, type ReactNode } from "react";
import Reveal from "./Reveal";

type Role = "buyer" | "seller" | "investor";

type FieldConfig =
  | { type: "text"; name: string; label: string }
  | { type: "select"; name: string; label: string; options: string[] }
  | { type: "checkboxes"; name: string; label: string; options: string[] }
  | { type: "textarea"; name: string; label: string };

const EMAIL = "chris@vancouverinsider.ca";

const AREAS = [
  "Vancouver West Side",
  "Vancouver East Side",
  "Burnaby / New West",
  "Richmond",
  "Surrey / Langley",
  "Coquitlam / Tri-Cities",
];

const ROLES: { key: Role; label: string; blurb: string }[] = [
  {
    key: "buyer",
    label: "I'm buying",
    blurb: "First home, move-up, or just starting to look.",
  },
  {
    key: "seller",
    label: "I'm selling",
    blurb: "Ready to list, or want to know what it's worth.",
  },
  {
    key: "investor",
    label: "I'm investing",
    blurb: "Presale, resale, or building out a portfolio.",
  },
];

const FIELDS: Record<Role, FieldConfig[]> = {
  buyer: [
    {
      type: "select",
      name: "stage",
      label: "Where are you in the process?",
      options: [
        "Just starting to look",
        "Actively looking",
        "Ready to write an offer",
        "Already have an accepted offer",
      ],
    },
    {
      type: "select",
      name: "timeline",
      label: "When are you hoping to move?",
      options: ["0–3 months", "3–6 months", "6–12 months", "Just exploring"],
    },
    { type: "text", name: "budget", label: "Budget range" },
    {
      type: "select",
      name: "financing",
      label: "Financing status",
      options: [
        "Pre-approved",
        "Working with a lender",
        "Need a lender referral",
        "Paying cash",
      ],
    },
    {
      type: "checkboxes",
      name: "areas",
      label: "Areas you're interested in",
      options: AREAS,
    },
    {
      type: "select",
      name: "propertyType",
      label: "Property type",
      options: ["Detached", "Townhouse", "Condo", "Presale", "No preference"],
    },
    {
      type: "textarea",
      name: "mustHaves",
      label: "Must-haves (bedrooms, parking, pets, etc.)",
    },
    {
      type: "select",
      name: "otherAgent",
      label: "Are you currently working with another agent?",
      options: ["No", "Yes"],
    },
    { type: "textarea", name: "notes", label: "Anything else I should know?" },
  ],
  seller: [
    { type: "text", name: "address", label: "Property address" },
    {
      type: "text",
      name: "propertyDetails",
      label: "Property type & size (bedrooms, bathrooms, sq ft)",
    },
    {
      type: "select",
      name: "timeline",
      label: "Timeline to sell",
      options: [
        "Need to sell ASAP",
        "Planning for the next 3–6 months",
        "Testing the market",
        "Just curious what it's worth",
      ],
    },
    {
      type: "select",
      name: "valueSense",
      label: "Have you had a recent appraisal or CMA?",
      options: ["Yes, recently", "It's been a while", "No, never"],
    },
    {
      type: "select",
      name: "buyingToo",
      label: "Are you buying another property at the same time?",
      options: ["Yes", "No", "Not sure yet"],
    },
    {
      type: "select",
      name: "tenanted",
      label: "Is the property currently tenanted?",
      options: ["No", "Yes"],
    },
    {
      type: "select",
      name: "otherAgent",
      label: "Is the property currently listed with another brokerage?",
      options: ["No", "Yes"],
    },
    { type: "textarea", name: "notes", label: "Anything else I should know?" },
  ],
  investor: [
    {
      type: "select",
      name: "goal",
      label: "Primary investment goal",
      options: [
        "Cash flow",
        "Long-term appreciation",
        "Presale assignment / flip",
        "Portfolio diversification",
      ],
    },
    { type: "text", name: "capital", label: "Capital available to deploy" },
    {
      type: "select",
      name: "propertyType",
      label: "Property type interest",
      options: [
        "Presale condo",
        "Resale condo",
        "Townhouse",
        "Multiplex / land assembly",
        "No preference",
      ],
    },
    {
      type: "checkboxes",
      name: "areas",
      label: "Markets you're interested in",
      options: AREAS,
    },
    {
      type: "select",
      name: "timeline",
      label: "Timeline to invest",
      options: ["Ready now", "0–6 months", "6–12 months", "Just researching"],
    },
    {
      type: "select",
      name: "experience",
      label: "Experience level",
      options: [
        "First investment property",
        "2–5 properties",
        "Experienced portfolio investor",
      ],
    },
    {
      type: "select",
      name: "financing",
      label: "Financing approach",
      options: [
        "Cash",
        "Financing – pre-approved",
        "Financing – need a referral",
        "Buying through a corporation / trust",
      ],
    },
    { type: "textarea", name: "notes", label: "Anything else I should know?" },
  ],
};

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

function emptyAnswers(role: Role): Record<string, string | string[]> {
  const answers: Record<string, string | string[]> = {};
  for (const f of FIELDS[role]) {
    answers[f.name] = f.type === "checkboxes" ? [] : "";
  }
  return answers;
}

export default function Intake() {
  const [role, setRole] = useState<Role | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [answers, setAnswers] = useState<Record<string, string | string[]>>(
    {}
  );
  const [sent, setSent] = useState(false);

  function chooseRole(r: Role) {
    setRole(r);
    setAnswers(emptyAnswers(r));
    setSent(false);
  }

  function updateContact(field: keyof typeof contact, value: string) {
    setContact((c) => ({ ...c, [field]: value }));
  }

  function updateAnswer(name: string, value: string) {
    setAnswers((a) => ({ ...a, [name]: value }));
  }

  function toggleCheckbox(name: string, option: string) {
    setAnswers((a) => {
      const current = (a[name] as string[]) ?? [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...a, [name]: next };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!role) return;

    const roleLabel = ROLES.find((r) => r.key === role)!.label;
    const lines = [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Phone: ${contact.phone}`,
      "",
    ];
    for (const f of FIELDS[role]) {
      const value = answers[f.name];
      const display = Array.isArray(value) ? value.join(", ") : value || "—";
      lines.push(`${f.label}: ${display}`);
    }

    const subject = encodeURIComponent(`New intake: ${roleLabel} — ${contact.name}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Get Started</p>
          <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.03em] max-w-2xl">
            Tell me what you&rsquo;re working with.
          </h2>
          <p className="font-jost text-pine/75 text-[16px] md:text-[17px] leading-[1.8] mt-6 max-w-lg">
            A few specifics up front means our first conversation is about
            your plan, not the basics.
          </p>
        </Reveal>

        {/* Role picker */}
        <Reveal delay={80}>
          <div className="grid sm:grid-cols-3 gap-5 mt-12 max-w-3xl">
            {ROLES.map((r) => (
              <button
                key={r.key}
                type="button"
                onClick={() => chooseRole(r.key)}
                className={`text-left rounded-2xl border p-6 transition-colors duration-300 ease-premium ${
                  role === r.key
                    ? "bg-forest border-forest"
                    : "bg-white border-forest/15 hover:border-forest/40"
                }`}
              >
                <p
                  className={`font-archivo font-extrabold text-lg ${
                    role === r.key ? "text-cream" : "text-forest"
                  }`}
                >
                  {r.label}
                </p>
                <p
                  className={`font-jost text-[13px] leading-relaxed mt-2 ${
                    role === r.key ? "text-cream/70" : "text-pine/60"
                  }`}
                >
                  {r.blurb}
                </p>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Form */}
        {role && (
          <Reveal delay={120}>
            <div className="mt-12 max-w-3xl">
              {sent ? (
                <div className="rounded-2xl border border-forest/15 bg-white p-10">
                  <p className="font-archivo font-extrabold text-forest text-xl">
                    Almost done.
                  </p>
                  <p className="font-jost text-pine/75 text-[15px] leading-relaxed mt-3">
                    Your email app should be open with everything filled in.
                    If nothing opened, email me directly at{" "}
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
                  <div className="grid sm:grid-cols-3 gap-6">
                    <Field label="Name">
                      <input
                        required
                        value={contact.name}
                        onChange={(e) => updateContact("name", e.target.value)}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email">
                      <input
                        required
                        type="email"
                        value={contact.email}
                        onChange={(e) =>
                          updateContact("email", e.target.value)
                        }
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        value={contact.phone}
                        onChange={(e) =>
                          updateContact("phone", e.target.value)
                        }
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  {FIELDS[role].map((f) => (
                    <Field key={f.name} label={f.label}>
                      {f.type === "text" && (
                        <input
                          value={(answers[f.name] as string) ?? ""}
                          onChange={(e) =>
                            updateAnswer(f.name, e.target.value)
                          }
                          className={inputClass}
                        />
                      )}
                      {f.type === "textarea" && (
                        <textarea
                          rows={4}
                          value={(answers[f.name] as string) ?? ""}
                          onChange={(e) =>
                            updateAnswer(f.name, e.target.value)
                          }
                          className={`${inputClass} resize-y`}
                        />
                      )}
                      {f.type === "select" && (
                        <select
                          value={(answers[f.name] as string) ?? ""}
                          onChange={(e) =>
                            updateAnswer(f.name, e.target.value)
                          }
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          {f.options.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      )}
                      {f.type === "checkboxes" && (
                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 bg-white border border-forest/20 rounded-xl px-4 py-4">
                          {f.options.map((o) => {
                            const checked = (
                              (answers[f.name] as string[]) ?? []
                            ).includes(o);
                            return (
                              <label
                                key={o}
                                className="flex items-center gap-2 font-jost text-[14px] text-forest cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleCheckbox(f.name, o)}
                                  className="accent-forest"
                                />
                                {o}
                              </label>
                            );
                          })}
                        </div>
                      )}
                    </Field>
                  ))}

                  <button
                    type="submit"
                    className="btn font-jost text-[12px] uppercase tracking-caps bg-forest text-cream px-8 py-4 hover:bg-clay"
                  >
                    Send it to Chris
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
