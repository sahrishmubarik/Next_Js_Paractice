"use client";

import { useState } from "react";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-full">
      {/* Template Header */}
      <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Dashboard Template
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            This content is rendered through the dashboard template.
          </p>
        </div>

        {/* Counter */}
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
        >
          Count: {count}
        </button>
      </div>

      {/* Page Content */}
      <div>
        {children}
      </div>
    </div>
  );
}