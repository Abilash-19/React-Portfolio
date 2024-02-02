import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export const ProjectProps = ({title , details , img , role , role_des , link}) => {
  useEffect(()=>{
    Aos.init()
  })
  return (
    <div className="min-h-screen mb-10 md:mb-4 ">
      <h4 data-aos="fade-in" aos-duration="5000"  className="text-[1.6rem] md:text-[1.8rem] mb-6 font-semibold">{title} </h4>
      <p className="text-[1.2rem] md:text-[1.3rem] mb-6 font-normal text-justify hyphens-auto text-gray-800 " data-aos='fade-in' data-aos-duration='1000'  >
       {details}
      </p>
      
      
      <div className=" h-[400px] w-full relative  md:mb-10 ">
        <img src={img} data-aos="zoom-in"
          data-aos-duration="1000"  className=" object-contain h-full md:w-full obj " />
      </div>

      <p className="text-[1.4rem] md:text-[1.6rem] text-blue-700  text-center ">
        
        <span className=" font-semibold  mr-3  text-black  ">Role :</span>{" "}
        {role_des}
      </p>
      {/* <a
        href={link}
        className="text-[1.5em] text-blue-600 underline"
        target="_blank"
      >
        View website
      </a> */}
      
    </div>
  );
};
