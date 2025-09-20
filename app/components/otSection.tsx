import { useState } from "react";
import { BiExpandAlt } from "react-icons/bi";

interface OT {
  id: number;
  titulo: string;
  estado: "pendiente" | "completada";
}

const OTSection = () => {
  const [activeTab, setActiveTab] = useState<"pendiente" | "completada">(
    "pendiente"
  );

  const ots: OT[] = [
    { id: 1, titulo: "LLavero de Metal", estado: "pendiente" },
    { id: 2, titulo: "LLavero de Metal", estado: "pendiente" },
    { id: 3, titulo: "LLavero de Metal", estado: "pendiente" },
    { id: 4, titulo: "Llavero terminado", estado: "completada" },
    { id: 5, titulo: "Producto finalizado", estado: "completada" },
  ];

  const filteredOTs = ots.filter((ot) => ot.estado === activeTab);

  return (
    <div className="bg-white rounded-2xl p-6 max-w-[1139px] w-full border border-gray-300 ">
      <h2 className="text-lg font-medium text-gray-700 mb-2">OT’s de hoy:</h2>
      <p className="text-3xl font-semibold text-gray-900 mb-6">
        Jueves, 4 de septiembre
      </p>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setActiveTab("pendiente")}
          className={`px-5 py-2 rounded-full text-sm font-medium ${
            activeTab === "pendiente"
              ? "bg-[#366A9A] text-white"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Pendientes
        </button>
        <button
          onClick={() => setActiveTab("completada")}
          className={`px-5 py-2 rounded-full text-sm font-medium ${
            activeTab === "completada"
              ? "bg-[#366A9A] text-white"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          Completadas
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {filteredOTs.map((ot) => (
          <div
            key={ot.id}
            className="flex items-center justify-between bg-gray-50 rounded-2xl px-4 py-3"
          >
            <div>
              <p className="text-2xl font-medium text-gray-800">{ot.titulo}</p>
              <span className="inline-block mt-1 text-[16px] px-3 py-1 rounded-full font-semibold bg-blue-100 text-[#2C6291]">
                {ot.estado === "pendiente" ? "asignada" : "finalizada"}
              </span>
            </div>
            <button>
              <BiExpandAlt className="text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OTSection;
