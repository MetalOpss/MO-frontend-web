"use client";
import { useState } from "react";
import SideBar from "@/components/sideBar";
import Layout from "@/components/layout";
import InfoCard from "@/components/cards/infoCard";
import Filters from "@/components/fillter";

import { AiOutlineSearch } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

import CrearOtModal from "@/components/modales/crearOtModal";

const data = [
  {
    texto: "En registro",
    numero: 100,
  },
  {
    texto: "Sin diseño",
    numero: 50,
  },
  {
    texto: "En ejecución",
    numero: 20,
  },
  {
    texto: "Por correción",
    numero: 20,
  },
];
const OtsView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <SideBar />
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2 w-full">
          <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
            Ordenes de Trabajo
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-100 text-gray-700 w-full sm:w-auto">
              <AiOutlineSearch size={18} color="767777" />
              <input
                type="text"
                placeholder="Buscar OT"
                className="bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base w-full"
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#366a9a] text-white text-sm sm:text-base whitespace-nowrap"
            >
              <GoPlus size={18} color="FFFFFF" />
              <p>Registrar OT</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {data.map((item, key) => (
            <InfoCard key={key} texto={item.texto} numero={item.numero} />
          ))}
        </div>
        <Filters />
        <div className="space-y-3 sm:space-y-4 w-full">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 sm:gap-4 w-full bg-gray-50 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3"
            >
              <div className="min-w-0 flex-1">
                <p className="text-lg sm:text-xl font-medium text-[#1A1C1C] truncate">
                  {"Nombre de la OT"}
                </p>
                <p className="text-base sm:text-lg font-medium text-[#5D5F5F]">
                  {"11 Sep, 8:00 AM"}
                </p>
              </div>
              <span className="text-xs sm:text-sm w-fit px-2 sm:px-3 py-1 rounded-full font-medium bg-[#F0F1F1] text-[#1A1C1C]">
                En registro
              </span>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CrearOtModal onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OtsView;
