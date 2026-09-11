import Reveal from "./Reveal";

export default function PodcastStrip() {
  return (
    <section className="bg-forest py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 justify-between border border-cream/15 rounded-2xl p-8 md:p-10">
            <div>
              <p className="eyebrow text-clay mb-3">The Real Estate Investment Hub</p>
              <p className="font-archivo font-extrabold text-cream text-xl md:text-2xl leading-snug max-w-lg">
                Chris co-hosts a podcast on buying real estate like an investor.
              </p>
            </div>
            <a
              href="#"
              className="btn shrink-0 font-jost text-[12px] uppercase tracking-caps border border-cream/50 text-cream px-6 py-3 hover:bg-cream hover:text-forest self-start md:self-center"
            >
              Listen to the podcast
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
