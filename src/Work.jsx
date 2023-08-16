import React from 'react'
import img1 from './Image/img1.png'
import food from './Image/food.png'
import makeup2 from './Image/makeup2.png'
import metaverse from './Image/metaverse.png'
import crypto from './Image/crypto.png'
const Work = () => {
  return (
    <div  name='work' className='w-full h-full bg-[#260b37] text-[#EBC7E6]  '>
   <div className='max-w-[1000px] flex flex-col justify-center w-full h-full mx-auto p-4'>
    <div className='pb-8 mt-[160px]' >
        <p className='text-3xl font-bold inline border-b-4 border-purple-200'>Work</p>
        <p className='py-8 text-2xl text-[#EBC7E6]'>// Checkout some recent work</p>
    </div>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>

        <div  style={{backgroundImage:`url(${img1})`}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>
         {/* work*/}

            <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
            <span className='text-2xl text-purple-100 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md'>
  React Js Application
            </span>
            
           <div className='pt-8 text-center'>

          <a href="https://onlinedropservice.netlify.app/">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                      Demo
                    </button>
                </a>

                <a href="https://github.com/safiya-siddiqui/onlinedelivery">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                        Code
                    </button>
                </a>
            </div>
        </div>
    </div>


    <div  style={{backgroundImage:`url(${food})`}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>
            <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
            <span className='text-2xl text-purple-200 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md ml-[10px]'>
 food website
            </span>
            
           <div className='pt-8 text-center'>

          <a href="https://onlineorderingfoodwebsite.netlify.app">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                      Demo
                    </button>
                </a>

                <a href="https://github.com/safiya-siddiqui/oasis-infobyte-Task">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                        Code
                    </button>
                </a>
            </div>
        </div>
    </div>



    <div  style={{backgroundImage:`url(${makeup2})`}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>

     {/*first work*/}
            <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
            <span className='text-2xl text-purple-200 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md ml-[40px]'>
 Makeup website
            </span>
            
           <div className='pt-8 text-center'>

          <a href="https://makeupsites.netlify.app">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                      Demo
                    </button>
                </a>

                <a href="https://github.com/safiya-siddiqui/food-website-">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                        Code
                    </button>
                </a>
            </div>
        </div>
    </div>


<div  style={{backgroundImage:`url(${crypto})`}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>

     {/*first work*/}
            <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
            <span className='text-2xl text-purple-200 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md ml-[40px]'>
Crypto website
            </span>
            
           <div className='pt-8 text-center'>

          <a href="https://cryptsite.netlify.app/">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                      Demo
                    </button>
                </a>

                <a href="https://github.com/safiya-siddiqui/food-website-">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                        Code
                    </button>
                </a>
            </div>
        </div>
    </div>



<div  style={{backgroundImage:`url(${metaverse})`}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>

     {/*first work*/}
            <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
            <span className='text-2xl text-purple-200 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md ml-[40px]'>
 Metaverse website
            </span>
            
           <div className='pt-8 text-center'>

          <a href="https://metaversevirtual.netlify.app/">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                      Demo
                    </button>
                </a>

                <a href="https://github.com/safiya-siddiqui/food-website-">
                    <button className='text-center rounded-lg px-4 py3 m-2 bg-purple-200 text-lg font-bold text-purple-900'>
                        Code
                    </button>
                </a>
            </div>
        </div>
    </div>







   
    {/*hover effect*/}

          
 {/*second work*/}

    
   </div>
    </div>
    </div>
  )
}

export default Work
