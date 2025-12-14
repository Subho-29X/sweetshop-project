import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, user, logout } = useAuth();
  console.log("USER ROLE:", user?.role);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          🍬 SweetShop
        </Link>
      </div>

      <div className="navbar-right">
        {/* <Link to="/">Dashboard</Link> */}
        <Link to="/dashboard">Dashboard</Link>

        {token && user?.role === "ADMIN" && (
          <>
            <Link to="/admin">Admin</Link>
            <Link to="/add-sweet">Add Sweet</Link>
          </>
        )}

        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span className="navbar-user">{user?.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
