import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Invest", href: "/invest" },
  { label: "Results", href: "/results" },
  { label: "Get Started", href: "/get-started" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest pt-16 pb-10">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-cream/15 pb-10">
          <div>
            <Image src={logo} alt="Chris Ng PREC" className="h-14 w-auto" />
            <p className="font-jost text-cream/60 text-sm mt-4 max-w-xs leading-relaxed">
              Personal Real Estate Corporation, operating under Real Broker Ltd.
              Metro Vancouver, BC.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-3">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-jost text-[12px] uppercase tracking-caps text-cream/70 hover:text-cream transition-colors duration-300 ease-premium"
              >
                {l.label}
              </Link>
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
