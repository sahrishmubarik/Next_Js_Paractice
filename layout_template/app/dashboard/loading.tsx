export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

        <h2 className="text-xl font-semibold text-gray-800">
          Loading Dashboard...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait while we load your dashboard.
        </p>
      </div>
    </div>
  );
}