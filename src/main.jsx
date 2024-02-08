import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const images = [
  'images/img_1.jpg',
  'images/img_2.jpg',
  'images/img_3.webp',
  'images/img_4.webp',
  'images/img_5.webp'
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>
);
