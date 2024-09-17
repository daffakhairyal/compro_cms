import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Untuk navigasi setelah login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Hook untuk navigasi

  // Data dummy untuk validasi login
  const dummyEmail = "test@example.com";
  const dummyPassword = "password123";

  // Fungsi untuk menghasilkan token dummy
  const generateToken = () => {
    return Math.random().toString(36).substr(2);  // Token dummy sederhana
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi login berdasarkan data dummy
    if (email === dummyEmail && password === dummyPassword) {
      const generatedToken = generateToken();
      
      // Simpan token ke localStorage
      localStorage.setItem('token', generatedToken);
      
      // Reset pesan error jika berhasil login
      setErrorMessage('');
      
      // Redirect ke halaman dashboard atau halaman lain
      navigate('/auo/back-office');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {errorMessage && (
          <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
