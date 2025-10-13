"use client";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPaperclip } from "react-icons/fa";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ServicioCard from "../cards/servicioCard";
import type { Value } from "react-calendar/dist/shared/types.js";

interface CrearOtModalProps {
  onClose: () => void;
}

const CrearOtModal: React.FC<CrearOtModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(true);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const addService = () => {
    setServices((prev) => [...prev, ""]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Formatear fecha en dd/mm/yyyy
  const formatDate = (date: Date | null) =>
    date
      ? `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${date.getFullYear()}`
      : "";

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl px-16 py-10 max-w-[1095px] w-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-medium">
            Crear nueva OT
            <p className="text-gray-500 text-xl">
              {step === 1
                ? "Paso 1: Datos generales de la OT"
                : step === 2
                ? "Paso 2: Datos del cliente"
                : step === 3
                ? "Paso 3: Servicios de la OT"
                : step === 4
                ? "Paso 4: Otro paso"
                : "Paso 5: Adjuntar archivo"}
            </p>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <IoClose color="#5D5F5F" size={25} />
          </button>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-4 max-w-[645px] mx-auto">
            <h3 className="text-sm text-gray-500 ">Datos generales</h3>
            <input
              type="text"
              placeholder="Nombre"
              className="p-3 bg-gray-50 rounded-xl outline-none "
            />
            <div className="relative">
              <textarea
                placeholder="Descripción"
                maxLength={500}
                className="p-3 w-full bg-gray-50 rounded-xl outline-none h-28 resize-none"
              />
              <span className="absolute bottom-2 right-3 text-gray-400 text-xs">
                0/500
              </span>
            </div>
            <h3 className="text-sm text-gray-500 ">Localidad</h3>
            <select className="p-3 bg-gray-50 rounded-xl outline-none ">
              <option>Local</option>
              <option>Rio Seco</option>
              <option>Zolezi</option>
            </select>

            <div className="flex justify-end mt-4">
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-[#366A9A] text-white rounded-3xl"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-4 max-w-[645px] mx-auto">
            <h3 className="text-sm text-gray-500 ">Datos personales</h3>
            <input
              type="text"
              placeholder="Nombres"
              className="p-3 bg-gray-50 rounded-xl outline-none "
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="p-3 bg-gray-50 rounded-xl outline-none "
            />

            <h3 className="text-sm text-gray-500 ">Contacto</h3>
            <input
              type="text"
              placeholder="Teléfono"
              className="p-3 bg-gray-50 rounded-xl outline-none "
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-3 bg-gray-50 rounded-xl outline-none "
            />

            <h3 className="text-sm text-gray-500 ">Identificación</h3>
            <div>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-50 outline-none">
                <option>Tipo de documento</option>
                <option>DNI</option>
                <option>Pasaporte</option>
                <option>RUC</option>
              </select>
              <input
                type="text"
                placeholder="Número de documento"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 outline-none mt-3"
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-3xl"
              >
                Retroceder
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-[#366A9A] text-white rounded-3xl"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-6 mx-auto">
            <h3 className="text-sm text-gray-500 ">Servicios</h3>

            <div className="flex gap-4 mx-auto">
              <select className="flex-1 p-3 bg-gray-50 rounded-xl outline-none">
                <option>Servicio</option>
                <option>Instalación</option>
                <option>Mantenimiento</option>
              </select>
              <select className="flex-1 p-3 bg-gray-50 rounded-xl outline-none">
                <option>Servicio</option>
                <option>Reparación</option>
                <option>Revisión</option>
              </select>
              <select className="flex-1 p-3 bg-gray-50 rounded-xl outline-none">
                <option>Servicio</option>
                <option>Soporte</option>
                <option>Consultoría</option>
              </select>
              <button
                onClick={addService}
                className="px-6 py-2 bg-[#366A9A] text-white rounded-3xl"
              >
                + Más servicios
              </button>
            </div>

            <div className="border border-gray-300 rounded-2xl p-8 text-center text-gray-500">
              {services.length === 0 ? (
                <div className="flex flex-col items-center gap-2">
                  <FaCirclePlus size={100} className="text-gray-300" />
                  <p>Sin servicios</p>
                  <span className="text-sm">Agrega servicios</span>
                </div>
              ) : (
                <ul className="flex flex-col gap-2">
                  {services.map((_, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-gray-50 rounded-xl text-left"
                    >
                      Servicio agregado #{idx + 1}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex gap-4">
              <ServicioCard numeroOrden={1} servicioNombre="Diseñado" />
              <ServicioCard numeroOrden={2} servicioNombre="Cortado" />
              <ServicioCard numeroOrden={3} servicioNombre="Plegado" />
              <ServicioCard numeroOrden={4} servicioNombre="Soldado" />
              <ServicioCard numeroOrden={5} servicioNombre="Grabado" />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-3xl"
              >
                Retroceder
              </button>
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-[#366A9A] text-white rounded-3xl"
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
        {/* Step 4 */}
        {step === 4 && (
          <div className="flex flex-col gap-6">
            {showCalendar ? (
              // Vista calendario
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <Calendar
                    onChange={(value: Value) => {
                      if (value instanceof Date) {
                        setSelectedDate(value);
                        setShowCalendar(false);
                      }
                    }}
                    value={selectedDate}
                    locale="es-ES"
                    minDate={new Date()}
                    className="rounded-2xl shadow-sm p-4"
                  />
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <p className="text-lg font-medium">Entrega</p>
                  <button
                    onClick={() => setShowCalendar(true)}
                    className="p-3 bg-gray-50 rounded-xl text-left"
                  >
                    {selectedDate ? formatDate(selectedDate) : "Fecha"}
                  </button>
                  <button
                    disabled
                    className="p-3 bg-gray-50 rounded-xl text-left text-gray-400"
                  >
                    Hora
                  </button>
                </div>
              </div>
            ) : (
              // Vista horas
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-lg font-medium mb-2">
                    Elige una hora
                    {selectedDate && (
                      <span className="block text-gray-500 text-sm">
                        {selectedDate.toLocaleDateString("es-ES", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                        })}
                      </span>
                    )}
                  </p>

                  <div className="flex flex-col gap-3">
                    <p className="font-medium">Mañana</p>
                    {["08:00 am", "09:00 am", "10:00 am", "11:00 am"].map(
                      (hour) => (
                        <button
                          key={hour}
                          onClick={() => setSelectedHour(hour)}
                          className={`p-3 rounded-xl text-left ${
                            selectedHour === hour
                              ? "bg-[#366A9A] text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          {hour}
                        </button>
                      )
                    )}

                    <p className="font-medium mt-2">Tarde</p>
                    {["03:00 pm", "04:00 pm", "05:00 pm", "06:00 pm"].map(
                      (hour) => (
                        <button
                          key={hour}
                          onClick={() => setSelectedHour(hour)}
                          className={`p-3 rounded-xl text-left ${
                            selectedHour === hour
                              ? "bg-[#366A9A] text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          {hour}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <p className="text-lg font-medium">Entrega</p>
                  <button
                    onClick={() => setShowCalendar(true)}
                    className="p-3 bg-gray-50 rounded-xl text-left"
                  >
                    {selectedDate ? formatDate(selectedDate) : "Fecha"}
                  </button>
                  <button className="p-3 bg-gray-50 rounded-xl text-left">
                    {selectedHour || "Hora"}
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-3xl"
              >
                Retroceder
              </button>
              <button
                onClick={nextStep}
                disabled={!selectedDate || !selectedHour}
                className={`px-6 py-2 rounded-3xl ${
                  !selectedDate || !selectedHour
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#366A9A] text-white"
                }`}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
        {/* Step 5 */}
        {step === 5 && (
          <div className="flex flex-col gap-6 mx-auto ">
            <div className="border border-gray-300 flex flex-col gap-6 p-4 rounded-2xl">
              <div>
                <h3 className="text-lg font-medium">Carga tu archivo</h3>
                <p className="text-gray-500 text-sm">Paso opcional</p>
              </div>

              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-12 hover:bg-gray-50 transition"
              >
                <FaPaperclip size={100} className="text-[#366A9A]" />
                <span className="mt-4 text-gray-600">
                  {file ? file.name : "Selecciona un archivo"}
                </span>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={prevStep}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-3xl"
              >
                Retroceder
              </button>
              <button
                onClick={() => {
                  alert("OT finalizada con éxito ✅");
                  onClose();
                }}
                className="px-6 py-2 bg-[#366A9A] text-white rounded-3xl"
              >
                Finalizar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrearOtModal;
