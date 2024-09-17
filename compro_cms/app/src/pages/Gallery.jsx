import React from "react";

const Gallery = () => {
  // Data dummy untuk gambar dari Lorem Picsum
  const images = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5",
    "https://picsum.photos/200/300?random=6",
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8",
    "https://picsum.photos/200/300?random=9",
    "https://picsum.photos/200/300?random=10"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
