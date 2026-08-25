export default  async function Dashboard() {
    await new Promise((resolve)=> setTimeout(resolve,3000));
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Dashboard Home
      </h2>

      <p className="mt-2 text-gray-600">
        Welcome to dashboard.
      </p>
    </div>
  );
}