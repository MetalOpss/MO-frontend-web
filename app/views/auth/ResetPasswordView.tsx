import { MdLockReset } from "react-icons/md";

export default function ResetPasswordView() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-lg text-center">
        <div className="flex justify-center mb-4">
          <MdLockReset size={128} color="#5D5F5F" />
        </div>

        <h1 className="text-2xl font-semibold mb-6">Restablecer contraseña</h1>

        <div className="flex flex-col gap-4 text-left">
          <div>
            <label className="text-gray-700 text-sm">Nueva contraseña</label>
            <input
              type="password"
              placeholder="Escribe tu contraseña"
              className="w-full bg-gray-50 rounded-3xl px-4 py-3 outline-none mt-1"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm">
              Confirmar contraseña
            </label>
            <input
              type="password"
              placeholder="Escribe tu contraseña"
              className="w-full bg-gray-50 rounded-3xl px-4 py-3 outline-none mt-1"
            />
          </div>
        </div>

        <button className="mt-6 bg-[#366A9A] text-white rounded-3xl py-3 w-full">
          Cambiar contraseña
        </button>
      </div>
    </div>
  );
}
