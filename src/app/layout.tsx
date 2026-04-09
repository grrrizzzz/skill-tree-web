import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skilltreeai.com"),
  title: {
    default: "Skill Tree AI Solutions — Do more, with AI",
    template: "%s · Skill Tree AI Solutions",
  },
  description:
    "Skill Tree AI Solutions helps businesses reach their goals with practical, engineering-led artificial intelligence — agents, consulting, custom development, and training.",
  openGraph: {
    title: "Skill Tree AI Solutions — Do more, with AI",
    description:
      "Practical AI for real businesses. Specialized agents, consulting, custom development, and training — built by engineers.",
    type: "website",
    url: "/",
    siteName: "Skill Tree AI Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Tree AI Solutions — Do more, with AI",
    description:
      "Practical AI for real businesses. Specialized agents, consulting, custom development, and training.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <SkipLink />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
