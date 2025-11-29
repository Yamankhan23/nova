import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export const metadata: Metadata = {
  title: "NovaAI — Intelligent Automation Suite",
  description:
    "Experience a new era of intelligent automation with NovaAI. Built for performance, crafted for elegance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-white antialiased relative overflow-x-hidden">

        {/* Global Cursor */}
        <CursorGlow />

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10 overflow-visible">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
