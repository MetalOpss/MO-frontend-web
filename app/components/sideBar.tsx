import { use, useState } from "react";
import { Link } from "react-router";

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
        <Link
          to={{ pathname: "/" }}
          className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption"
        >
          <div className="flex gap-1 items-center ">
            <PiHouseBold className="sidebarOptionText" size={26} />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Inicio
            </p>
          </div>
        </Link>
        {userType === "atention" && (
          <div>
            <Link
              to={{ pathname: "/clientes" }}
              className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption"
            >
              <div className="flex gap-1 items-center">
                <MdOutlinePeopleAlt className="sidebarOptionText" size={26} />
                <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
                  Clientes
                </p>
              </div>
            </Link>
            <Link
              to={{ pathname: "/" }}
              className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption"
            >
              <div className="flex gap-1 items-center ">
                <FaRegFileAlt className="sidebarOptionText" size={26} />
                <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
                  OT's
                </p>
              </div>
            </Link>
          </div>
        )}
        <p className="block px-3 py-2 rounded-md text-[#909191] text-lg font-normal">
          Opciones
        </p>
        <Link
          to={{ pathname: "/" }}
          className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption"
        >
          <div className="flex gap-1 items-center ">
            <FaRegBell className="sidebarOptionText" size={26} />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Notificaciones
            </p>
          </div>
        </Link>
        <Link
          to={{ pathname: "/" }}
          className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption"
        >
          <div className="flex gap-1 items-center  ">
            <MdOutlineSettings className="sidebarOptionText" size={26} />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Configuración
            </p>
          </div>
        </Link>
        <Link
          to={{ pathname: "/" }}
          className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption"
        >
          <div className="flex gap-1 items-center ">
            <RiFolderInfoLine className="sidebarOptionText" size={26} />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Ayuda
            </p>
          </div>
        </Link>
      </nav>

      <button className="py-4 px-10 text-xl font-bold  flex gap-4  items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src="../public/bigsmoke.jpg" alt="logo" />
        </div>

        <div className="max-w-[130px]">
          <p className="text-[#1A1C1C] text-xl font-normal">Big Smoke</p>
        </div>
      </button>
    </div>
  );
};

export default SideBar;
