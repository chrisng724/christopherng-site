import Reveal from "./Reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-cream py-28 md:py-36">
      <div className="max-w-content mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="eyebrow text-clay mb-5">Contact</p>
          <h2 className="font-archivo font-extrabold text-forest text-[36px] md:text-[54px] leading-[1.02] tracking-[-0.03em] max-w-2xl mx-auto">
            Let&rsquo;s talk about your next move.
          </h2>
          <p className="font-jost text-pine/70 text-[16px] md:text-[17px] mt-6 max-w-md mx-auto leading-relaxed">
            Buying, selling, or just running the numbers on an idea. Reach out
            directly.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:chris@vancouverinsider.ca"
              className="btn font-jost text-[12px] uppercase tracking-caps bg-forest text-cream px-8 py-4 hover:bg-clay"
            >
              Email Chris
            </a>
            <a
              href="tel:+17788612129"
              className="btn font-jost text-[12px] uppercase tracking-caps border border-forest/40 text-forest px-8 py-4 hover:bg-forest hover:text-cream hover:border-forest"
            >
              (778) 861-2129
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
