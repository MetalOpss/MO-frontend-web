import { use, useState } from "react";
import { MdOutlineSettings, MdOutlinePeopleAlt } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { FaRegFileAlt, FaRegBell } from "react-icons/fa";
import { RiFolderInfoLine } from "react-icons/ri";

const SideBar = () => {
  const [userType, setUserType] = useState<
    "admin" | "atention" | "operator" | "planner"
  >("atention");

  return (
    <div className="fixed left-0 top-0 h-screen max-w-[343px] w-full bg-white text-white shadow-lg flex flex-col p-5">
      <div className="py-4 px-10 text-xl font-bold  flex gap-4  items-center">
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
        <a href="#" className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff]">
          <div className="flex gap-1 items-center">
            <PiHouseBold color="#5D5F5F" size={26} />
            <p className="text-[#5D5F5F] text-xl font-normal">Inicio</p>
          </div>
        </a>
        {userType === "atention" && (
          <div>
            <a
              href="#"
              className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff]"
            >
              <div className="flex gap-1 items-center">
                <MdOutlinePeopleAlt color="#5D5F5F" size={26} />
                <p className="text-[#5D5F5F] text-xl font-normal">Clientes</p>
              </div>
            </a>
            <a
              href="#"
              className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff]"
            >
              <div className="flex gap-1 items-center">
                <FaRegFileAlt color="#5D5F5F" size={24} />
                <p className="text-[#5D5F5F] text-xl font-normal">OT's</p>
              </div>
            </a>
          </div>
        )}
        <p className="block px-3 py-2 rounded-md text-[#909191] text-lg font-normal">
          Opciones
        </p>
        <a href="#" className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff]">
          <div className="flex gap-1 items-center">
            <FaRegBell color="#5D5F5F" size={24} />
            <p className="text-[#5D5F5F] text-xl font-normal">Notificaciones</p>
          </div>
        </a>
        <a href="#" className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff]">
          <div className="flex gap-1 items-center">
            <MdOutlineSettings color="#5D5F5F" size={26} />
            <p className="text-[#5D5F5F] text-xl font-normal">Configuración</p>
          </div>
        </a>
        <a href="#" className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff]">
          <div className="flex gap-1 items-center">
            <RiFolderInfoLine color="#5D5F5F" size={26} />
            <p className="text-[#5D5F5F] text-xl font-normal">Ayuda</p>
          </div>
        </a>
      </nav>

      <div className="py-4 px-10 text-xl font-bold  flex gap-4  items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src="../public/bigsmoke.jpg" alt="logo" />
        </div>

        <div className="max-w-[130px]">
          <p className="text-[#1A1C1C] text-xl font-normal">Big Smoke</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
