import { Link } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const PerfilModal = () => {
  return (
    <div className="relative flex max-w-[900px] max-h-[922px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden ">
      <div className="w-[238px] bg-[#F9F9F9] border-r border-gray-200 flex flex-col">
        <button className="self-start p-4 ">
          <IoClose color="#5D5F5F" size={25} />
        </button>

        <nav className="flex flex-col gap-2 px-4">
          <button className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption">
            <div className="flex gap-2 items-center ">
              <FaRegUserCircle className="sidebarOptionText" size={23} />
              <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
                Cuenta
              </p>
            </div>
          </button>
          <button className="block px-6 py-2 rounded-3xl hover:bg-[#dfecff] sidebarOption">
            <div className="flex gap-2 items-center ">
              <IoMdInformationCircleOutline
                className="sidebarOptionText"
                size={26}
              />
              <p className="text-[#5D5F5F] text-xl font-normal sidebarOptionText">
                Información
              </p>
            </div>
          </button>
        </nav>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 py-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300">
            <img
              src="../public/bigsmoke.jpg"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">Big Smoke</p>
        </div>

        <div className="w-full max-w-md flex flex-col gap-6">
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl text-gray-700">
            <span>Correo</span>
            <span className="text-gray-500">big@gmail.com</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl text-gray-700">
            <span>Nombre de usuario</span>
            <span className="text-gray-500">Big Smoke</span>
          </div>

          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl text-gray-700">
            <span>Contraseña</span>
            <div className="flex flex-col items-center gap-2">
              <span className="tracking-widest">••••••••</span>
              <button className="text-sm text-gray-400 bg-gray-200 px-2 py-1 rounded-lg cursor-pointer">
                Cambiar
              </button>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full max-w-md px-4 py-3 bg-gray-50 rounded-xl text-[#951B1D] hover:bg-red-100 mb-5">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default PerfilModal;
