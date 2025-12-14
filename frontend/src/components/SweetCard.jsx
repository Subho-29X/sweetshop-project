// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import axiosClient from "../services/axiosClient";

// const SweetCard = ({ sweet }) => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   // 🛒 PURCHASE (USER + ADMIN)
//   const handlePurchase = async () => {
//     if (!window.confirm("Purchase 1 item?")) return;

//     try {
//       await axiosClient.post(`/sweets/${sweet.id}/purchase`, {
//         quantity: 1,
//       });
//       window.location.reload();
//     } catch (err) {
//       alert("Purchase failed");
//     }
//   };

//   // 📦 RESTOCK (ADMIN ONLY)
//   const handleRestock = async () => {
//     const qty = prompt("Enter quantity to restock:");
//     if (!qty || Number(qty) <= 0) return;

//     try {
//       await axiosClient.post(`/sweets/${sweet.id}/restock`, {
//         quantity: Number(qty),
//       });
//       window.location.reload();
//     } catch (err) {
//       alert("Restock failed");
//     }
//   };

//   // 🗑 DELETE (ADMIN)
//   const handleDelete = async () => {
//     if (!window.confirm("Delete this sweet?")) return;

//     try {
//       await axiosClient.delete(`/sweets/${sweet.id}`);
//       window.location.reload();
//     } catch (err) {
//       alert("Failed to delete sweet");
//     }
//   };

//   return (
//     <div className="sweet-card">
//       <h3>{sweet.name}</h3>
//       <p>Category: {sweet.category}</p>
//       <p>Price: ₹{sweet.price}</p>
//       <p>In Stock: {sweet.quantity}</p>

//       {/* 🛒 USER + ADMIN */}
//       <button onClick={handlePurchase} disabled={sweet.quantity === 0}>
//         🛒 Purchase
//       </button>

//       {/* 🔥 ADMIN CONTROLS */}
//       {user?.role === "ADMIN" && (
//         <div className="admin-actions">
//           <button
//             onClick={() =>
//               navigate(`/sweets/edit/${sweet.id}`, {
//                 state: { sweet },
//               })
//             }
//           >
//             ✏️ Edit
//           </button>

//           <button onClick={handleDelete}>🗑 Delete</button>

//           <button onClick={handleRestock}>📦 Restock</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SweetCard;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axiosClient from "../services/axiosClient";

const SweetCard = ({ sweet }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // quantity to purchase
  const [buyQty, setBuyQty] = useState(1);

  // 🛒 PURCHASE (USER + ADMIN)
  const handlePurchase = async () => {
    if (buyQty <= 0) {
      alert("Quantity must be at least 1");
      return;
    }

    if (buyQty > sweet.quantity) {
      alert("Not enough stock available");
      return;
    }

    try {
      await axiosClient.post(`/sweets/${sweet.id}/purchase`, {
        quantity: buyQty,
      });
      window.location.reload();
    } catch (err) {
      alert("Purchase failed");
    }
  };

  // 📦 RESTOCK (ADMIN ONLY)
  const handleRestock = async () => {
    const qty = prompt("Enter quantity to restock:");
    if (!qty || Number(qty) <= 0) return;

    try {
      await axiosClient.post(`/sweets/${sweet.id}/restock`, {
        quantity: Number(qty),
      });
      window.location.reload();
    } catch (err) {
      alert("Restock failed");
    }
  };

  // 🗑 DELETE (ADMIN ONLY)
  const handleDelete = async () => {
    if (!window.confirm("Delete this sweet?")) return;

    try {
      await axiosClient.delete(`/sweets/${sweet.id}`);
      window.location.reload();
    } catch (err) {
      alert("Failed to delete sweet");
    }
  };

  return (
    <div className="sweet-card">
      <h3>{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>In Stock: {sweet.quantity}</p>

      {/* 🛒 PURCHASE SECTION */}
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          min="1"
          max={sweet.quantity}
          value={buyQty}
          onChange={(e) => setBuyQty(Number(e.target.value))}
          style={{ width: "60px", marginRight: "8px" }}
        />

        <button onClick={handlePurchase} disabled={sweet.quantity === 0}>
          🛒 Purchase
        </button>
      </div>

      {/* 🔥 ADMIN CONTROLS */}
      {user?.role === "ADMIN" && (
        <div className="admin-actions">
          <button
            onClick={() =>
              navigate(`/sweets/edit/${sweet.id}`, {
                state: { sweet },
              })
            }
          >
            ✏️ Edit
          </button>

          <button onClick={handleDelete}>🗑 Delete</button>

          <button onClick={handleRestock}>📦 Restock</button>
        </div>
      )}
    </div>
  );
};

export default SweetCard;
