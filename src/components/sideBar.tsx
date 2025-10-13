"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  MdOutlineSettings,
  MdOutlinePeopleAlt,
  MdTimeline,
  MdOutlineTask,
} from "react-icons/md";
import { PiHouseBold } from "react-icons/pi";
import { FaRegFileAlt, FaRegBell } from "react-icons/fa";
import { RiFolderInfoLine } from "react-icons/ri";
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

  const pathname = usePathname();
  const linkClass = (href: string) =>
    `px-6 py-2 rounded-3xl flex gap-1 items-center ${
      pathname === href
        ? "bg-[#366a9a] text-white"
        : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
    }`;

  const renderUserOptions = () => {
    switch (userType) {
      case "admin":
        return (
          <>
            <Link href="/servicios" className={linkClass("/servicios")}>
              <LuSquareStack size={26} />
              <p className="text-xl font-normal">Servicios</p>
            </Link>

            <Link href="/maquinas" className={linkClass("/maquinas")}>
              <SiProgress size={26} />
              <p className="text-xl font-normal">Maquinas</p>
            </Link>

            <Link href="/usuarios" className={linkClass("/usuarios")}>
              <HiOutlineUsers size={26} />
              <p className="text-xl font-normal">Usuarios</p>
            </Link>
          </>
        );

      case "atention":
        return (
          <>
            <Link href="/clientes" className={linkClass("/clientes")}>
              <MdOutlinePeopleAlt size={26} />
              <p className="text-xl font-normal">Clientes</p>
            </Link>

            <Link href="/ots" className={linkClass("/ots")}>
              <FaRegFileAlt size={26} />
              <p className="text-xl font-normal">OT's</p>
            </Link>
          </>
        );

      case "planner":
        return (
          <>
            <Link href="/ots" className={linkClass("/ots")}>
              <FaRegFileAlt size={26} />
              <p className="text-xl font-normal">OT's</p>
            </Link>

            <Link href="/operarios" className={linkClass("/operarios")}>
              <GrUserWorker size={26} />
              <p className="text-xl font-normal">Operarios</p>
            </Link>

            <Link href="/linea-tiempo" className={linkClass("/linea-tiempo")}>
              <MdTimeline size={26} />
              <p className="text-xl font-normal">Linea de Tiempo</p>
            </Link>
          </>
        );

      case "operator":
        return (
          <Link href="/tareas" className={linkClass("/tareas")}>
            <MdOutlineTask size={26} />
            <p className="text-xl font-normal">Tareas</p>
          </Link>
        );

      default:
        return null;
    }
  };

  // ---------------------- RENDER PRINCIPAL ----------------------
  return (
    <>
      {/* Boton Mobile */}
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
          <img src="/logo.png" alt="logo" className="w-14 h-14" />
          <div className="max-w-[130px]">
            <h1 className="text-[#1A1C1C] text-xl font-normal">MetalOps</h1>
            <p className="text-[#909191] text-lg font-normal capitalize">
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

        {/* Links */}
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/" className={linkClass("/")}>
            <PiHouseBold size={26} />
            <p className="text-xl font-normal">Inicio</p>
          </Link>

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
              Configuracion
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
            <img src="/bigsmoke.jpg" alt="perfil" />
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
