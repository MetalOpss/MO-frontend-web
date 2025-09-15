import { use, useState } from "react";

const SideBar = () => {
  const [userType, setUserType] = useState<
    "admin" | "atention" | "operator" | "planner"
  >("atention");

  return (
    <div className="fixed left-0 top-0 h-screen max-w-[343px] w-full bg-white text-white shadow-lg flex flex-col p-5">
      <div className="py-4 px-10 text-xl font-bold border-b border-gray-700 flex gap-4  items-center">
        <img src="../public/logo.png" alt="logo" />
        <div className="max-w-[130px]">
          <h1 className="text-[#1A1C1C] text-xl font-normal">MetalOps</h1>
          <p className="text-[#909191] text-lg font-normal">
            {userType === "admin"
              ? "Administrador"
              : userType === "atention"
                ? "Agente de atencion"
                : userType === "operator"
                  ? "Operario"
                  : "Planificador"}
          </p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <a href="#" className="block px-6 py-2 rounded-3xl hover:bg-gray-700">
          <div className="flex gap-1 items-center">
            <img src="../public/home.png" alt="" />
            <p className="text-[#5D5F5F] text-xl font-normal">Inicio</p>
          </div>
        </a>
        {userType === "atention" && (
          <div>
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <div>
                <img src="" alt="" />
                <p className="text-[#5D5F5F] text-xl font-normal">Clientes</p>
              </div>
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              <div>
                <img src="" alt="" />
                <p className="text-[#5D5F5F] text-xl font-normal">OT's</p>
              </div>
            </a>
          </div>
        )}
        <p className="block px-3 py-2 rounded-md text-[#909191] text-lg font-normal">
          Opciones
        </p>
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
          <div>
            <img src="" alt="" />
            <p className="text-[#5D5F5F] text-xl font-normal">Notificaciones</p>
          </div>
        </a>
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
          <div>
            <img src="" alt="" />
            <p className="text-[#5D5F5F] text-xl font-normal">Configuración</p>
          </div>
        </a>
        <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-700">
          <div>
            <img src="" alt="" />
            <p className="text-[#5D5F5F] text-xl font-normal">Ayuda</p>
          </div>
        </a>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 rounded-md">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default SideBar;
