import React from "react";

const BackOffice = () => {
  // Data dummy user yang login, kamu bisa ganti ini dengan data user yang diambil dari API atau localStorage
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://i.pravatar.cc/150?img=3" // Avatar dari layanan pravatar
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">BackOffice</h1>
          <div className="flex items-center space-x-4">
            {/* User Information */}
            <div className="flex items-center space-x-2">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>{user.name}</span>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/auo';
              }}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar dan Konten */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-gray-100 py-6 px-4 shadow-lg">
          <ul>
            <li className="mb-6">
              <a href="#dashboard" className="hover:text-white">Dashboard</a>
            </li>
            <li className="mb-6">
              <a href="/auo/dashboard" className="hover:text-white">Landing Page</a>
            </li>
            <li className="mb-6">
              <a href="/auo/gallery" className="hover:text-white">Gallery</a>
            </li>
            <li className="mb-6">
              <a href="#users" className="hover:text-white">Users</a>
            </li>
            <li className="mb-6">
              <a href="#settings" className="hover:text-white">Settings</a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 bg-gray-100">
          {/* Welcome Section */}
          <section className="mb-8">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">Welcome, {user.name}!</h2>
            <p className="text-gray-600">You are logged in as <span className="font-semibold">{user.email}</span>.</p>
          </section>

          {/* Dashboard Section */}
          <section id="dashboard" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
            <p className="mb-8">This is the dashboard content area.</p>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 shadow rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Users</h3>
                <p className="text-gray-600">Manage users and roles.</p>
              </div>
              <div className="bg-white p-6 shadow rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Settings</h3>
                <p className="text-gray-600">System settings and configurations.</p>
              </div>
              <div className="bg-white p-6 shadow rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold">Reports</h3>
                <p className="text-gray-600">Generate and download reports.</p>
              </div>
            </div>
          </section>

          {/* Users Section */}
          <section id="users" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Users</h2>
            <p className="text-gray-600">This is the users management area.</p>
          </section>

          {/* Settings Section */}
          <section id="settings">
            <h2 className="text-3xl font-bold mb-4">Settings</h2>
            <p className="text-gray-600">This is the settings management area.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BackOffice;
