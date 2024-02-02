import React from "react";
import Navbar from "./Navbar";
import Herocomp from "./Herocomp";

export default function Mainpg() {
  return (
    <section className="main overflow-y-hidden">
      <Navbar />
    <Herocomp/>
    </section>
  );
}
