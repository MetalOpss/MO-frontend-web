import SideBar from "./sideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block lg:w-[343px] h-screen bg-white shadow-lg">
        <SideBar />
      </div>

      {/* Main content area */}
      <main className="flex-1 p-3 sm:p-6 w-full lg:w-auto">
        {children}
      </main>
    </div>
  );
}
