import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const dmSans =  DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin",]
});

export const metadata: Metadata = {
  title: "FinWise — Your Smart Financial Companion",
  description: "Take control of your finances with FinWise. Connect your bank accounts, track spending, and gain insights into your financial health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
        <body
            className={`${dmSans.variable} antialiased`}
        >
            {children}
        </body>
    </html>
  );
}
