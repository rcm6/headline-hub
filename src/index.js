import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from 'webfontloader';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

useEffect(() => {
  WebFont.load({
    google: {
      families: ['Josefin Sans', 'Cardo', 'Open Sans', 'Playfair Display']
    }
  });
 }, []);
