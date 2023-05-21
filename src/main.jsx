import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tippy/dist/tippy.css";
import "swiper/swiper.min.css";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import Aos from "aos";

Aos.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <Toaster></Toaster>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
