import Reveal from "./Reveal";

const MARKETS = [
  { name: "Vancouver West Side", note: "Established neighbourhoods, land value, character homes" },
  { name: "Vancouver East Side", note: "Value growth, family homes, emerging pockets" },
  { name: "Burnaby / New West", note: "SkyTrain-driven density, presale concentration" },
  { name: "Richmond", note: "Investor demand, new-build supply" },
  { name: "Surrey / Langley", note: "Fastest-growing, entry-level and land assembly" },
  { name: "Coquitlam / Tri-Cities", note: "Transit expansion, family-oriented growth" },
];

export default function Markets() {
  return (
    <section id="markets" className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Where I work</p>
          <h2 className="font-archivo font-extrabold text-forest text-[32px] md:text-[42px] leading-[1.05] tracking-[-0.03em] max-w-xl">
            Six markets, covered properly.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest/15 mt-14 border border-forest/15">
          {MARKETS.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 80}>
              <div className="bg-cream p-8 h-full">
                <h3 className="font-archivo font-extrabold text-forest text-lg leading-snug">
                  {m.name}
                </h3>
                <p className="font-jost text-pine/70 text-[14px] leading-[1.7] mt-3">
                  {m.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
