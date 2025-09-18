import SideBar from "~/components/sideBar";
import Layout from "~/components/layout";
import InfoCard from "~/components/cards/infoCard";
import OTSection from "~/components/otSection";

const data = [
  {
    texto: "OT’s Creadas",
    numero: 15,
    bgClass: "bg-[#366A9A]",
    textClass: "text-white",
    borderClass: "border-[#366A9A]",
  },
  {
    texto: "OT’s Pendientes de diseño",
    numero: 3,
    bgClass: "bg-white",
    textClass: "text-black",
    borderClass: "border-gray-300",
  },
];

const HomeView = () => {
  return (
    <Layout>
      <SideBar />
      <div className="flex flex-col gap-6">
        <div className="mb-8">
          <h1 className="font-medium text-4xl">¡Bienvenido, BigSmoke!</h1>
          <p className="text-2xl font-normal text-[#5D5F5F]">
            Jueves, 4 de septiembre
          </p>
        </div>
        <div className="flex gap-6 max-w-[1139px]">
          {data.map((item, key) => (
            <InfoCard
              key={key}
              texto={item.texto}
              numero={item.numero}
              bgClass={item.bgClass}
              textClass={item.textClass}
              borderClass={item.borderClass}
            />
          ))}
        </div>
        <OTSection />
      </div>
    </Layout>
  );
};

export default HomeView;
