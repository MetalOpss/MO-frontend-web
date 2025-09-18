import SideBar from "~/components/sideBar";
import Layout from "~/components/layout";
import InfoCard from "~/components/cards/infoCard";
import OTSection from "~/components/otSection";
import Filters from "~/components/fillter";

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
  return (
    <Layout>
      <SideBar />
      <div className="flex flex-col gap-6">
        <div className="">
          <h1 className="font-medium text-4xl">Clientes</h1>
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
    </Layout>
  );
};

export default ClientesView;
