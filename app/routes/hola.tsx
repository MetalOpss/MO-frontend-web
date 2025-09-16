import PerfilModal from "~/components/modales/perfilModal";
import type { Route } from "./+types/hola";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hola - Mi App" },
    { name: "description", content: "Página de saludo" },
  ];
}

export default function Hola() {
  return <div className="">{/* <PerfilModal /> */}</div>;
}
