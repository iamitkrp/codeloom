import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import Script from "next/script";

// Neue Montreal font
const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Light.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-neuemontreal",
});

export const metadata: Metadata = {
  title: "Codeloom",
  description:
    "Codeloom is a software development agency that specializes in building AI-powered solutions, custom software, and modern websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Global background video */}
        <video
          className="pointer-events-none fixed inset-0 w-full h-full object-cover -z-10"
          src="/media/CODE_LOOM%20_LIQ.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScrolling>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrolling>
        </ThemeProvider>
        <Script
          id="spline-viewer"
          src="https://unpkg.com/@splinetool/viewer@1.10.7/build/spline-viewer.js"
          strategy="beforeInteractive"
          type="module"
        />
      </body>
    </html>
  );
}
