"use client";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 py-3 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-gray-800">Ocso Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Bienvenido/a</span>
      </div>
    </header>
  );
}