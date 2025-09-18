import SideBar from "./sideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-[343px] h-screen bg-white shadow-lg">
        <SideBar />
      </div>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
