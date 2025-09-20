import { useState } from "react";
import SideBar from "~/components/sideBar";
import Layout from "~/components/layout";
import InfoCard from "~/components/cards/infoCard";
import Filters from "~/components/fillter";

import { AiOutlineSearch } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

import RegistrarClienteModal from "~/components/modales/registrarClienteModal";

const data = [
  {
    texto: "Totales",
    numero: 15,
  },
  {
    texto: "Activos",
    numero: 3,
  },
  {
    texto: "Inactivos",
    numero: 3,
  },
];

const ClientesView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <SideBar />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between mb-2 max-w-[1139px]">
          <h1 className="font-medium text-4xl">Clientes</h1>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700">
              <AiOutlineSearch size={20} color="767777" />
              <input
                type="text"
                placeholder="Buscar Cliente"
                className="bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#366a9a] text-white"
            >
              <GoPlus size={20} color="FFFFFF" />
              <p>Registrar Cliente</p>
            </button>
          </div>
        </div>

        <div className="flex gap-6 max-w-[1139px]">
          {data.map((item, key) => (
            <InfoCard key={key} texto={item.texto} numero={item.numero} />
          ))}
        </div>

        <Filters />

        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between max-w-[1139px] bg-gray-50 rounded-2xl px-4 py-3"
          >
            <div>
              <p className="text-xl font-medium text-[#1A1C1C]">
                {"Nombre del Cliente"}
              </p>
              <p className="text-lg font-medium text-[#5D5F5F]">{"DNI/RUC"}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-w-[1095px] w-full mx-auto bg-white rounded-2xl overflow-hidden p-8"
          >
            <RegistrarClienteModal onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ClientesView;
