import React from "react";
import aboutimg from '../assets/aboutimg.png' 

const AboutMe = () => {
  return (
    <div id="about" className="w-11/12 mx-auto ">
      <h1 className="text-4xl font-bold mb-20 text-center">About <span className="text-orange-500">Me</span></h1>
        <div className="md:flex md:justify-baseline items-center md:gap-50">
            <div className="md:w-10/12 w-full mx-auto flex justify-center mb-10" >
              <img className="w-50 h-50 md:w-90 md:h-90 object-cover border-3 border-orange-500 rounded-full shadow-lg
            transition-transform duration-500 hover:scale-105" src={aboutimg} alt="aboutme" />
                
            </div>
            

            <div className="space-y-4">
              <h1 className="text-sm font-semibold text-white bg-gray-600 p-4 rounded-2xl mx-[50px] hover:border-1 border-orange-500 hover:scale-105 cursor-pointer "><span className="text-xl font-bold">My Journy</span><br/>Hi, I’m Hasib Al Mamun, a MERN stack developer with a deep passion for creating elegant, efficient, and user-friendly web applications. My journey into coding began with a fascination for transforming ideas into tangible digital experiences that can impact people globally.</h1>
              <div className="">
              <h1 className="text-sm font-semibold text-white bg-gray-600 p-4 rounded-2xl mx-[50px] hover:border-1 border-orange-500 hover:scale-105 cursor-pointer"><span className="text-xl font-bold">My Philosophy</span><br/>My philosophy is rooted in continuous learning and creative problem-solving. I thrive on challenges and believe the best solutions come from a blend of technical expertise, creative thinking, and a user-centric approach. I'm always exploring new technologies to broaden my skillset.</h1>
              </div>
              <h1 className="text-sm font-semibold text-white bg-gray-600 p-4 rounded-2xl mx-[50px] hover:border-1 border-orange-500 hover:scale-105 cursor-pointer"> <span className="text-xl font-bold">Aspirations & Interests</span><br/>Beyond coding, I'm an avid follower of tech trends, a lover of minimalist design, and enjoy contributing to open-source projects. My goal is to leverage my skills to build applications that are not only functional and robust but also provide a seamless and enjoyable experience. I'm excited to be a part of shaping the future of the web.</h1>
                          </div>
        </div>

    </div>
  );
};

export default AboutMe;
