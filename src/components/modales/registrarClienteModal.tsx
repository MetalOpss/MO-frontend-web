import { IoClose } from "react-icons/io5";

const RegistrarClienteModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative flex max-w-[1095px] w-full mx-auto bg-white rounded-2xl overflow-hidden p-8">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
      >
        <IoClose color="#5D5F5F" size={22} />
      </button>

      <div className="w-full">
        <h2 className="text-2xl font-medium text-gray-900">
          Registrar nuevo cliente
        </h2>
        <p className="text-gray-500 font-medium text-xl mb-6">
          Información básica del cliente
        </p>

        <form className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">Datos personales</p>
            <input
              type="text"
              placeholder="Nombres"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 outline-none"
            />
            <input
              type="text"
              placeholder="Apellidos"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 outline-none mt-3"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Contacto</p>
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 outline-none"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 outline-none mt-3"
            />
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Identificación</p>
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

          <button
            type="submit"
            className="self-end px-6 py-2 rounded-3xl bg-[#366A9A] text-white"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrarClienteModal;
