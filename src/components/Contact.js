import React from "react";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {
  useEffect(() => {
    Aos.init();
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ivudp9s",
        "template_8ulo41a",
        form.current,
        "HIGEAl429j2RUq0j3"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Form Submitted successfully");
  };

  return (
    <div className="project">
      <Navbar />
      <div className=" mt-16 md:mb-10">
        <h1
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          className="text-5xl font-bold text-[#18191A] mb-6 md:mb-10 "
        >
          <TypeAnimation sequence={['Get in Touch',1000 , 'Reach Out',1000 , 'Contact Me',1000 , 'Say Hi...',1000]} repeat={Infinity}/>
        </h1>
        <p className=" font-normal text-xl md:text-[1.5rem] text-gray-700 ">
          While you explore my portfolio, remember that theres more to discover
          beyond what you see here. Get in touch to learn about my broader skill
          set and expertise.
        </p>
        <form
          className="mt-8 flex flex-col justify-between items-start gap-5 w-full h-full "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col w-full ">
            <label className=" text-xl">Name </label>
            <input
              type="text"
              placeholder=" Enter your name"
              className="rounded-sm p-2 text-lg w-full outline-none bg-transparent border-2 border-[#18191A]"
              name="user_name"
              required
            />
          </div>
          <div className="flex flex-col w-full ">
            <label className=" text-xl">E-mail id</label>
            <input
              type="email"
              placeholder=" Enter your 
              mail id"
              className="rounded-sm p-2 text-lg w-full  bg-transparent  border-2 border-[#18191A] "
              name="user_email"
              required
            />
          </div>

          <div className="flex flex-col w-full h-full">
            <label className=" text-xl">Message</label>
            <textarea
              className="h-[150px] w-full resize-none rounded-sm p-2 text-lg outline-none border-2 bg-transparent border-[#18191A]"
              placeholder="Enter your message"
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-6 bg-[#18191A]  text-white px-6 py-2  text-xl hover:bg-slate-800"
          >
            Submit
          </button>
          <ToastContainer autoClose={800} />
        </form>
      </div>
    </div>
  );
}
