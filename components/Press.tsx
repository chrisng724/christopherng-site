import Reveal from "./Reveal";

// TODO: swap for real logo files (PropertySpark, Roomvu, Waterview Vancouver,
// BCNewHomes — Chris confirmed these already live on christopherng.ca).
// Rendered as text placeholders until those image assets are sent over.
const LOGOS = ["PropertySpark", "Roomvu", "Waterview Vancouver", "BCNewHomes.ca"];

export default function Press() {
  return (
    <section className="bg-cream border-y border-forest/10 py-14">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow text-clay text-center mb-8">Partners & Platforms</p>
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
