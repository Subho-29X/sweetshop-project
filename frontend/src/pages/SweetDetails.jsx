import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../services/axiosClient";
import { useAuth } from "../context/AuthContext";

const SweetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [sweet, setSweet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSweet = async () => {
    try {
      const res = await axiosClient.get(`/sweets/${id}`);
      setSweet(res.data);
    } catch (err) {
      setError("Sweet not found");
    } finally {
      setLoading(false);
    }
  };

  const handlePurchase = async () => {
    try {
      await axiosClient.post(`/sweets/${id}/purchase`, { quantity: 1 });
      fetchSweet(); // refresh quantity
    } catch (err) {
      alert("Purchase failed");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this sweet?")) return;

    try {
      await axiosClient.delete(`/sweets/${id}`);
      navigate("/");
    } catch (err) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchSweet();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!sweet) return null;

  return (
    <div className="sweet-detail">
      <h2>{sweet.name}</h2>

      <p>
        <strong>Category:</strong> {sweet.category}
      </p>
      <p>
        <strong>Price:</strong> ₹{sweet.price}
      </p>
      <p>
        <strong>Available:</strong> {sweet.quantity}
      </p>

      <button onClick={handlePurchase} disabled={sweet.quantity === 0}>
        {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
      </button>

      {user?.role === "ADMIN" && (
        <div style={{ marginTop: "1rem" }}>
          <button onClick={() => navigate(`/admin/edit/${id}`)}>Edit</button>
          <button onClick={handleDelete} style={{ marginLeft: "1rem" }}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default SweetDetail;
