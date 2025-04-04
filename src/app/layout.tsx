import type { Metadata } from "next";
import { Gotu, Mulish } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const gotu = Gotu({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-gotu',
});

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

export const metadata: Metadata = {
  title: "Tatsam Society - Cultural Expression & Literary Arts",
  description: "A platform for cultural expression, literary arts, and community engagement. Join us for events, workshops, and more.",
  keywords: ["Tatsam Society", "cultural expression", "literary arts", "community", "events", "workshops", "poetry", "stories"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gotu.variable} ${mulish.variable} font-mulish min-h-screen flex flex-col bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text`}
      >
        <ThemeProvider>
          <div className="fixed inset-0 bg-[url('/images/indian-pattern.png')] opacity-5 dark:opacity-10 pointer-events-none z-0" />
          <Navigation />
          <main className="flex-grow pt-16 relative z-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
