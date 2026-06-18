import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Citadel Alpha | Dual Momentum Quantitatif",
  description: "Strategie Dual Momentum quantitative. CAGR 32% valide OOS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-full m-0 p-0 bg-[#050508]">{children}</body>
    </html>
  );
}
