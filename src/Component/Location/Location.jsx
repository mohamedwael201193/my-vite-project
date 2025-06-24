import React from "react";

function Location() {
  return (
    <div className="bg-gray-800 grid md:grid-cols-3 gap-12 pt-12 pb-12 text-white justify-items-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 ">
        <h1 className="text-2xl font-bold">LOCATION</h1>
        <span className="text-sm">2215 John Daniel Drive</span>
        <span className="text-sm">Clark, MO 65243</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 ">
        <h1 className="text-2xl font-bold">AROUND THE WEB</h1>
        <div className="icons flex justify-center items-center gap-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.981.981-1.187 2.093-1.245 3.374C2.012 5.668 2 6.077 2 12s.012 6.332.07 7.611c.058 1.281.264 2.393 1.245 3.374.981.981 2.093 1.187 3.374 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.264 3.374-1.245.981-.981 1.187-2.093 1.245-3.374.058-1.279.07-1.688.07-7.611s-.012-6.332-.07-7.611c-.058-1.281-.264-2.393-1.245-3.374-.981-.981-2.093-1.187-3.374-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.033-1.85-3.033-1.85 0-2.134 1.446-2.134 2.938v5.664H9.355V9h3.413v1.561h.049c.477-.9 1.64-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.45v6.291zM5.337 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm1.775 13.452H3.562V9h3.55v11.452z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-center ">
        <h1 className="text-2xl font-bold">AROUND THE WEB</h1>
        <p>
          Freelance is a free to use, licensed Bootstrap theme <br />
          created by Route
        </p>
      </div>
    </div>
  );
}

export default Location;
