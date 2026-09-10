export default function Footer() {
  return (
    <footer className="bg-forest pt-16 pb-10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-cream/15 pb-10">
          <div>
            <div className="font-archivo font-extrabold text-cream leading-[0.85] text-2xl tracking-[-0.04em]">
              <span className="block">CHRIS</span>
              <span className="inline-flex items-center gap-2">
                NG{" "}
                <span className="border border-cream/70 text-[10px] tracking-caps font-jost font-normal px-1.5 py-0.5">
                  PREC
                </span>
              </span>
            </div>
            <p className="font-jost text-cream/60 text-sm mt-4 max-w-xs leading-relaxed">
              Personal Real Estate Corporation, operating under Real Broker Ltd.
              Metro Vancouver, BC.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3">
            {["About", "Invest", "Markets", "Results", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-jost text-[12px] uppercase tracking-caps text-cream/70 hover:text-cream transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-8">
          <p className="font-jost text-cream/45 text-[11px] leading-relaxed max-w-xl">
            Chris Ng PREC* is a REALTOR® with Real Broker Ltd. Information on this
            site is deemed reliable but not guaranteed. *Personal Real Estate
            Corporation.
          </p>
          <p className="font-jost text-cream/45 text-[11px]">
            © {new Date().getFullYear()} Chris Ng.
          </p>
        </div>
      </div>
    </footer>
  );
}
