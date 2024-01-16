"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Container() {
  return (
    <ToastContainer
      // position="top-right"
      autoClose={5000}
      pauseOnHover={true}
    />
  );
}
