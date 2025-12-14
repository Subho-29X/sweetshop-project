import axiosClient from "./axiosClient";

// Register new user
export const register = (data) => {
  return axiosClient.post("/auth/register", data);
};

// Login user
export const login = (data) => {
  return axiosClient.post("/auth/login", data);
};
