import type { Metadata } from "next";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/600.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Chris Ng PREC | Metro Vancouver Real Estate",
  description:
    "Independent REALTOR® in Metro Vancouver. Founder, BCNewHomes.ca.",
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
        <Header />
        <PageShell>{children}</PageShell>
        <Footer />
      </body>
    </html>
  );
}
