import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import gitlogo from '../assets/git.png'
import figma from '../assets/figma.png'
import npm from '../assets/npm.png'
import postman from '../assets/postman.png'

const logos = [postman, npm, figma, htmlLogo, cssLogo, jsLogo, reactLogo, tailwindLogo , gitlogo];


const LogoMarquee = () => {
  return (
    <div className="w-11/12 mx-auto overflow-hidden mt-20 py-6 relative">
        <div>
            <h1 className="text-4xl font-bold mb-2 text-center">My <span className="text-orange-500">Skills</span></h1>
            <p className=" mb-10 text-center text-md font-semibold text-gray-400">A showcase of my expertise in various technologies, from front-end to back-end and essential development tools.</p>
        </div>
      <div className="marquee flex gap-10">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="w-20 h-20 md:w-24 md:h-24 object-contain transition-transform duration-500 hover:scale-110"
          />
        ))}
      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        .marquee img {
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;