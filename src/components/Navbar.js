import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu ,GrClose ,GrDevice } from "react-icons/gr";
import { SiDevdotto } from "react-icons/si";


// import { FaDev } from "react-icons/fa";

import "../App.css";

export default function Navbar() {
  const [nav, setnav] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function menuClickHandler() {
    setIsMenuOpened(!isMenuOpened);
  }

  

  return (
    <header   className="text-[#18191A] flex w-full justify-between text-center items-center mb-10">
      <h3  className="text-3xl font-bold flex gap-5 justify-center ">L.a.s.h<SiDevdotto className=" text-amber-500 "/></h3>
      

      <ul className={(isMenuOpened)?"flex text-xl font-semibold  show":"flex text-xl font-semibold"}>
        <li className="pr-8 hover:text-red-700">
          <Link to="/">Home</Link>
        </li>
        <li className="pr-8 hover:text-green-700 font-medium">
          <Link to="/about">About</Link>
        </li>
        <li className="pr-8 hover:text-violet-700 font-medium">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="pr-8 hover:text-yellow-700 font-medium">
          <Link to="/Project">Projects</Link>
        </li>
        <li className="pr-8 hover:text-blue-700 font-medium">
          <Link to="/contact">Contact</Link>
        </li>
        
      </ul>
      
      <li className=" text-3xl hidden hide" onClick={menuClickHandler} >
       
        
        {(isMenuOpened)?<GrClose/>:<GrMenu className="text-white" />}
      </li>
      
    </header>
  );
}
