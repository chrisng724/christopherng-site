import Reveal from "./Reveal";

const STATS = [
  { value: "6", label: "Metro Vancouver markets" },
  { value: "1", label: "Founder, BCNewHomes.ca" },
  { value: "PREC*", label: "Personal Real Estate Corporation" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-8 items-start">
        <div className="md:col-span-5">
          <Reveal>
            <div className="aspect-[4/5] photo-placeholder bg-forest/95">
              Photo — Chris, editorial portrait
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-clay mb-4">About</p>
            <h2 className="font-archivo font-extrabold text-forest text-[34px] md:text-[44px] leading-[1.02] tracking-[-0.03em] max-w-xl">
              An agent who thinks past closing day.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="font-jost text-pine/90 text-[16px] md:text-[17px] leading-[1.8] mt-7 space-y-5 max-w-xl">
              <p>
                I&rsquo;m Chris Ng, an independent REALTOR® with Real Broker Ltd,
                working across six Metro Vancouver markets — Vancouver&rsquo;s
                West and East Sides, Burnaby/New West, Richmond, Surrey/Langley,
                and the Tri-Cities. I don&rsquo;t work with a team. Every client
                gets me, directly, from the first conversation to closing day.
              </p>
              <p>
                A large part of my practice is presale and developer project
                marketing — reading a project the way an investor would, before
                the public ever sees it. That work led me to build{" "}
                <span className="text-forest font-medium">BCNewHomes.ca</span>,
                the region&rsquo;s presale listing platform, so buyers could see
                the market with the same depth I do.
              </p>
              <p className="text-pine/70">
                I also co-host{" "}
                <span className="text-forest">The Real Estate Investment Hub</span>{" "}
                podcast — a natural extension of the same instinct: real estate
                is a home, but it&rsquo;s also a number worth getting right.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-11 grid grid-cols-3 gap-6 max-w-xl border-t border-forest/15 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-archivo font-extrabold text-forest text-2xl md:text-3xl">
                    {s.value}
                  </div>
                  <div className="font-jost text-[12px] text-pine/70 mt-1.5 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
