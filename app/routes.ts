import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("hola", "routes/hola.tsx"),
  route("clientes", "routes/clientes.tsx"),
] satisfies RouteConfig;
