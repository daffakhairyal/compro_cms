import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BackOffice from "./pages/BackOffice";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Halaman login */}
        <Route path="/auo" element={<Login />} />
        {/* Halaman BackOffice hanya bisa diakses jika ada token */}
        <Route path="/auo/back-office" element={<ProtectedRoute element={<BackOffice />} />} />
        <Route path="/auo/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/auo/gallery" element={<ProtectedRoute element={<Gallery />} />} />
      </Routes>
    </Router>
  );
}

export default App;
