"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

type Role = "buyer" | "seller" | "investor";

type Step = {
  title: string;
  body: string;
  proof?: { text: string; href: string };
};

const ROLES: { key: Role; label: string; blurb: string }[] = [
  {
    key: "buyer",
    label: "Buying",
    blurb: "First home, move-up, or just starting to look.",
  },
  {
    key: "seller",
    label: "Selling",
    blurb: "Ready to list, or want to know what it's worth.",
  },
  {
    key: "investor",
    label: "Investing",
    blurb: "Presale, resale, or building out a portfolio.",
  },
];

const STEPS: Record<Role, Step[]> = {
  buyer: [
    {
      title: "The real conversation",
      body: "Before I send you a single listing, we sit down for an actual buyer consultation, and I mean your lifestyle, your must-haves, the things you won't budge on, your timeline, all of it, because most of what makes a home wrong for someone never shows up on a spec sheet.",
      proof: {
        text: "See how this played out for James in Burnaby",
        href: "/results",
      },
    },
    {
      title: "Getting finance-ready",
      body: "If you don't already have a lender, I'll connect you with one of mine and stay close to how your pre-approval is coming along, so by the time we're writing an offer, we're working with a real number instead of a rough guess.",
    },
    {
      title: "The search, built around you",
      body: "I go looking for the right places on purpose, through off-market conversations and pocket listings, so you're seeing homes that actually fit before they ever show up in a general search, not scrolling a saved search you could've set up on your own.",
    },
    {
      title: "Winning the deal",
      body: "This is where strategy really earns its keep, especially once you're up against other offers, because price is only one part of it. Terms, timing, and how the offer gets presented matter just as much, sometimes more, and that part I handle.",
      proof: {
        text: "See how this played out for Elaine in Richmond",
        href: "/results",
      },
    },
    {
      title: "Contract to close",
      body: "Once we're firm, I'm coordinating the inspector, your lender, and your lawyer or notary myself, so if something looks like it's about to slip through the cracks between them, I'm the one who catches it before it becomes your problem.",
    },
    {
      title: "After you move in",
      body: "Things don't just end when you get your keys. I'll still send you market updates, point you toward a contractor or a plumber when you need one, and be the first call whenever your next move comes up, whether that's soon or a long way off.",
    },
  ],
  seller: [
    {
      title: "The real pricing conversation",
      body: "We'll sit down and go through a live CMA together, the comparables, what's actually moving in your area right now, and I'll tell you honestly what your home is worth and why, even on the days that's not the number you were hoping to hear.",
    },
    {
      title: "Prep that actually moves the needle",
      body: "I bring in a stager and a photographer I trust for the kind of work that actually sells a home, and I'll be straight with you about which fixes are worth doing before we list and which ones aren't worth spending your money on.",
    },
    {
      title: "The launch",
      body: "Before we open the doors, I run a coming-soon push, host a broker open house for the agents already working your area, and build social media around this specific listing rather than pulling out the same template every time, because the goal is having demand waiting before the first showing.",
      proof: {
        text: "See how this played out for Jay in South Surrey",
        href: "/results",
      },
    },
    {
      title: "Offer strategy",
      body: "Reviewing offers is its own negotiation, especially once there's more than one on the table, so I'll walk you through every term, not just the price, and handle the back-and-forth myself so you're never doing it alone.",
    },
    {
      title: "Closing",
      body: "I coordinate subject removal, your lawyer or notary, and whatever's happening on the buyer's side, because the fewer surprises come up in those last two weeks, the smoother the whole thing closes.",
    },
    {
      title: "Staying in touch",
      body: "I'll keep sending market updates and leave a standing invitation to call whenever your next move comes up, whether that's six months from now or six years from now.",
    },
  ],
  investor: [
    {
      title: "Understanding your strategy",
      body: "We start by talking through whether you're after cash flow or long-term appreciation, what your timeline actually looks like, and how much risk you're genuinely comfortable carrying, because everything I recommend after this comes out of that conversation, not some pitch I give everyone who walks in.",
    },
    {
      title: "Vetting the market and the project",
      body: "I read a developer's pricing, deposit structure, and phase release against the entire market, the same way I track it every day on BCNewHomes.ca, so you're never judging a project on its own without knowing what else is out there.",
      proof: {
        text: "See how this played out for four investors in Richmond",
        href: "/results",
      },
    },
    {
      title: "Running the numbers before you offer",
      body: "We work out the rental yield, the carrying costs, and a realistic appreciation scenario before you make an offer, not after you've already fallen for the rendering in the sales centre.",
    },
    {
      title: "Execution",
      body: "This is where I negotiate the price, the deposit structure, and the timing of entry, then bring in your lawyer to review the contract so the paperwork actually matches the deal we agreed to.",
    },
    {
      title: "Holding and exit",
      body: "I'll give you an honest read on when the market favours holding over selling, even on the occasions when that's not the easy answer to give you.",
    },
    {
      title: "Growing the portfolio",
      body: "Most of my investor relationships turn into more than one deal, and when you're ready for the next one, or ready to send someone my way, I'm already up to speed on your strategy instead of starting from zero.",
    },
  ],
};

