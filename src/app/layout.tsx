import type { Metadata } from "next";

import localFont from "next/font/local";
import { Geist, Geist_Mono, Sora } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  style: "normal",
});

const inverse = localFont({
  src: "../../public/fonts/inverse.ttf",
  weight: "600",
  style: "normal",
  display: "swap",
  variable: "--font-inverse",
});

export const metadata: Metadata = {
  title: "Upflux",
  description: "A better brand-building agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ maxWidth: "1720px" }}
        className={`${geistSans.variable} ${geistMono.variable} ${inverse.variable} ${sora.variable} antialiased mx-auto min-h-screen overflow-x-hidden overflow-y-auto`}
      >
        <Navbar />
        {/* <PageTransition color="bg-pink-500"> */}
        <main>{children}</main>
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
