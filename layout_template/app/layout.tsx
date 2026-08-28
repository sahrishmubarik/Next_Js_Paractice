import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Learn about layout and template:",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        <header className="h-14 w-full p-4 text-center bg-blue-100">
          <h1>My Website</h1>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="h-14 w-full p-4 text-center bg-blue-100">
          <h3>Footer</h3>
        </footer>

      </body>
    </html>
  );
}
