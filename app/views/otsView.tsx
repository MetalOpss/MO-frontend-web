import SideBar from "~/components/sideBar";
import Layout from "~/components/layout";
import InfoCard from "~/components/cards/infoCard";
import Filters from "~/components/fillter";

import { AiOutlineSearch } from "react-icons/ai";
import { GoPlus } from "react-icons/go";

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
  return (
    <Layout>
      <SideBar />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between mb-2 max-w-[1139px]">
          <h1 className="font-medium text-4xl">Ordenes de Trabajo</h1>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700">
              <AiOutlineSearch size={20} color="767777" />
              <input
                type="text"
                placeholder="Buscar OT"
                className="bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#366a9a] text-white">
              <GoPlus size={20} color="FFFFFF" />
              <p>Registrar OT</p>
            </button>
          </div>
        </div>
        <div className="flex gap-6 max-w-[1139px]">
          {data.map((item, key) => (
            <InfoCard key={key} texto={item.texto} numero={item.numero} />
          ))}
        </div>
        <Filters />
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 justify-between max-w-[1139px] bg-gray-50 rounded-2xl px-4 py-3"
          >
            <div>
              <p className="text-xl font-medium text-[#1A1C1C]">
                {"Nombre de la OT"}
              </p>
              <p className="text-lg font-medium text-[#5D5F5F]">
                {"11 Sep, 8:00 AM"}
              </p>
            </div>
            <span className="text-[12px] w-fit px-3 py-1 rounded-full font-medium bg-[#F0F1F1] text-[#1A1C1C]">
              En registro
            </span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default OtsView;
