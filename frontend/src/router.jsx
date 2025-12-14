// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import ProtectedRoute from "./auth/ProtectedRoute";
// import Dashboard from "./pages/Dashboard";
// import AddSweet from "./pages/AddSweet";
// import UpdateSweet from "./pages/UpdateSweet";
// import SweetDetails from "./pages/SweetDetails";
// import NotFound from "./pages/NotFound";
// import AdminPanel from "./pages/AdminPanel";
// import Layout from "./components/Layout";

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* 🔓 Public routes */}
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* 🔐 Protected routes */}
//         <Route element={<ProtectedRoute />}>
//           <Route element={<Layout />}>
//             {/* User routes */}
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/sweets/:id" element={<SweetDetails />} />

//             {/* 👑 Admin-only routes */}
//             <Route element={<ProtectedRoute adminOnly />}>
//               <Route path="/admin" element={<AdminPanel />} />
//               <Route path="/add-sweet" element={<AddSweet />} />
//               <Route path="/sweets/edit/:id" element={<UpdateSweet />} />
//             </Route>
//           </Route>
//         </Route>

//         {/* ❌ Fallback */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProtectedRoute from "./auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import AddSweet from "./pages/AddSweet";
import UpdateSweet from "./pages/UpdateSweet";
import SweetDetails from "./pages/SweetDetails";
import NotFound from "./pages/NotFound";
import AdminPanel from "./pages/AdminPanel";
import Layout from "./components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔓 Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sweets/:id" element={<SweetDetails />} />

            {/* 👑 Admin routes */}
            <Route element={<ProtectedRoute adminOnly />}>
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/add-sweet" element={<AddSweet />} />
              <Route path="/sweets/edit/:id" element={<UpdateSweet />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
