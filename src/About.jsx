import React from 'react'

const About = () => {
  return (
    <div  name='about' className='w-full h-screen bg-[#260b37] text-[#EBC7E6]'>
    <div className="flex flex-col justify-center items-center  w-full h-full ">
    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>

    <div className='sm:text-right pb-8 pl-4 '>
    <p className='text-4xl inline font-bold border-b-2 border-pink-200 '>About</p>
    </div>
    <div>
    </div>
    </div>
    <div className="max-w-[1000px] w-full grid sm:grid-cols-2  gap-8  px-4">
    <div className='sm:text-right text-3xl  font-bold'>
    <p> 🖐️ Hi I'm safiya siddiqui Nice to meet you</p>
    </div>
    <div>
        <p className='ml-[20px] text-[19px]'>I'm Frontend Developer . I can make responsive website using tailwind Css .
I am self taught developer and make websites and 
I have a 3 month handson experience to make a website and
I share my learnings by writing blogs, sharing posts on social media.
Other than this, I love Art and craft 🍂.</p>
    </div>
    </div>

    </div>
      
    </div>
  )
}

export default About
