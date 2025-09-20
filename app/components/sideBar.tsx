import { useState } from "react";
import { NavLink } from "react-router";

import { MdOutlineSettings, MdOutlinePeopleAlt } from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { FaRegFileAlt, FaRegBell } from "react-icons/fa";
import { RiFolderInfoLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi";

import PerfilModal from "./modales/perfilModal";
import NotificacionesModal from "./modales/notificacionesModal";

const SideBar = () => {
  const [userType, setUserType] = useState<
    "admin" | "atention" | "operator" | "planner"
  >("atention");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificacionesModalOpen, setIsNotificacionesModalOpen] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white rounded-lg shadow-md"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 h-screen w-[343px] bg-white shadow-lg flex-col p-5">
        <div className="py-4 px-10 text-xl font-bold flex gap-4 items-center">
          <img src="../public/logo.png" alt="logo" className="w-14 h-14" />
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` px-6 py-2 rounded-3xl flex gap-1 items-center 
              ${
                isActive
                  ? "bg-[#366a9a] text-white"
                  : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
              }`
            }
          >
            <PiHouseBold size={26} className="" />
            <p className="text-xl font-normal ">Inicio</p>
          </NavLink>

          {userType === "atention" && (
            <>
              <NavLink
                to="/clientes"
                className={({ isActive }) =>
                  ` px-6 py-2 rounded-3xl sidebarOption flex gap-1 items-center 
                  ${
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
                  ` px-6 py-2 rounded-3xl sidebarOption flex gap-1 items-center 
                  ${
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
          )}

          <p className="block px-3 py-2 rounded-md text-[#909191] text-lg font-normal">
            Opciones
          </p>

          {/* Botón Notificaciones */}
          <button
            onClick={() => setIsNotificacionesModalOpen(true)}
            className="w-full text-left  px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-1 items-center"
          >
            <FaRegBell size={26} className="sidebarOptionText" />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Notificaciones
            </p>
          </button>
          {/* Botón Configuracion */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full text-left  px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-1 items-center"
          >
            <MdOutlineSettings size={26} className="sidebarOptionText" />
            <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
              Configuración
            </p>
          </button>
          {/* Botón ayuda */}
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

        <button
          onClick={() => setIsModalOpen(true)}
          className="py-4 px-10 text-xl font-bold flex gap-4 items-center"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src="../public/bigsmoke.jpg" alt="logo" />
          </div>
          <div className="max-w-[130px]">
            <p className="text-[#1A1C1C] text-xl font-normal">Big Smoke</p>
          </div>
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed left-0 top-0 h-screen w-80 max-w-[85vw] bg-white shadow-lg flex flex-col p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-4 px-4 text-xl font-bold flex gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src="../public/logo.png"
                  alt="logo"
                  className="w-14 h-14"
                />
                <div>
                  <h1 className="text-[#1A1C1C] text-lg font-normal">
                    MetalOps
                  </h1>
                  <p className="text-[#909191] text-sm font-normal">
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
            </div>

            <nav className="flex-1 p-4 space-y-2">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  ` px-4 py-3 rounded-3xl flex gap-3 items-center 
                  ${
                    isActive
                      ? "bg-[#366a9a] text-white"
                      : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                  }`
                }
              >
                <PiHouseBold size={20} />
                <p className="text-lg font-normal">Inicio</p>
              </NavLink>

              {userType === "atention" && (
                <>
                  <NavLink
                    to="/clientes"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      ` px-4 py-3 rounded-3xl sidebarOption flex gap-3 items-center 
                      ${
                        isActive
                          ? "bg-[#366a9a] text-white"
                          : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                      }`
                    }
                  >
                    <MdOutlinePeopleAlt size={20} />
                    <p className="text-lg font-normal">Clientes</p>
                  </NavLink>

                  <NavLink
                    to="/ots"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      ` px-4 py-3 rounded-3xl sidebarOption flex gap-3 items-center 
                      ${
                        isActive
                          ? "bg-[#366a9a] text-white"
                          : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
                      }`
                    }
                  >
                    <FaRegFileAlt size={20} />
                    <p className="text-lg font-normal">OT's</p>
                  </NavLink>
                </>
              )}

              <p className="block px-3 py-2 rounded-md text-[#909191] text-base font-normal">
                Opciones
              </p>

              <button
                onClick={() => setIsNotificacionesModalOpen(true)}
                className="w-full text-left px-4 py-3 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-3 items-center"
              >
                <FaRegBell size={20} className="sidebarOptionText" />
                <p className="text-[#5D5F5F] text-lg font-normal sidebarOptionText">
                  Notificaciones
                </p>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full text-left px-4 py-3 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-3 items-center"
              >
                <MdOutlineSettings size={20} className="sidebarOptionText" />
                <p className="text-[#5D5F5F] text-lg font-normal sidebarOptionText">
                  Configuración
                </p>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full text-left px-4 py-3 rounded-3xl hover:bg-[#dfecff] sidebarOption flex gap-3 items-center"
              >
                <RiFolderInfoLine size={20} className="sidebarOptionText" />
                <p className="text-[#5D5F5F] text-lg font-normal sidebarOptionText">
                  Ayuda
                </p>
              </button>
            </nav>

            <button
              onClick={() => setIsModalOpen(true)}
              className="py-4 px-4 text-xl font-bold flex gap-4 items-center"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="../public/bigsmoke.jpg" alt="logo" />
              </div>
              <div>
                <p className="text-[#1A1C1C] text-lg font-normal">Big Smoke</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Perfil Modal */}
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

      {/* Notificaciones Modal */}
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
    </>
  );
};

export default SideBar;
