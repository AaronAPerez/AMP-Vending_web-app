import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/auth/AuthProvider";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/layout/Footer";
import DevelopmentAuthProvider from "@/components/auth/DevelopmentAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMP Vending Machine Website",
  description: "Premium vending machine solutions for workplaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap the app with AuthProvider */}
        <DevelopmentAuthProvider>
          {/* Skip to main content link for accessibility */}
          <a href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-emerald-600 focus:text-white"
          >
            Skip to main content
          </a>
          
          {/* Only show navbar outside of admin routes */}
          <Navbar/>
    
          
          <main className="min-h-screen pt-16" id="main">
            {children}
          </main>
          <Footer/> *
        </DevelopmentAuthProvider>
  <Analytics/>
      </body>
    </html>
  );
}