import type { Metadata } from "next";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/600.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chris Ng PREC | Metro Vancouver Real Estate",
  description:
    "Independent REALTOR® across six Metro Vancouver markets. Founder, BCNewHomes.ca.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="font-jost antialiased"
        style={
          {
            "--font-archivo": "'Archivo', sans-serif",
            "--font-jost": "'Jost', sans-serif",
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
