import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admire Global Organisation — Build the Entrepreneur in You",
  description:
    "Admire Global Organisation is one of India's leading face-to-face marketing companies, developing future entrepreneurs and business leaders through practical training in management, sales, and leadership.",
  keywords: [
    "Admire Organisation",
    "entrepreneurship training",
    "leadership development",
    "business training India",
    "face to face marketing",
    "career development",
    "management training",
  ],
  authors: [{ name: "Admire Global Organisation" }],
  openGraph: {
    title: "Admire Global Organisation — Build the Entrepreneur in You",
    description:
      "Developing future entrepreneurs and business leaders through world-class training programs across 15+ cities in India.",
    url: "https://admireorg.in",
    siteName: "Admire Global Organisation",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admire Global Organisation",
    description:
      "Developing future entrepreneurs and business leaders through world-class training programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
