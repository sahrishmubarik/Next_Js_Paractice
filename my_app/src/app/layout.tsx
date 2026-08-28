import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";



export const metadata: Metadata = {
  title: "My App",
  description: "A simple Next.js app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
<html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex justify-center items-center">
          {children}
        </main>

        <Footer/>
    
      </body>
    </html>
  );
}
