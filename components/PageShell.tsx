"use client";

import { usePathname } from "next/navigation";

export default function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // The header is fixed and transparent-over-hero on the homepage, so the
  // hero itself sits full-bleed at the very top. Every other page has no
  // hero to sit behind, so it needs top padding to clear the fixed header.
  return <div className={isHome ? "" : "pt-[92px]"}>{children}</div>;
}
