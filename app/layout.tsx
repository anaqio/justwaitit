import type { Metadata } from "next";
import { Geist } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
