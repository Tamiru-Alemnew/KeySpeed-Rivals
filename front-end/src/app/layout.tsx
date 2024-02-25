import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Key speed rivals",
  description: "This is a typing speed test game that you can play with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        {children}
        </body>
    </html>
  );
}
