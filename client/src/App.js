import React from "react";
import Home from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
        <Route path="/allposts" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
