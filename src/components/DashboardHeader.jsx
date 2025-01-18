import React from "react";

export default function DashboardHeader({ title }) {
  return (
    <header className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
