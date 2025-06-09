import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "./logo";
import Link from "next/link";
import DownloadButton from "./downloadButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tome",
  description: "Never Write SQL Again",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <div className="w-full fixed top-0 z-50 backdrop-blur-md p-4 grid grid-cols-3">
          <Logo className="text-3xl gap-2.5" logoClass="size-8" />
          <div className="flex items-center justify-center gap-4">
            <Link href="#features">Features</Link>
            <Link href="#faq">FAQ</Link>
          </div>
          <div className="justify-end flex">
            <DownloadButton className="p-2 h-fit text-xs p-1" size="sm" />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
