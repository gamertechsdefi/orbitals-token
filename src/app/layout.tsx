import type { Metadata } from "next";
import {Work_Sans, Orbitron } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Orbitals Token",
  description: "THE MEME THAT EVOLVES FOR GREATNESS",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "700"]
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: [ "700"],
  display: "swap"
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
