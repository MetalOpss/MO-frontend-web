"use client";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiGithubLine } from "react-icons/ri";

const PerfilModal = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<"cuenta" | "informacion">(
    "cuenta"
  );

  return (
    <div className="relative flex min-w-[800px] max-w-[900px] max-h-[922px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Sidebar izquierda */}
      <div className="w-[238px] bg-[#F9F9F9] border-r border-gray-200 flex flex-col">
        <button onClick={onClose} className="self-start p-4 ">
          <IoClose color="#5D5F5F" size={25} />
        </button>

        <nav className="flex flex-col gap-2 px-4">
          <button
            onClick={() => setActiveTab("cuenta")}
            className={` px-6 py-2 rounded-3xl flex items-center gap-2 ${
              activeTab === "cuenta"
                ? "bg-[#366a9a] text-white"
                : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
            }`}
          >
            <FaRegUserCircle size={23} />
            <p className="text-xl font-normal">Cuenta</p>
          </button>

          <button
            onClick={() => setActiveTab("informacion")}
            className={` px-6 py-2 rounded-3xl flex items-center gap-2 ${
              activeTab === "informacion"
                ? "bg-[#366a9a] text-white"
                : "hover:bg-[#dfecff] text-[#5D5F5F] hover:text-[#366a9a]"
            }`}
          >
            <IoMdInformationCircleOutline size={26} />
            <p className="text-xl font-normal">Información</p>
          </button>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col px-6 py-6 overflow-y-auto">
        {activeTab === "cuenta" && (
          <>
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
                <img
                  src="/bigsmoke.jpg"
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-900">
                Big Smoke
              </p>
            </div>

            <div className="w-full max-w-md flex flex-col gap-6">
              <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl text-gray-700">
                <span>Correo</span>
                <span className="text-gray-500">big@gmail.com</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl text-gray-700">
                <span>Nombre de usuario</span>
                <span className="text-gray-500">Big Smoke</span>
              </div>

              <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl text-gray-700">
                <span>Contraseña</span>
                <div className="flex flex-col items-center gap-2">
                  <span className="tracking-widest">••••••••</span>
                  <button className="text-sm text-gray-400 bg-gray-200 px-2 py-1 rounded-lg cursor-pointer">
                    Cambiar
                  </button>
                </div>
              </div>
            </div>

            <button className="mt-6 w-full max-w-md px-4 py-3 bg-gray-50 rounded-xl text-[#951B1D] hover:bg-red-100 mb-5">
              Cerrar sesión
            </button>
          </>
        )}

        {activeTab === "informacion" && (
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              MetalOps Team
            </h2>
            <p className="text-gray-600">
              Información sobre nuestro equipo de desarrollo
            </p>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between text-gray-700">
                <span>Versión</span>
                <span className="text-gray-500">Beta 1</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-4">Créditos</h3>

              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2 mb-3"
                >
                  <p className="text-gray-900 font-medium">Gabriel Nuñez</p>
                  <p className="text-gray-600 text-sm">
                    Desarrollador Full Stack | Ingeniero de Software
                  </p>
                  <p className="text-gray-600 text-sm">CEO :V</p>
                  <div className="flex gap-2 mt-2">
                    <button className="p-2 rounded-full bg-gray-100">
                      <LiaLinkedinIn color="767777" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100">
                      <RiGithubLine color="767777" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilModal;
