import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppWalletProvider from "./Component/SolanaProvider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "400 500 600 700 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "400 500 600 700 900",
});

export const metadata: Metadata = {
  title: "Solana dApp"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-auto` }
      >
     <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
