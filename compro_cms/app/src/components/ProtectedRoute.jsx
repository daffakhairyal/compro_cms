import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem('token'); // Cek token di localStorage

  return token ? element : <Navigate to="/auo" />; // Jika token ada, render halaman, jika tidak, redirect ke login
};

export default ProtectedRoute;
