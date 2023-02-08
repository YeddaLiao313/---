import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/Header.scss";
import "./pages/Wish/style/index.scss";
import App from "./App";
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/Wish/style/wishcontent.scss'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
