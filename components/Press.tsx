import Reveal from "./Reveal";

const LOGOS = [
  "BCNewHomes.ca",
  "The Real Estate Investment Hub",
  "Press logo placeholder",
  "Press logo placeholder",
];

export default function Press() {
  return (
    <section className="bg-cream border-y border-forest/10 py-14">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay text-center mb-8">As seen in / affiliated with</p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
            {LOGOS.map((l) => (
              <span
                key={l}
                className="font-jost text-pine/45 text-sm uppercase tracking-caps"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
