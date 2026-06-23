import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/shared/Navbar";

import Footer from "@/components/shared/Footer";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",

  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",

  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Life Lessons",

  description: "Preserve your wisdom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />

        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
