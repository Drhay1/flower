import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css"
import About from "./routes/About"
import Blog from "./routes/Blog"
import Contact from "./routes/Contact"
import Home from "./routes/Home"
import Shop from "./routes/Shop"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/About" element={ <About />} />
        <Route path="/Blog" element={ <Blog />} />
        <Route path="/Contact" element={ <Contact />} />
        <Route path="/Shop" element={ <Shop />} />
      </Routes>
    

    </>
  );
}

export default App;
