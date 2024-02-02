import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
export const Skillprops = ({ img, name }) => {

    useEffect(()=>{
            Aos.init()
    },[])
  return (
    <div   className=" bg p-5 w-[300px]  flex  items-center  outline-none  flex-wrap border-b-2    ">
      <div className="w-[20%] right-0 bg-black p-2 rounded-sm mr-9 " data-aos="zoom-in"
     data-aos-duration="800">
        <img className="object-cover " src={img} alt="logo" />
      </div>
      <h4 className="text-lg md:text-xl">{name}</h4>
    </div>
  );
};
