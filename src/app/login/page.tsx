"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-orange-500 px-10 py-2 rounded-md">
      <p className="text-2xl my-4 text-white">Iniciar sesión</p>

      <div className="flex flex-col gap-2 my-4 items-center">
        <label className="w-full max-w-sm text-white">
          <span className="mb-1 block">Email</span>
          <input
            type="email"
            required
            className="w-full rounded-md border border-white/30 bg-white px-3 py-2 text-gray-900 outline-none"
          />
        </label>

        <label className="w-full max-w-sm text-white">
          <span className="mb-1 block">Contraseña</span>
          <input
            type="password"
            required
            className="w-full rounded-md border border-white/30 bg-white px-3 py-2 text-gray-900 outline-none"
          />
        </label>
      </div>

      <div className="flex flex-col items-center gap-2">
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
          Registrarse
        </button>

        <p className="text-white">
          ¿No tienes cuenta?{" "}
          <Link href="/signup" className="text-red-600 underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}