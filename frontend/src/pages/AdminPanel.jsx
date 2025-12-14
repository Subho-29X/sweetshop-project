import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <p>
        Welcome, <strong>{user?.name || "Admin"}</strong>
      </p>

      <div className="admin-actions">
        <Link to="/add-sweet" className="admin-btn">
          ➕ Add Sweet
        </Link>
        <br />
        <br />

        <Link to="/" className="admin-btn">
          {/* 📦 Manage Inventory */}
          <p>📦 Manage inventory from the Dashboard (Edit / Delete sweets)</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
