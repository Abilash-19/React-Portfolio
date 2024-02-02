import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpg from "./components/Mainpg";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import Contact from "./components/Contact";


export default function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Mainpg/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/skills" element={<Skills/>} ></Route>
        <Route path="/project" element={<Project/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
      </Routes>
    </BrowserRouter>

   
    </>
    
    
  );
}
