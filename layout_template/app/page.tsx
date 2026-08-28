export default function Home() {
  return (
   <main className="min-h-[calc(100vh-7rem)]  flex flex-1 flex-col items-center justify-center">
  <h1 className="text-4xl font-bold">
    Welcome Home
  </h1>

  <p className="mt-4">
    This is my home page.
  </p>

  <button className="mt-6 rounded bg-blue-200 px-6 py-3 text-blue">
    Get Started
  </button>
</main>
  );
}