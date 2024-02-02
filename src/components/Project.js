import React from "react";
import Navbar from "./Navbar";
import { ProjectProps } from "./ProjectProps";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Cryptotimes from "../images/crypto.jpg";
import FlightAppPic from "../images/flightApp.jpg";
import lingual from "../images/lingual.png";
import { TypeAnimation } from "react-type-animation";

export const Project = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" project ">
      <Navbar />
      <div className="mt-20">
        <h1
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          className="text-5xl font-bold text-[#18191A] mb-10 "
        >
          <TypeAnimation sequence={['Projects',1000 , 'Works',1000 , 'Creations...' ,1000]} repeat={Infinity} />
        </h1>

        <ProjectProps
          title="1 . Crypto times: "
          details=" Crypto Times is a website that provides news and information about the cryptocurrency market. It is a static website, meaning that it is not
        interactive and does not require a database. The website is built using
        HTML, CSS, and JavaScript, and it uses CryptoCompare's API to fetch news
        articles.Crypto Times is a great resource for anyone who wants to stay
        up-to-date on the latest news about the cryptocurrency market. It is a
        simple and easy-to-use website that provides a wealth of information."
          img={Cryptotimes}
          role_des="Frontend Developer"
          // link="https://crypto-times-daily.web.app/"
        />
        <a
        href="https://crypto-times-daily.web.app/"
        className="text-[1.5em] text-blue-600 underline flex justify-center w-full mb-4 "
        target="_blank"
      >
        View website
      </a>
        <ProjectProps
          title="2 . Flight Price alert system: "
          details=" Flight price alert system is a web application that allows users
        to track the price of flight tickets and be notified by email if the
        price of the ticket gets reduced. The system is powered by an
        API from a flight booking website, such as Kiwi , etc. This
        allows the system to fetch real-time price data for flights.
        The system is also designed to be user-friendly and easy to
        use."
          img={FlightAppPic}
          role_des="Frontend Developer"
        />
        <ProjectProps
          title="3 . Lingual a language learning app: "
          details="Lingual, an innovative language learning app developed using Flutter, offers users a comprehensive language learning experience. With features like interactive mock tests in their chosen language, seamless language translation, and a convenient writing pad for practicing skills, Lingual is designed to enhance language acquisition in a dynamic and engaging way."
          img={lingual}
          role_des="UI/UX designer"
        />
      </div>
    </div>
  );
};
