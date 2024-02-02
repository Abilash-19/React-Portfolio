import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import { TypeAnimation } from 'react-type-animation';
import { Skillprops } from './Skillprops';
export const Skills = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    
    
    <div className="project">
      <Navbar/>
      
      <div className=" mt-16">
        <h1
          // data-aos="zoom-in"
          // data-aos-duration="1000"
          className="text-5xl font-bold text-[#18191A] mb-5 "
        >
          <TypeAnimation sequence={['Skills',1000 , 'Expertise',1000 , 'Technical Proficiencies',1000]} repeat={Infinity} />
        </h1>
        <div  className='flex  justify-between items-start flex-wrap'>

        <div className='mb-14'>
          <h5 className="text-2xl md:text-3xl mb-8 font-semibold text-gray-500 "> <TypeAnimation
          
          sequence={[
            'Programming languages',1000
          ]}
          cursor={false}
          speed={60}
          /> </h5>
          <Skillprops
          img = 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png'
          name = "HTML5"
          />
        
          <Skillprops
          img = 'https://cdn-icons-png.flaticon.com/512/732/732190.png'
          name = "CSS3"
          />
          <Skillprops
          img = 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
          name = "JavaScript"
          />
          <Skillprops
          img = 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png'
          name = "C / C++"
          />
          <Skillprops
          img = 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png'
          name = "Python"
          />
        
        </div>
        <div 
     className='mb-14'>
        <h5 className="text-3xl mb-8 font-semibold  text-gray-500  "><TypeAnimation
          
          sequence={[
            'Libraries and frameworks',1000
          ]}
          cursor={false}
          speed={60}
          /> </h5>

        <Skillprops
             img = "https://cdn-icons-png.flaticon.com/512/875/875209.png"
             name = "React JS"
          />
        <Skillprops
          img='https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp'
             name = "Tailwind CSS"
          />
        <Skillprops
        img='https://as1.ftcdn.net/v2/jpg/05/83/61/64/1000_F_583616420_cyNZmksm5h2x5vgcKGmRjnivfmrgnSTb.jpg'
             name = "Node JS"
          />
        </div>
        <div  className='mb-14'>
        <h5 className="text-3xl mb-8 font-semibold  text-gray-500  "><TypeAnimation
          
          sequence={[
            'Tools & others',1000
          ]}
          cursor={false}
          
          /></h5>

          <Skillprops
          img = 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
          name = "Figma"
          />
          <Skillprops
          img = 'https://img.icons8.com/?size=1x&id=iWw83PVcBpLw&format=png'
          name = "Canva"
          />
        </div>

        </div>
        
          
        </div>
    </div>
  )
}
