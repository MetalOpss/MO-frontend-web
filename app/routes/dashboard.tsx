import type { Route } from "./+types/hola";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hola - Mi App" },
    { name: "description", content: "Página de saludo" },
  ];
}

export default function Hola() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-red-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">:v 👋</h1>
        <p className="text-lg text-gray-600 mb-6">Bienvenido a mi aplicación</p>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            Esta es una ruta creada con React Router v7
          </p>
          <a
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}
