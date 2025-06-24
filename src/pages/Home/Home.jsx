import React from "react";
import NavBar from "../../Component/NavBar/NavBar";
import Location from "../../Component/Location/Location";
import Footer from "../../Component/Footer/Footer";
function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full h-screen bg-[#1abc9c]">
        <div className="home-contant flex flex-col justify-center items-center h-full gap-5">
          <img
            src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            className="w-60"
            alt=""
            srcset=""
          />
          <h1 className="text-5xl font-bold text-white">Start Framework</h1>
          <div className="flex items-center justify-center gap-4 my-4 w-full max-w-md">
            <hr className="flex-grow border-t-2 border-white" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <hr className="flex-grow border-t-2 border-white" />
          </div>
          <p className="text-xl text-white">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
      <Location />
      <Footer />
    </>
  );
}

export default Home;
