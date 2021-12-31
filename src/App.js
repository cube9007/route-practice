import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FAQ from "./page/sitemanage/Faq";
import HOME from "./page/HOME";
import Fontcolor from "./page/styleguide/Fontcolor"
import Materialicons from "./page/styleguide/Materialicons"
import './assets/scss/style.scss'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/page/styleguide/Fontcolor" element={<Fontcolor />} /> 
          <Route path="/page/styleguide/Materialicons" element={<Materialicons />} /> 
          <Route path="/page/sitemanage/Faq" element={<FAQ />} />       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;