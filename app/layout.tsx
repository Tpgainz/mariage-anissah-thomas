import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Messe de mariage de Anissah et Thomas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={lora.className}>{children}</body>
    </html>
  );
}
