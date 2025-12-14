// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedRoute = ({ adminOnly = false }) => {
//   const { token, user, loading } = useAuth();

//   // While auth state is loading
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Not logged in
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // Admin-only route check
//   if (adminOnly && user?.role !== "ADMIN") {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ adminOnly = false }) => {
  const { token, user, loading } = useAuth();

  // ⏳ While auth state is loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // 🔒 Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 👑 Admin-only route protection
  if (adminOnly && user?.role !== "ADMIN") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
