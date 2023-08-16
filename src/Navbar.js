import React, { useState } from 'react'
import { FaBars  } from "react-icons/fa";
import {FaTimes}  from "react-icons/fa";
import { FaLinkedin , FaGithub  ,FaInstagram ,FaMailBulk , FaLink } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
  const[state ,setState]=useState(false);
  const handleclick=()=>{
    setState(!state)
  }
  return (
    <div className='w-full h-[90px]  flex justify-between bg-[#260b37] items-center px-5 text-[#EBC7E6]'>
   
   {/*menu*/}

   <div className='text-[#C689C6] text-2xl font-bold first-letter:text-4xl'>WELCOME BUDDY!🖐️</div>
   
    <ul className='hidden md:flex'>
       
        <li className=' text-2xl '> <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
        <li className=' text-2xl'><Link  to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
        <li className=' text-2xl'><Link  to="experience"  smooth={true}  duration={500} >
         Skills
        </Link></li>
       
        <li className=' text-2xl'><Link  to="work"  smooth={true}  duration={500} >
         Work
        </Link></li>
        <li className=' text-2xl'><Link  to="contact"  smooth={true}  duration={500} >
        Contact
        </Link></li>
    </ul>
  

    {/*hamburger*/}

    <div  onClick={handleclick} className='md:hidden z-10'>
    {!state? <FaBars/> : <FaTimes/> }</div>



 {/*Mobile menue*/}


  <ul className={!state ? 'hidden' :'absolute top-0 left-0 w-full h-screen flex flex-col  bg-[#260b37] justify-center items-center '}>
        <li className='py-6 text-2xl'><Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
        <li className='py-6 text-2xl'><Link  to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
        <li className='py-6 text-2xl'><Link  to="experience"  smooth={true}  duration={500} >
         Skills
        </Link></li>
        <li className='py-6 text-2xl'><Link  to="work"  smooth={true}  duration={500} >
         Work
        </Link></li>
        <li className='py-6 text-2xl'><Link  to="contact"  smooth={true}  duration={500} >
        Contact
        </Link></li>
       
    </ul>



  {/*Social icons*/}
  <div className='hidden lg:flex fixed flex-col top-[38%] left-0 '>
<ul>

 {/*Linkedin*/}
  <li className=" flex flex-col justify-between items-center w-[160px] h-[50px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C689C6] ">
  <a className=" flex  justify-between items-center text-white w-full " href="https://www.linkedin.com/in/safiya-siddiqui-566009214/">Linkdin<FaLinkedin size={30}/></a></li>

  <li className="flex flex-col justify-between items-center w-[160px] h-[50px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C689C6] ">
  <a className='flex justify-between items-center w-full text-white' href="https://github.com/safiya-siddiqui">Github<FaGithub size={30}/></a></li>

  <li className='flex flex-col justify-between items-center w-[160px] h-[50px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C689C6]'>
  <a  className=" flex justify-between items-center w-full text-white" href="">Instagram<FaInstagram size={30}/></a></li>


  <li className='flex flex-col justify-between items-center w-[160px] h-[50px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C689C6]'>
  <a  className=" flex justify-between items-center w-full text-white" href=""><Link  to="contact" spy={true} smooth={true}  duration={500}>
       Email
        </Link><FaMailBulk size={30}/></a></li>

  
  <li className='flex flex-col justify-between items-center w-[160px] h-[50px] py-2 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#C689C6]'>
  <a  className=" flex justify-between items-center w-full text-white" href="./Image/safiya.pdf" download>Resume<FaLink size={30}/></a></li>



 
</ul>
</div>
    </div>
  ) 
}

export default Navbar 
