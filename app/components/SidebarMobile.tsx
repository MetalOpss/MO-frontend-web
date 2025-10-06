import { NavLink } from "react-router";
import { PiHouseBold } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { RiFolderInfoLine } from "react-icons/ri";

interface SidebarMobileProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  userType: string;
  renderUserOptions: () => React.ReactNode;
  setIsNotificacionesModalOpen: (open: boolean) => void;
  setIsModalOpen: (open: boolean) => void;
}

export default function SidebarMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  userType,
  renderUserOptions,
  setIsNotificacionesModalOpen,
  setIsModalOpen,
}: SidebarMobileProps) {
  if (!isMobileMenuOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-40 flex">
      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Contenedor Sidebar */}
      <div className="relative bg-white w-[280px] h-full shadow-lg p-5 flex flex-col z-50 animate-slideIn">
        {/* Header */}
        <div className="py-4 text-xl font-bold flex gap-4 items-center">
          <img src="../public/logo.png" alt="logo" className="w-12 h-12" />
          <div>
            <h1 className="text-[#1A1C1C] text-lg font-normal">MetalOps</h1>
            <p className="text-[#909191] text-sm font-normal capitalize">
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

        {/* Navegación principal */}
        <nav className="flex-1 p-2 space-y-2 overflow-y-auto">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              `px-4 py-2 rounded-2xl flex gap-2 items-center ${
                isActive
                  ? "bg-[#366a9a] text-white"
                  : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
              }`
            }
          >
            <PiHouseBold size={22} />
            <p className="text-base font-normal">Inicio</p>
          </NavLink>

          {renderUserOptions()}

          <p className="block px-2 pt-4 text-[#909191] text-sm font-normal">
            Opciones
          </p>

          {/* Notificaciones */}
          <button
            onClick={() => {
              setIsNotificacionesModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 rounded-2xl hover:bg-[#dfecff] flex gap-2 items-center"
          >
            <FaRegBell size={22} className="text-[#5D5F5F]" />
            <p className="text-[#5D5F5F] text-base font-normal">
              Notificaciones
            </p>
          </button>

          {/* Configuración */}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 rounded-2xl hover:bg-[#dfecff] flex gap-2 items-center"
          >
            <MdOutlineSettings size={22} className="text-[#5D5F5F]" />
            <p className="text-[#5D5F5F] text-base font-normal">
              Configuración
            </p>
          </button>

          {/* Ayuda */}
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 rounded-2xl hover:bg-[#dfecff] flex gap-2 items-center"
          >
            <RiFolderInfoLine size={22} className="text-[#5D5F5F]" />
            <p className="text-[#5D5F5F] text-base font-normal">Ayuda</p>
          </button>
        </nav>

        {/* Perfil */}
        <div className="border-t border-gray-200 mt-3 pt-3">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMobileMenuOpen(false);
            }}
            className="w-full flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="../public/bigsmoke.jpg" alt="perfil" />
            </div>
            <div>
              <p className="text-[#1A1C1C] text-base font-normal">Big Smoke</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
