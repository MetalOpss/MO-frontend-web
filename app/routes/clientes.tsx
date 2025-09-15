import type { Route } from "./+types/clientes";
import ClientesView from "~/views/ClientesView";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clientes - Mi App" },
    { name: "description", content: "Página de clientes" },
  ];
}

export default function Clientes() {
  return <ClientesView />;
}
