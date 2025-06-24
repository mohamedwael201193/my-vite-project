import React, { useState } from "react";
import NavBar from "../../Component/NavBar/NavBar";
import Location from "../../Component/Location/Location";
import Footer from "../../Component/Footer/Footer";

function Portfolio() {
  const [modalImg, setModalImg] = useState(null);

  const images = [
    "poert1.png",
    "port2.png",
    "port3.png",
    "poert1.png",
    "port3.png",
    "port2.png",
  ];

  return (
    <>
      <NavBar />
      <div className="w-full h-full py-10 mb-9 ">
        <div className="container">
          <div className="flex flex-col justify-center items-center py-5">
            <h1 className="text-5xl font-bold text-gray-800">
              Start Framework
            </h1>
            <div className="flex items-center justify-center gap-4 my-4 w-full max-w-md ">
              <hr className="flex-grow border-t-2 border-gray-800" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-800"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <hr className="flex-grow border-t-2 border-gray-800" />
            </div>
          </div>
          <div className="cards grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="card relative cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setModalImg(img)}
              >
                <img
                  src={`https://routeegy.github.io/startFramework/assets/images/${img}`}
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#1abc9c] flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          {/* Modal */}
          {modalImg && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 "
              onClick={() => setModalImg(null)}
            >
              <div className="relative">
                <img
                  src={`https://routeegy.github.io/startFramework/assets/images/${modalImg}`}
                  alt=""
                  className="max-w-full max-h-[80vh] rounded-lg"
                />
                <button
                  className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1"
                  onClick={() => setModalImg(null)}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Location />
      <Footer />
    </>
  );
}

export default Portfolio;
