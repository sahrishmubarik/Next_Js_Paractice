"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
      const router=useRouter();
    const reload=()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        });
    };
  return (
  
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        
        <div className="mb-4 text-5xl">
        ....
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Something went wrong
        </h2>

        <p className="mt-2 text-gray-500">
          We couldn't load this page.
          Please try again.
        </p>

        <button
          onClick={reload}
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}