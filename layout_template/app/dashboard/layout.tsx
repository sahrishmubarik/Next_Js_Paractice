import Link from "next/link";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-gray-900 text-white px-6 py-8">
        
        {/* Logo / Title */}
        <h3 className="text-2xl font-bold mb-10">
          Dashboard
        </h3>

        <nav className="flex flex-col gap-2">
  <Link
    href="/dashboard"
    className="rounded-lg px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition"
  >
    Home
  </Link>

  <Link
    href="/dashboard/members"
    className="rounded-lg px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition"
  >
    Members
  </Link>

  <Link
    href="/dashboard/settings"
    className="rounded-lg px-4 py-3 hover:bg-gray-800 hover:text-blue-400 transition"
  >
    Settings
  </Link>
</nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
}