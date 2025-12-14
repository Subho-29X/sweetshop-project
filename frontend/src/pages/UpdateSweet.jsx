// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axiosClient from "../services/axiosClient";

// const UpdateSweet = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     quantity: "",
//   });

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch existing sweet
//   useEffect(() => {
//     const fetchSweet = async () => {
//       try {
//         const res = await axiosClient.get(`/sweets/${id}`);
//         setFormData(res.data);
//       } catch (err) {
//         setError("Failed to load sweet");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSweet();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       await axiosClient.put(`/sweets/${id}`, {
//         ...formData,
//         price: Number(formData.price),
//         quantity: Number(formData.quantity),
//       });

//       navigate("/");
//     } catch (err) {
//       setError("Update failed");
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="page">
//       <h2>Update Sweet</h2>

//       {error && <p className="error">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="category"
//           placeholder="Category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           value={formData.quantity}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Update Sweet</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateSweet;

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../services/axiosClient";

const UpdateSweet = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // 👇 sweet comes from Dashboard
  const [formData, setFormData] = useState(
    state?.sweet || {
      name: "",
      category: "",
      price: "",
      quantity: "",
    }
  );

  if (!state?.sweet) {
    return <p>Sweet data not available</p>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosClient.put(`/sweets/${id}`, formData);
      navigate("/");
    } catch (err) {
      alert("Failed to update sweet");
    }
  };

  return (
    <div>
      <h2>Update Sweet</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit">Update Sweet</button>
      </form>
    </div>
  );
};

export default UpdateSweet;
