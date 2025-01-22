"use client";

import React, { useEffect } from "react";
import Hero from "@/components/Hero"; 
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true, // Corrected spelling
      anchorPlacement: "bottom-bottom", // Added a default value for anchorPlacement
      offset: 160,
    });
    
    AOS.refresh();
  
  }, []); // Added dependency array to avoid infinite re-renders

  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}

export default Home;