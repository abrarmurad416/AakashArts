import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.scss";

const inter = Merriweather_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aakash Arts",
  description: "website for Aakash Arts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="has-navbar-fixed-top">
      <body className={inter.className}>{children}</body>
    </html>
  );
}