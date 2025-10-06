import { useState, useEffect } from "react";

const recomendaciones = [
  "Recuerda revisar tus OT pendientes cada mañana.",
  "Manten los datos de tus clientes actualizados.",
  "Al usar las maquinas siempre ten equipado tus EPPs.",
  "Establece un correcto flujo de trabajo para evitar errores.",
];

export default function LoginView() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % recomendaciones.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Lado Izquierdo */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <img
              src="../public/logoNoBg.png"
              alt="logo"
              className="w-40 h-40"
            />
            <p className="text-[#5D5F5F] text-lg text-center max-w-[300px] font-bold mt-4 transition-all duration-700 ease-in-out">
              {recomendaciones[index]}
            </p>
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="flex flex-col justify-center flex-1 p-8 md:p-16 gap-6">
          <div className="flex gap-3 items-center">
            <img src="../public/logoNoBg.png" alt="logo" className="w-6 h-6" />
            <h2 className="text-[#366A9A] font-normal text-2xl">MetalOps</h2>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">Inicia sesión</h1>
            <div>
              <label className="text-gray-700 text-sm">Correo</label>
              <input
                type="email"
                placeholder="Escribe tu correo"
                className="w-full bg-gray-50 rounded-3xl px-4 py-3 outline-none mt-1"
              />
            </div>
            <div>
              <label className="text-gray-700 text-sm">Contraseña</label>
              <input
                type="password"
                placeholder="Escribe tu contraseña"
                className="w-full bg-gray-50 rounded-3xl px-4 py-3 outline-none mt-1"
              />
            </div>

            <button className="mt-4 bg-[#366A9A] text-white rounded-3xl py-3 w-full">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
