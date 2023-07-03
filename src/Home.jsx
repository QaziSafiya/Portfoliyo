import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='bg-[#260b37] w-full h-screen  '>
      

      {/*container*/}

      <div className='max-w-[1000px]  mx-auto flex flex-col justify-center px-8  h-full '>
<p className='text-3xl  text-[#EBC7E6] mt-[60px]  '>Hi! I am</p>
<h1 className='sm:text-5xl  text-3xl font-bold  text-[#d698cd] py-2 mt-[10px]'>Safiya Siddiqui</h1>
<h2 className='sm:text-5xl  text-3xl font-bold  text-[#EBC7E6]  mt-[10px]' >I'm a frontend developer</h2>
<p className='text-[#EBC7E6] py-6 max-w-[700px]'>Currently I am focusing on building responsive full stack web Applications.</p>

<div className='text-[#e19fd8] '>
  <button className=' bg--[w-[170px] h-[50px] text-[#EBC7E6] border-2 group  flex py-6 px-7 my-2 items-center hover:bg-[#664E88] hover:border-[#664E88] duration-200 rounded-md'> <Link  to="about" spy={true} smooth={true}  duration={500}>
        View profile
        </Link>
  <span className='group-hover:rotate-90 duration-300'><FiArrowRight className='ml-1'/></span></button>
</div> 

      </div>
     
    
    </div>
  )
}

export default Home
