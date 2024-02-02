import React from "react";
import { BsCalculator, BsGithub, BsInstagram, BsLinkedin , BsPhone, BsTelephone } from "react-icons/bs";

export const Socialicons = () => {
  return (
    <ul className="flex flex-row   gap-6 items-center justify-start md:justify-center">
      <li>
        <a href="https://www.linkedin.com/in/abilash-s-84608a23a/"
          className="text-blue-700 text-3xl md:text-4xl "
          target="_blank"
          rel="noreferrer"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/lash.dev/"
          className=" text-red-400 text-3xl md:text-4xl "
          rel="noreferrer"
          target="_blank"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {" "}
          <BsInstagram />{" "}
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Abilash-19"
          className="text-black text-3xl md:text-4xl "
          rel="noreferrer"
          target="_blank"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
      
          {" "}
          <BsGithub />{" "}
        </a>
      </li>
      <li>
      <a
          href="tel:+916374083841"
          className="text-black text-3xl md:text-4xl "
          rel="noreferrer"
          target="_blank"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
      
          {" "}
          <BsTelephone />{" "}
        </a>
      </li>
    </ul>
  );
};