export default function Process() {
  const [role, setRole] = useState<Role>("buyer");

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-clay mb-4">How I Work</p>
            <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[46px] leading-[1.15] tracking-[-0.03em]">
              I set the strategy, and I stay on it with you, even on the
              days you&rsquo;re actually talking to your lender or your
              lawyer instead of me.
            </h2>
            <p className="font-jost text-pine/75 text-[16px] md:text-[17px] leading-[1.8] mt-6">
              Some parts of a deal really do need a specialist, someone to
              run the numbers on a mortgage, walk a property with a trained
              eye, or make sure the contract actually says what we think it
              says, and I bring in people I&rsquo;ve worked with for years
              to handle those pieces. What doesn&rsquo;t change is who&rsquo;s
              setting the direction and taking your calls, from our first
              conversation through closing day, and honestly, a good while
              after that too.
            </p>
            <Link
              href="/partners"
              className="inline-block mt-5 font-jost text-[13px] uppercase tracking-caps border-b border-forest text-forest pb-1 hover:text-clay hover:border-clay transition-colors duration-300 ease-premium"
            >
              See the trusted partners I work with
            </Link>
          </div>
        </Reveal>

        {/* Role picker */}
        <Reveal delay={80}>
          <div className="grid sm:grid-cols-3 gap-5 mt-12 max-w-3xl">
            {ROLES.map((r) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setRole(r.key)}
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

        {/* Steps */}
        <div className="mt-16 max-w-2xl">
          {STEPS[role].map((step, i) => {
            const isLast = i === STEPS[role].length - 1;
            return (
              <Reveal key={`${role}-${step.title}`} delay={i * 60}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-forest text-cream font-archivo font-extrabold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-forest/15 mt-2" />
                    )}
                  </div>
                  <div className={isLast ? "pb-0" : "pb-10"}>
                    <h3 className="font-archivo font-extrabold text-forest text-lg">
                      {step.title}
                    </h3>
                    <p className="font-jost text-pine/75 text-[15px] leading-[1.75] mt-2">
                      {step.body}
                    </p>
                    {step.proof && (
                      <Link
                        href={step.proof.href}
                        className="inline-block mt-3 font-jost text-[12px] uppercase tracking-caps text-clay border-b border-clay/40 pb-0.5 hover:text-forest hover:border-forest transition-colors duration-300 ease-premium"
                      >
                        {step.proof.text}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-6 border-t border-forest/15 pt-10 max-w-2xl">
            <p className="font-jost text-pine/75 text-[16px] leading-[1.8]">
              Ready to start? Tell me what you&rsquo;re working with and
              we&rsquo;ll begin exactly where you are.
            </p>
            <Link
              href="/get-started"
              className="btn inline-flex mt-5 font-jost text-[12px] uppercase tracking-caps bg-forest text-cream px-8 py-4 hover:bg-clay"
            >
              Get started
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
