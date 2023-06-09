import React, { useState } from "react";
import { FaBars, FaTimes ,FaGithub,FaLinkedin,FaInstagram,FaFacebook} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo1.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] items-center flex justify-between bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }}></img>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
       {!nav ?  <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-[#0a192f] "
        }
      >
        <li className="py-6 text-2xl">Work</li>
        <li className="py-6 text-2xl">Contact</li>
        <li className="py-6 text-2xl">Home</li>
        <li className="py-6 text-2xl">About</li>
        <li className="py-6 text-2xl">Skills</li>
      </ul>

{/* social media links */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0">
        <ul>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    linkedin  <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    github  <FaGithub size={30}/>
                </a>
            </li>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#65c2b0]"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    Email  <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="flex w-[165px] h-[40px] justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"> 
                <a className="flex justify-between items-center w-full text-gray-300" href="/">
                    Resume  <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
