import type { Metadata } from "next";
import {
  Geist,
  Cormorant_Garamond,
  DM_Sans,
  Syne,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Anaqio — Virtual Studio for Fashion Commerce",
  description:
    "Anaqio is a virtual studio empowering fashion brands with cutting-edge digital tools for modern commerce. Join the waitlist for early access.",
  openGraph: {
    title: "Anaqio — Virtual Studio for Fashion Commerce",
    description:
      "Empowering fashion brands with cutting-edge digital tools for modern commerce.",
    siteName: "Anaqio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anaqio — Virtual Studio for Fashion Commerce",
    description:
      "Empowering fashion brands with cutting-edge digital tools for modern commerce.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${cormorant.variable} ${dmSans.variable} ${syne.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
