import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "EstateOfMind",
  description:
    "Description: Real estate property listings for buying, selling, and investing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 bg-stone-200">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
