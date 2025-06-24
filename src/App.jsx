import React from "react";
import "./index.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./Component/404/NotFound";
function App() {
  const routers = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/contact", element: <Contact /> },
    { path: '*', element: <NotFound/> },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
