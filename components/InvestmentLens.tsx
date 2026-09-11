import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Presale strategy",
    body: "I read a developer's pricing, deposit structure and phase release the way I track the whole market on BCNewHomes.ca. Not just the unit in front of you.",
  },
  {
    title: "ROI and cash flow",
    body: "Rental yield, carrying cost and realistic appreciation, run before you make an offer. Not after.",
  },
  {
    title: "Timing and exit",
    body: "Knowing when a market favours holding over selling, and saying so plainly, even when it's not the easy answer.",
  },
];

export default function InvestmentLens() {
  return (
    <section className="bg-forest py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">How I think about real estate</p>
          <h2 className="font-archivo font-extrabold text-cream text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-2xl">
            A home is never just a home.
          </h2>
          <p className="font-jost text-cream/75 text-[16px] md:text-[17px] leading-[1.8] mt-6 max-w-2xl">
            I built BCNewHomes.ca to track the presale market the way an
            investor would. Every client of mine gets that same rigour, whether
            they are buying a first condo or building a portfolio.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="border-t border-cream/15 pt-6">
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
