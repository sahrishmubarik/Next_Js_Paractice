import { NavSearch } from "@/components/navSearch";
import { NavLink } from "@/components/navLink";

export default function LandingPage() {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">My App</h1>

          <nav className="ml-4">
            <NavLink/>
            <NavSearch />
          </nav>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to My App
        </h2>

        <p className="text-gray-600">
          This is a simple landing page for my application.
        </p>
      </div>
    </>
  );
}