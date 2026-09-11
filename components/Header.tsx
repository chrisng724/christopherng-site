"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Invest", href: "/invest" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ease-premium ${
        solid
          ? "bg-forest border-b border-cream/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1560px] mx-auto flex items-center justify-between px-6 md:px-14 py-5">
        <Link href="/" className="block h-12 w-auto" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="Chris Ng PREC"
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-jost text-[12px] uppercase tracking-caps text-cream/85 hover:text-cream transition-colors duration-300 ease-premium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="btn hidden md:inline-flex font-jost text-[12px] uppercase tracking-caps border border-cream/60 text-cream px-6 py-2.5 hover:bg-cream hover:text-forest hover:border-cream"
        >
          Start a conversation
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative h-8 w-8 flex flex-col items-center justify-center gap-[6px]"
        >
          <span
            className={`block h-[1.5px] w-6 bg-cream transition-transform duration-300 ease-premium ${
              open ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-cream transition-opacity duration-300 ease-premium ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-cream transition-transform duration-300 ease-premium ${
              open ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-[400ms] ease-premium ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${solid ? "" : "bg-pine/95"}`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-1 border-t border-cream/15">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-jost text-[13px] uppercase tracking-caps text-cream/85 hover:text-cream transition-colors duration-300 ease-premium py-3 border-b border-cream/15"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn mt-5 text-center font-jost text-[12px] uppercase tracking-caps border border-cream/60 text-cream px-5 py-3 hover:bg-cream hover:text-forest hover:border-cream"
          >
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
