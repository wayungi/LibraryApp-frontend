import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  const location = useLocation();

  const authPages = ["/login", "/signup"];
  const isAuthPage = authPages.includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Outlet />
    </>
  );
};

export default Layout;