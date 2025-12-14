import axiosClient from "./axiosClient";

// Get all sweets
export const getAllSweets = () => {
  return axiosClient.get("/sweets");
};

// Search sweets
export const searchSweets = (params = {}) => {
  return axiosClient.get("/sweets/search", {
    params,
  });
};

// Get single sweet by ID
export const getSweetById = (id) => {
  return axiosClient.get(`/sweets/${id}`);
};

// Add new sweet (ADMIN)
export const addSweet = (data) => {
  return axiosClient.post("/sweets", data);
};

// Update sweet (ADMIN)
export const updateSweet = (id, data) => {
  return axiosClient.put(`/sweets/${id}`, data);
};

// Delete sweet (ADMIN)
export const deleteSweet = (id) => {
  return axiosClient.delete(`/sweets/${id}`);
};
