import React from 'react';
import navlogo from '../assets/code.png';
import { Download } from 'lucide-react';


const Navbar = () => {
    return (
      <div className="navbar  w-11/12 mx-auto pt-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>About Me</a>
          
        </li>
        <li><a>Projects</a></li>
      </ul>
    </div>
    <div className='flex items-center justify-between'>
        <img className="h-12 w-12 invert brightness-50" src={navlogo} alt="" />
        <a className="btn btn-ghost text-xl font-bold">HASIB</a>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a href="#about">About Me</a>
    
      </li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='/CV/Hasib-Al-Mamun-Cv.pdf'
    target="_blank"
  rel="noopener noreferrer" className="btn border-black hover:bg-orange-700 hover:scale-105 px-5 bg-orange-500 text-white">    <Download />CV</a>
  </div>
</div>
    );
};

export default Navbar;