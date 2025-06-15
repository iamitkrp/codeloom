import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "CODELOOM - Weaving Design, Code, and Intelligence",
  description:
    "Codeloom weaves design, code, and intelligence into tailor-made digital experiences. We specialize in AI Agent Development, Website & Web App Creation, and Custom Software Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <SmoothScrolling />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js"
        />
      </body>
    </html>
  );
}
