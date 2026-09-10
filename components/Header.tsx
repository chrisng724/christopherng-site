const NAV = [
  { label: "About", href: "#about" },
  { label: "Invest", href: "#invest" },
  { label: "Markets", href: "#markets" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 py-6">
        <a href="#" className="font-archivo font-extrabold text-cream leading-[0.85] text-lg tracking-[-0.04em]">
          <span className="block">CHRIS</span>
          <span className="inline-flex items-center gap-2">
            NG{" "}
            <span className="border border-cream/70 text-[9px] tracking-caps font-jost font-normal px-1.5 py-0.5">
              PREC
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-jost text-[12px] uppercase tracking-caps text-cream/85 hover:text-cream transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block font-jost text-[12px] uppercase tracking-caps border border-cream/60 text-cream px-5 py-2.5 hover:bg-cream hover:text-forest transition-colors"
        >
          Start a conversation
        </a>
      </div>
    </header>
  );
}
