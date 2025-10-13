"use client";
import { IoClose } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";

const NotificacionesModal = ({ onClose }: { onClose: () => void }) => {
  const [tab, setTab] = useState<"leidas" | "no-leidas">("leidas");

  const notificaciones = [
    { id: 1, titulo: "Notificación 1", cuerpo: "Cuerpo" },
    { id: 2, titulo: "Notificación 1", cuerpo: "Cuerpo" },
    { id: 3, titulo: "Notificación 1", cuerpo: "Cuerpo" },
    { id: 4, titulo: "Notificación 1", cuerpo: "Cuerpo" },
    { id: 5, titulo: "Notificación 1", cuerpo: "Cuerpo" },
  ];

  return (
    <div className="relative flex max-w-[1095px] w-full mx-auto bg-white rounded-2xl overflow-hidden p-8">
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
      >
        <IoClose color="#5D5F5F" size={22} />
      </button>

      <div className="w-full">
        {/* Header */}
        <h2 className="text-2xl font-medium text-gray-900">Notificaciones</h2>
        <p className="text-gray-500 font-medium text-xl mb-6">
          Buzón de notificaciones
        </p>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setTab("leidas")}
            className={`px-4 py-2 rounded-full font-normal ${
              tab === "leidas"
                ? "bg-[#366A9A] text-white"
                : "bg-gray-100 text-[#767777] hover:bg-gray-200"
            }`}
          >
            Leídas
          </button>
          <button
            onClick={() => setTab("no-leidas")}
            className={`px-4 py-2 rounded-full font-normal ${
              tab === "no-leidas"
                ? "bg-[#366A9A] text-white"
                : "bg-gray-100 text-[#767777] hover:bg-gray-200"
            }`}
          >
            No leídas
          </button>
        </div>

        {/* Lista de notificaciones */}
        <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2">
          {notificaciones.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-200 rounded-full">
                  <FaBell className="text-[#909191]" size={18} />
                </div>
                <div>
                  <p className="text-lg font-medium">{item.titulo}</p>
                  <p className="text-gray-600">{item.cuerpo}</p>
                </div>
              </div>
              <button>
                <BiExpandAlt className="text-gray-400 hover:text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificacionesModal;
