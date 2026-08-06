import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link  from 'next/link';
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
        <h1 className="text-xl font-bold ml-1 mr-2">My App</h1>
        <nav className="ml-4 flex gap-1">
          <Link href="/" className="mr-4 hover:underline">
            Home
          </Link>
           <Link href='/about' className="mr-4  hover:underline">
            About
          </Link>
          <Link href='/products' className=" mr-4 hover:underline">
            Products
          </Link>
          <Link href="/blog" className="mr-4  hover:underline">
            Blog
          </Link>
         
        </nav>

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
