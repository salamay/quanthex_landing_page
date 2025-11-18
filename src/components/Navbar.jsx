"use client";
import React, { useState } from "react";
import "../styles/Navbar.css";
import Logo from '../assets/img/quanthex-logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbggg bg-black text-white px-5 py-3  top-0 left-0 w-full fixed z-50">
      <div className=" mx-auto flex justify-between items-center w-full md:w-[1250px]">
       
          <div className="display: flex gap-3" onClick={() => setMenu("hero")}>
            {/* <img src={logo} alt="" className="ToroGlogo w-10 h-10" /> */}
            <img src={Logo} alt="" className="w-20 "/>
           
          </div>
      

        

      
      </div>

     
    </nav>
  );
};

export default Navbar;
