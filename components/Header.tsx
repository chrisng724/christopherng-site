"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Invest", href: "/invest" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-forest border-b border-cream/10">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" className="block h-12 w-auto" onClick={() => setOpen(false)}>
          <Image
            src={logo}
            alt="Chris Ng PREC"
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-jost text-[12px] uppercase tracking-caps text-cream/85 hover:text-cream transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-block font-jost text-[12px] uppercase tracking-caps border border-cream/60 text-cream px-5 py-2.5 hover:bg-cream hover:text-forest transition-colors"
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
            className={`block h-[1.5px] w-6 bg-cream transition-transform duration-300 ${
              open ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-cream transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-cream transition-transform duration-300 ${
              open ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 pt-1 border-t border-cream/10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-jost text-[13px] uppercase tracking-caps text-cream/85 hover:text-cream transition-colors py-3 border-b border-cream/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 text-center font-jost text-[12px] uppercase tracking-caps border border-cream/60 text-cream px-5 py-3 hover:bg-cream hover:text-forest transition-colors"
          >
            Start a conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
