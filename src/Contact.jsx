import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full  bg-[#260b37] text-[#EBC7E6] flex justify-center items-center p-4'>
    <form  method="POST" action="https://getform.io/f/d81557d1-ad4c-46f4-bf26-e81d46f8a9fe" className='flex flex-col max-w-[700px] w-full mt-[160px]'>
        <div className='pb-8'>
            <p className='text-3xl inline border-b-4 font-bold border-purple-300'>Contact</p>
            <p className='py-7 text-xl'>// Submit the form and shoot me an email - siddiquisafiya69@gmail.com</p>
        </div>
        <input className='p-2 bg-purple-100 rounded-sm text-black outline-none' type="text"  placeholder='Name ' name='name'/>
        <input className='my-4 p-2 bg-purple-100 rounded-md text-black outline-none' type="email"  placeholder='Email ' name='email'/>
        <textarea  className ="bg-purple-100 p-2  outline-none  text-black rounded-sm" name="message" placeholder='Message'  rows="10"></textarea>
        <button className='text-[#EBC7E6] px-4 py-3 my-5 w-[200px] flex justify-center items-center hover:bg-[#664E88] hover:border-[#664E88] duration-200 rounded-sm border-2 ml-[120px] md:ml-[240px]'>Let's Collaborate</button>
    </form>
    </div>
  )
}

export default Contact
