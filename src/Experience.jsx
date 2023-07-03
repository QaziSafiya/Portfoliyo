import React from 'react'
import html from './Image/html.png'
import css from './Image/css.png'
import javascript from './Image/javascript.png'
import react from './Image/react.png'
import bootstrap from './Image/bootstrap.png'
import node from './Image/node.png'
import tailwind from './Image/tailwind.png'
import mongodb from './Image/mongodb.png'
import cplus from './Image/c++.png'
import github from './Image/github.png'

const Experience = () => {
  return (
    <div name='experience' className=' w-full h-full bg-[#260b37] text-[#ae83b9]'>
      <div className='max-w-[1000px] flex flex-col justify-center w-full h-full mx-auto p-4'>
        <div>
            <p className='text-3xl font-bold inline border-b-4 text-[#EBC7E6]'>Skills</p>
            <p className='py-5 text-2xl text-[#EBC7E6]'>//These are the  technologies I'have worked with</p>
        </div>
        <div  className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-5 py-5  text-center'>
            <div className='shadow-md shadow-[#381e49] hover:scale-110  my-4 duration-300'>
                <img  className='md:w-[100px] w-[90px] mx-auto ' src={html} alt="" />
                <p className='my-4 text-[#EBC7E6]'>Html</p>
            </div>

            <div className='shadow-md shadow-[#381e49] hover:scale-110  my-4 duration-300'>
                <img className='md:w-[100px] w-[90px] mx-auto' src={css} alt="" />
                <p  className='my-4 text-[#EBC7E6]'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#381e49] hover:scale-110 my-4  duration-300'>
                <img  className='md:w-[100px]  w-[90px] mx-auto' src={javascript} alt="" />
                <p  className='my-4 text-[#EBC7E6]'>Javascript</p>
            </div>
            <div className='shadow-md shadow-[#381e49] hover:scale-110  my-4 duration-300'>
                <img  className='md:w-[100px] w-[90px] mx-auto' src={react} alt="" />
                <p  className='my-4 text-[#EBC7E6]'>React-js</p>
            </div>

            <div className='shadow-md shadow-[#381e49] hover:scale-110 my-4  duration-300'>
                <img  className='md:w-[100px]  w-[90px] mx-auto' src= {bootstrap} alt="" />
                <p  className='my-4 text-[#EBC7E6]'>Bootstrap</p>
            </div>

           
            <div className='shadow-md shadow-[#381e49] hover:scale-110  my-4 duration-300'>
                <img  className='md:w-[100px] w-[90px] mx-auto' src={tailwind} alt="" />
                <p  className='my-4 text-[#EBC7E6]'>Tailwind css</p>
            </div>
            <div className='shadow-md shadow-[#381e49] hover:scale-110 my-4  duration-300'>
                <img  className='md:w-[100px]  w-[90px] mx-auto' src={github} alt="" />
                <p  className='my-4 text-[#EBC7E6]'>Git</p>
            </div>
           
            <div className='shadow-md shadow-[#381e49] hover:scale-110 my-4  duration-300'>
                <img  className='md:w-[100px]  w-[90px] mx-auto' src={cplus} alt="" />
                <p  className='my-4 text-[#EBC7E6]'>C++</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
