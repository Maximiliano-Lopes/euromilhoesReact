import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resultado from "./components/Resultado/Resultado.js"
import Home from "./components/Home/Home.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/euromilhoesReact" element={<Home />} />
      <Route path="/euromilhoesReact/resultado" element={<Resultado />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
