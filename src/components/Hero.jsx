import React from "react";
import Images1 from "../assets/img/quanthex-logo.png"

function Hero() {


  return (
    <div
    id="hero"
    className="pb-10 pt-36 pl-5 pr-5 bg-black"
  >
    <div className="text-center">
      <h1 className="text-black font-bold text-purple-700 text-[32px] mb-7">
        QUANTHEX
      </h1>
  
      <h1 className="text-[16px] md:text-[20px] text-white">
        Build maximum hash power and turn <br />
        QUANTHEX into your ultimate wealth- <br />
        generating engine.
      </h1>
  
      <div className="flex gap-5 justify-center mt-5">
        <button className="font-normal px-4 py-2 bg-purple-500 rounded-[20px] text-[14px] text-white">
          Download
        </button>
        <button className="font-normal px-4 py-2 border-2 border-purple-500 rounded-[20px] text-[14px] text-purple-500">
          Learn more
        </button>
      </div>
  
      <div className="justify-center mt-8">
        
        <img src={Images1} alt="" className="w-[300px] md:w-[450px] mx-auto"/>
      </div>
    </div>
  </div>
  
  
  );
}

export default Hero;
