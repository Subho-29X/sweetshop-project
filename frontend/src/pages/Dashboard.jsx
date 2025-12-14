import { useEffect, useState } from "react";
import SweetCard from "../components/SweetCard";
import axiosClient from "../services/axiosClient";

const Dashboard = () => {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // search filters
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const fetchSweets = async () => {
    setLoading(true);
    setError("");

    try {
      const params = {};
      Object.keys(filters).forEach((key) => {
        if (filters[key]) params[key] = filters[key];
      });

      const res = await axiosClient.get("/sweets/search", { params });
      setSweets(res.data);
    } catch (err) {
      setError("Failed to load sweets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSweets();
  };

  if (loading) return <p>Loading sweets...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="dashboard">
      <h2>Available Sweets 🍬</h2>

      {/* Search */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          name="name"
          placeholder="Search by name"
          value={filters.name}
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={handleChange}
        />

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
        />

        <button type="submit">Search</button>
      </form>

      {/* Sweets list */}
      <div className="sweets-grid">
        {sweets.length === 0 ? (
          <p>No sweets found</p>
        ) : (
          sweets.map((sweet) => <SweetCard key={sweet.id} sweet={sweet} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
