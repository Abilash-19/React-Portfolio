import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Socialicons } from "./socialicons";
import { TypeAnimation } from 'react-type-animation';
// import bgimage from '../images/bgimg.jpg'
export default function Herocomp() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="flex justify-center  items-center ">
      <div className="h-[60%] w-full">
        <p className="text-2xl font-bold text-gray-600 text-start mb-4 md:hidden">Hello , </p>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-5xl md:text-[5rem] mb-4 font-bold md:text-center text-[#18191A]"
        >
          I'm Abilash
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-xl md:text-3xl mb-8 md:text-center"
        >
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'React developer',
        1000,
        'Code code code.',1000
       
        
      ]}
      wrapper="span"
      speed={60}
     repeat={Infinity}
      
    />
        </h1>

          <Socialicons/>
      </div>
    </section>
  );
}
