import React, { useEffect, useState } from "react";
import heroImage from "../assets/Hero Img.jpg"; 
import { Contact, Phone } from "lucide-react";

const texts = [
  "Font-End Developer",
  "Web Developer",
  "Problem Solver",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
    } 
    else if (isDeleting && charIndex > 0) {
    
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } 
    else if (!isDeleting && charIndex === currentText.length) {
      
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } 
    else if (isDeleting && charIndex === 0) {
      // next text
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section className="min-h-screen flex items-center w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-4xl font-bold text-gray-100 mb-4">
            Hi, I'm{" "}
            <span className="text-orange-500">Hasib Al Mamun</span>
          </h1>

          {/* TYPING TEXT */}
          <p className="text-2xl text-gray-100 mb-4 min-h-[36px] font-semibold">
            {displayText}
            <span className="ml-1 animate-pulse">|</span>
          </p>

          <p className="text-gray-600 mb-6">
            I build modern, responsive web applications and enjoy solving
            real-world problems with clean and efficient code.
          </p>

         <a
  href="#contact"
  className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold
  hover:bg-orange-600 transition-all duration-300 hover:scale-105"
>
  <Phone size={18} />
  <span>Contact Me</span>
</a>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hasib Al Mamun"
            className="w-50 h-50 md:w-80 md:h-80 object-cover border-3 border-orange-500 rounded-full shadow-lg
            transition-transform duration-500 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
