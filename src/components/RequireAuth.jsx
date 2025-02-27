import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useApp } from "../lib/AppStore";
import Sidebar from "./Sidebar";
import { Sidebar as SidebarIcon } from "lucide-react";

const RequireAuth = () => {
  const {
    auth: { user },
    openSidebar,
  } = useApp((state) => state);
  const location = useLocation();

  return user?.role ? (
    <div className="flex">
      <Sidebar />
      <main className="main_container flex-[4] bg-white py-5 px-2 sm:px-5 h-fit sm:h-screen sm:overflow-y-scroll">
        <SidebarIcon className="lg:hidden block" onClick={openSidebar} />
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default RequireAuth;
