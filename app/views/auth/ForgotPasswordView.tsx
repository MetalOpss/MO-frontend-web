import { MdLockReset } from "react-icons/md";

export default function ForgotPasswordView() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-lg text-center">
        <div className="flex justify-center mb-4">
          <MdLockReset size={128} color="#5D5F5F" />
        </div>

        <h1 className="text-2xl font-semibold mb-6">Restablecer contraseña</h1>
        <div className="text-left mb-4">
          <label className="text-gray-700 text-sm">Correo</label>
          <input
            type="email"
            placeholder="Escribe tu correo"
            className="w-full bg-gray-50 rounded-3xl px-4 py-3 outline-none mt-1"
          />
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 bg-gray-100 rounded-3xl text-gray-700">
            Cancelar
          </button>
          <button className="px-6 py-2 bg-[#366A9A] text-white rounded-3xl">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
