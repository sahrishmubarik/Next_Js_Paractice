import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-500 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}