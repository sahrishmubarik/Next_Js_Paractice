import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "A simple Next.js app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
<html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-purple-500 text-white p-4 flex justify-center items-center">
          Header
        </header>

        <main className="flex-1 flex justify-center items-center">
          {children}
        </main>

        <footer className="bg-purple-500 text-white p-4 flex justify-center items-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
