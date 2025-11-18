import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import React from "react";


function App() {
  return (
 
<div>
<Navbar />
   
<Hero />
 {/* <Footer /> */}
</div>
   
  
  );
}

export default App;
