import React from "react";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Socialicons } from "./socialicons";
import { TypeAnimation } from "react-type-animation";
export const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="project">
      <Navbar />

      <div className=" mt-16 md:mb-10">
        <h1
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          className="text-5xl font-bold text-[#18191A] mb-6 md:mb-10 "
        >
          <TypeAnimation
            sequence={[
              "About me ",
              1000,
              "Who I Am ?",
              1000,
              
            ]}
            repeat={Infinity}
            speed={60}
          />
        </h1>
        <div className="md:hidden mb-6">
          {" "}
          <Socialicons />{" "}
        </div>
        {/* font-normal hyphens-auto text-xl md:text-2xl txt mb-3 mt-6 */}
        <p
          className="font-normal hyphens-auto text-lg md:text-[1.37em] txt mb-3 mt-6 text-gray-800"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          Welcome to my digital space! I'm Abilash, a passionate and dynamic
          individual hailing from the vibrant state of Tamil Nadu, India.
          Currently, I am on an exciting journey as a fresher at the esteemed
          Bannari Amman Institute of Technology, pursuing my studies in Computer
          Science and Business Systems.Being deeply engrossed in my academic pursuits, I'm honing my skills in front-end development with a strong focus on React. I thrive on problem-solving challenges, and my proficiency extends to Data Structures and Algorithms. Creating seamless and visually appealing user interfaces is my forte, and I constantly strive to stay abreast of current technologies.As a perpetual learner, I'm always eager to delve into the intricacies of emerging technologies. My journey is a fusion of academic excellence, hands-on experience, and an unyielding enthusiasm for staying ahead in the ever-evolving tech landscape.
        </p>
      </div>
      <div className="flex justify-between">
        <a
          href="https://drive.google.com/file/d/1jN4vgqBAUivVu2hjLTur8D6NAfWwnu-g/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="  text-white  text-xl font-semibold border p-2 bg-black  border-black hover:bg-transparent hover:text-black transition-all  text-center md:w-fit px-4 "
        >
          Resume
        </a>
        <div className="hidden md:block">
          {" "}
          <Socialicons />{" "}
        </div>
      </div>
    </div>
  );
};
