export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full bg-forest overflow-hidden">
      {/* photo placeholder — swap for real full-bleed photography of Chris or a signature listing */}
      <div className="absolute inset-0 bg-pine/60" />
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 font-jost text-[10px] uppercase tracking-caps text-cream/40 text-right max-w-[220px]">
        Photo placeholder — full-bleed portrait or signature listing
      </div>

      <div className="relative z-10 h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
        <p className="eyebrow text-cream/80 mb-5">Metro Vancouver Real Estate</p>
        <h1 className="font-archivo font-extrabold text-cream text-[13vw] md:text-[64px] leading-[0.95] tracking-[-0.03em] max-w-3xl">
          Six markets.
          <br />
          One agent who treats every deal like an investment.
        </h1>
        <p className="font-jost text-cream/85 text-base md:text-lg mt-6 max-w-xl leading-relaxed">
          Independent REALTOR® with Real Broker Ltd, representing buyers, sellers, and
          investors across Vancouver, Burnaby, Richmond, Surrey, Langley, and the
          Tri-Cities.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="font-jost text-[12px] uppercase tracking-caps bg-cream text-forest px-7 py-3.5 hover:bg-clay hover:text-cream transition-colors"
          >
            Start a conversation
          </a>
          <a
            href="#about"
            className="font-jost text-[12px] uppercase tracking-caps border border-cream/50 text-cream px-7 py-3.5 hover:border-cream transition-colors"
          >
            About Chris
          </a>
        </div>
      </div>
    </section>
  );
}
