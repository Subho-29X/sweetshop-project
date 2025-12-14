import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const location = useLocation();
  const { token } = useAuth();

  // Hide navbar only on auth pages (login/register)
  // Show navbar on homepage if user is logged in
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    (location.pathname === "/" && !token);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
