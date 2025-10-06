import LoginView from "~/views/auth/LoginView";
import type { Route } from "./+types/home";
import HomeView from "~/views/homeView";
import ForgotPasswordView from "~/views/auth/ForgotPasswordView";
import ResetPasswordView from "~/views/auth/ResetPasswordView";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // return <HomeView />;
  return <ResetPasswordView />;
}
