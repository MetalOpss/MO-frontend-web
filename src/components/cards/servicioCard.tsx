import { MdDesignServices } from "react-icons/md";
import {
  GiFoldedPaper,
  GiCircularSaw,
  GiSparkPlug,
  GiMetalPlate,
} from "react-icons/gi";

interface ServicioCardProps {
  numeroOrden: number;
  servicioNombre: string;
}

const ServicioCard = ({ numeroOrden, servicioNombre }: ServicioCardProps) => {
  return (
    <div className="flex flex-col gap-2.5 px-5 py-2.5 border border-gray-300 rounded-4xl max-w-[200px] w-full">
      <div>
        <div className="w-[45px] h-[45px] rounded-full bg-[#9BCBFF] flex items-center justify-center text-[#2C6291] text-4xl font-medium">
          {numeroOrden}
        </div>
        <div className="font-normal text-2xl text-[#5f5d5d]">
          {servicioNombre}
        </div>
      </div>
      <div className="mx-auto">
        {servicioNombre === "Diseñado" && (
          <MdDesignServices color="366A9A" size={110} />
        )}
        {servicioNombre === "Cortado" && (
          <GiCircularSaw color="366A9A" size={110} />
        )}
        {servicioNombre === "Plegado" && (
          <GiFoldedPaper color="366A9A" size={110} />
        )}
        {servicioNombre === "Soldado" && (
          <GiSparkPlug color="366A9A" size={110} />
        )}
        {servicioNombre === "Grabado" && (
          <GiMetalPlate color="366A9A" size={110} />
        )}
      </div>
    </div>
  );
};

export default ServicioCard;
