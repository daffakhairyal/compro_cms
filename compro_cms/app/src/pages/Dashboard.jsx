import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">Company Profile Dashboard</h1>
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
      </nav>

      {/* Sidebar dan Konten */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-gray-100 py-6 px-4 shadow-lg">
          <ul className="space-y-6">
            <li>
              <a href="#overview" className="block hover:text-white">
                <span className="text-lg font-semibold">Overview</span>
              </a>
            </li>
            <li>
              <a href="#about-us" className="block hover:text-white">
                <span className="text-lg font-semibold">Edit About Us</span>
              </a>
            </li>
            <li>
              <a href="#mission-vision" className="block hover:text-white">
                <span className="text-lg font-semibold">Edit Mission & Vision</span>
              </a>
            </li>
            <li>
              <a href="#products" className="block hover:text-white">
                <span className="text-lg font-semibold">Edit Products</span>
              </a>
            </li>
            <li>
              <a href="#team" className="block hover:text-white">
                <span className="text-lg font-semibold">Edit Team</span>
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8 bg-gray-50">
          {/* Section Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-4xl font-bold text-gray-700 mb-6">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Company Overview</h3>
                <p className="text-gray-600">Manage general information about the company.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Mission & Vision</h3>
                <p className="text-gray-600">Edit the company's mission and vision statements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Products</h3>
                <p className="text-gray-600">Update the products or services offered by the company.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Team</h3>
                <p className="text-gray-600">Manage team members and their roles.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                <p className="text-gray-600">Edit the company's contact information.</p>
              </div>
            </div>
          </section>

          {/* Edit About Us Section */}
          <section id="about-us" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Edit About Us</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="about-us-text" className="block text-gray-700 font-semibold">
                    About Us Content
                  </label>
                  <textarea
                    id="about-us-text"
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded mt-2"
                    placeholder="Enter about us content here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </section>

          {/* Edit Mission & Vision Section */}
          <section id="mission-vision" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Edit Mission & Vision</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="mission-text" className="block text-gray-700 font-semibold">
                    Mission Statement
                  </label>
                  <textarea
                    id="mission-text"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded mt-2"
                    placeholder="Enter mission statement here..."
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="vision-text" className="block text-gray-700 font-semibold">
                    Vision Statement
                  </label>
                  <textarea
                    id="vision-text"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded mt-2"
                    placeholder="Enter vision statement here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </section>

          {/* Edit Products Section */}
          <section id="products" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Edit Products</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="products-text" className="block text-gray-700 font-semibold">
                    Product Description
                  </label>
                  <textarea
                    id="products-text"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded mt-2"
                    placeholder="Enter product details here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </section>

          {/* Edit Team Section */}
          <section id="team" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">Edit Team</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="team-text" className="block text-gray-700 font-semibold">
                    Team Members
                  </label>
                  <textarea
                    id="team-text"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded mt-2"
                    placeholder="Enter team members here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
