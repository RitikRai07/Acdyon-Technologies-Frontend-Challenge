import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA — Find work that moves you forward",
  description:
    "AI-powered career discovery platform that helps you discover relevant job opportunities based on your skills, experience, and goals.",
  openGraph: {
    title: "NEXORA — Find work that moves you forward",
    description:
      "AI-powered career discovery platform that helps you discover relevant job opportunities based on your skills, experience, and goals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <main className="overflow-x-hidden w-full max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
