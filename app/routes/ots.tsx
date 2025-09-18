import type { Route } from "./+types/ots";
import OtsView from "~/views/otsView";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <OtsView />;
}
