import axiosClient from "./axiosClient";

// Purchase a sweet (decrease quantity)
export const purchaseSweet = (sweetId, quantity) => {
  return axiosClient.post(`/sweets/${sweetId}/purchase`, {
    quantity,
  });
};

// Restock a sweet (ADMIN only)
export const restockSweet = (sweetId, quantity) => {
  return axiosClient.post(`/sweets/${sweetId}/restock`, {
    quantity,
  });
};
