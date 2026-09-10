import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Presale strategy",
    body: "Reading a developer's pricing, deposit structure, and phase release the way BCNewHomes.ca tracks the whole market — not just the unit in front of you.",
  },
  {
    title: "ROI & cash flow",
    body: "Rental yield, carrying cost, and realistic appreciation — run before an offer goes in, not after.",
  },
  {
    title: "Timing & exit",
    body: "Knowing when a market favours holding versus selling, and saying so plainly, even when it's not the easy answer.",
  },
];

export default function InvestmentLens() {
  return (
    <section id="invest" className="bg-forest py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">The investor&rsquo;s lens</p>
          <h2 className="font-archivo font-extrabold text-cream text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-2xl">
            Real estate is a home. It&rsquo;s also a number.
          </h2>
          <p className="font-jost text-cream/75 text-[16px] md:text-[17px] leading-[1.8] mt-6 max-w-2xl">
            Every client gets the same rigour I use building BCNewHomes.ca&rsquo;s
            presale data — whether they're buying a first condo or building a
            portfolio.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="border-t border-cream/25 pt-6">
                <h3 className="font-archivo font-extrabold text-cream text-lg">
                  {p.title}
                </h3>
                <p className="font-jost text-cream/70 text-[15px] leading-[1.75] mt-3">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
