"use client";
import { Card } from "@/app/components/card";
import { useRouter } from "next/navigation";

export default function Notifications() {
  const router = useRouter();

  const handleArchived = () => {
    router.push("/complex_dashboard/archived");
    router.refresh();
  };

  return (
    <Card>
      <div className="flex flex-col">
        <div className="font-extrabold text-3xl">
          Notifications
        </div>

        <h1 className="font-semibold">
          If you want to get archived then click on it
        </h1>

        <button
          onClick={handleArchived}
          className="font-semibold text-blue-600 underline"
        >
          Archived
        </button>
      </div>
    </Card>
  );
}