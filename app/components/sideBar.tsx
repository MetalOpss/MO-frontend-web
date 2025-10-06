import { useState } from "react";
import { NavLink } from "react-router";

import {
  MdOutlineSettings,
  MdOutlinePeopleAlt,
  MdTimeline,
  MdOutlineTask,
} from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { FaRegFileAlt, FaRegBell } from "react-icons/fa";
import { RiFolderInfoLine, RiTeamLine } from "react-icons/ri";
import { HiMenu, HiX, HiOutlineUsers } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { SiProgress } from "react-icons/si";
import { LuSquareStack } from "react-icons/lu";

import PerfilModal from "./modales/perfilModal";
import NotificacionesModal from "./modales/notificacionesModal";
import SidebarMobile from "./SidebarMobile";

const SideBar = () => {
  const [userType, setUserType] = useState<
    "admin" | "atention" | "operator" | "planner"
  >("admin");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificacionesModalOpen, setIsNotificacionesModalOpen] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderUserOptions = () => {
    switch (userType) {
      case "admin":
        return (
          <>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <LuSquareStack size={26} />
              <p className="text-xl font-normal">Servicios</p>
            </NavLink>

            <NavLink
              to="/maquinas"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <SiProgress size={26} />
              <p className="text-xl font-normal">Máquinas</p>
            </NavLink>

            <NavLink
              to="/usuarios"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <HiOutlineUsers size={26} />
              <p className="text-xl font-normal">Usuarios</p>
            </NavLink>
          </>
        );

      case "atention":
        return (
          <>
            <NavLink
              to="/clientes"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <MdOutlinePeopleAlt size={26} />
              <p className="text-xl font-normal">Clientes</p>
            </NavLink>

            <NavLink
              to="/ots"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <FaRegFileAlt size={26} />
              <p className="text-xl font-normal">OT's</p>
            </NavLink>
          </>
        );

      case "planner":
        return (
          <>
            <NavLink
              to="/ots"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <FaRegFileAlt size={26} />
              <p className="text-xl font-normal">OT's</p>
            </NavLink>

            <NavLink
              to="/operarios"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <GrUserWorker size={26} />
              <p className="text-xl font-normal">Operarios</p>
            </NavLink>

            <NavLink
              to="/linea-tiempo"
              className={({ isActive }) =>
                `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                  isActive
                    ? "bg-[#366a9a] text-white"
                    : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                }`
              }
            >
              <MdTimeline size={26} />
              <p className="text-xl font-normal">Línea de Tiempo</p>
            </NavLink>
          </>
        );

      case "operator":
        return (
          <NavLink
            to="/tareas"
            className={({ isActive }) =>
              `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                isActive
                  ? "bg-[#366a9a] text-white"
                  : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
              }`
            }
          >
            <MdOutlineTask size={26} />
            <p className="text-xl font-normal">Tareas</p>
          </NavLink>
        );

      default:
        return null;
    }
  };

  // ---------------------- RENDER PRINCIPAL ----------------------
  return (
    <>
      {/* Botón Mobile */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-lg shadow-md"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar Desktop */}
      <div className="hidden lg:flex fixed left-0 top-0 h-screen w-[343px] bg-white shadow-lg flex-col p-5">
        {/* Header */}
        <div className="py-4 px-10 text-xl font-bold flex gap-4 items-center">
          <img src="../public/logo.png" alt="logo" className="w-14 h-14" />
          <div className="max-w-[130px]">
            <h1 className="text-[#1A1C1C] text-xl font-normal">MetalOps</h1>
            <p className="text-[#909191] text-lg font-normal capitalize">
              {userType === "admin"
                ? "Administrador"
                : userType === "atention"
                  ? "Agente de atención"
                  : userType === "operator"
                    ? "Operario"
                    : "Planificador"}
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-2 rounded-3xl flex gap-1 items-center ${
                isActive
                  ? "bg-[#366a9a] text-white"
                  : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
              }`
            }
          >
            <PiHouseBold size={26} />
            <p className="text-xl font-normal">Inicio</p>
          </NavLink>

          {renderUserOptions()}

          <p className="block px-3 py-2 text-[#909191] text-lg font-normal">
            Opciones
          </p>

          <button
            onClick={() => setIsNotificacionesModalOpen(true)}
            className="w-full text-left  px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-1 items-center"
          >
            <FaRegBell size={26} className="sidebarOptionText" />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Notificaciones
            </p>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full text-left  px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-1 items-center"
          >
            <MdOutlineSettings size={26} className="sidebarOptionText" />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Configuración
            </p>
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full text-left  px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-1 items-center"
          >
            <RiFolderInfoLine size={26} className="sidebarOptionText" />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Ayuda
            </p>
          </button>
        </nav>

        {/* Perfil */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="py-4 px-10 text-xl font-bold flex gap-4 items-center"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="../public/bigsmoke.jpg" alt="perfil" />
          </div>
          <div className="max-w-[130px]">
            <p className="text-[#1A1C1C] text-xl font-normal">Big Smoke</p>
          </div>
        </button>
      </div>

      {/* Modales */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <PerfilModal onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      {isNotificacionesModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsNotificacionesModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-w-[1095px] w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-8"
          >
            <NotificacionesModal
              onClose={() => setIsNotificacionesModalOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Sidebar Mobile */}
      <SidebarMobile
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        userType={userType}
        renderUserOptions={renderUserOptions}
        setIsNotificacionesModalOpen={setIsNotificacionesModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default SideBar;
