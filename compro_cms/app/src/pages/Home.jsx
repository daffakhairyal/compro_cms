import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaGem, FaLeaf, FaGlobe, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Import icons

const Home = () => {
  return (
    <div className="overflow-hidden">


      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-100"> {/* Increased padding-top */}
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            PT. Mulya Timur Global is a company that manages business units engaged in gold mining and refining. We started our operations in eastern Indonesia, especially in Papua, which is known for its rich gold deposits.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaGem className="text-5xl text-gray-700 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold">Mission</h3>
              <p className="mt-2 text-gray-600">
                To provide high-quality gold products while adhering to sustainable mining practices.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaGlobe className="text-5xl text-gray-700 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold">Vision</h3>
              <p className="mt-2 text-gray-600">
                To be a leading gold producer in Indonesia and a model for sustainable mining practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-10 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 m-2">
              <FaLeaf className="text-5xl text-gray-700 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold">Gold Bars</h3>
              <p className="text-gray-600">
                Our gold bars are of the highest purity, refined to meet international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-xl mb-2">
              <FaEnvelope className="inline-block text-gray-600 mr-2" />
              Email: <a href="mailto:info@muliyatimurglobal.com" className="text-blue-600">info@muliyatimurglobal.com</a>
            </p>
            <p className="text-lg md:text-xl mb-2">
              <FaPhoneAlt className="inline-block text-gray-600 mr-2" />
              Phone: <a href="tel:+62123456789" className="text-blue-600">+62 123 456 789</a>
            </p>
            <p className="text-lg md:text-xl">
              <FaMapMarkerAlt className="inline-block text-gray-600 mr-2" />
              Address: Jakarta, Indonesia
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
