"use client";
import SideBar from "@/components/sideBar";
import Layout from "@/components/layout";
import InfoCard from "@/components/cards/infoCard";
import OTSection from "@/components/otSection";
import { useState } from "react";

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

const dataPlanner = [
  {
    texto: "OT’s Activas",
    numero: 24,
  },
  {
    texto: "Operarios disponibles",
    numero: 24,
  },
  {
    texto: "Entregas hoy",
    numero: 7,
  },
];

const HomeView = () => {
  const [userType, setUserType] = useState<
    "admin" | "atention" | "operator" | "planner"
  >("planner");
  switch (userType) {
    case "admin":
      return <></>;
    case "atention":
      return (
        <Layout>
          <SideBar />
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="mb-4 sm:mb-8">
              <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
                ¡Bienvenido, BigSmoke!
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#5D5F5F]">
                Jueves, 4 de septiembre
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
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
    case "planner":
      return (
        <Layout>
          <SideBar />
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="mb-4 sm:mb-8">
              <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl">
                ¡Bienvenido, BigSmoke!
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-[#5D5F5F]">
                Jueves, 4 de septiembre
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              {dataPlanner.map((item, key) => (
                <InfoCard key={key} texto={item.texto} numero={item.numero} />
              ))}
            </div>
            <OTSection />
          </div>
        </Layout>
      );
  }
};

export default HomeView;
