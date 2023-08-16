import React from 'react'


import hooks from './Image/hooks.png'
import map from './Image/map.png'
import Hooks2 from './Image/Hooks2.png'
import Hooks3 from './Image/Hooks3.png'
const Blog  = () => {
    return (
        <div  name='work' className='w-full h-full bg-[#260b37] text-[#EBC7E6]  '>
       <div className='max-w-[1000px] flex flex-col justify-center w-full h-full mx-auto p-4'>
        <div className='pb-8 mt-[160px]' >
            <p className='text-3xl font-bold inline border-b-4 border-purple-200'>Blogs</p>
            <p className='py-8 text-2xl text-[#EBC7E6]'>// Read my Blogs</p>
        </div>
    
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
    
            <div  style={{backgroundImage:`url(${hooks})`}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>
             {/* work*/}
    
                <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
                <span className='text-2xl text-purple-100 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md md:ml-[20px]'>
                useEffect Hooks in React-js 🚀
                </span>
                
               <div className='pt-8 text-center'>
    
              <a href="https://thetechwiz.hashnode.dev/useeffect-hooks-in-react-js">
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
    

        <div  style={{backgroundImage:`url(${Hooks2})`}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>
             {/* work*/}
    
                <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
                <span className='text-2xl text-purple-100 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md md:ml-[20px]'>
                use State Hooks in React🤖
                </span>
                
               <div className='pt-8 text-center'>
    
              <a href="https://thetechwiz.hashnode.dev/use-state-hooks-in-react">
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
    
    
        <div  style={{backgroundImage:`url(${map }) `}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>
             {/* work*/}
    
                <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
                <span className='text-2xl text-purple-100 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md md:ml-[20px]'>
                useEffect Hooks in React-js 🚀
                </span>
                
               <div className='pt-8 text-center'>
    
              <a href="https://thetechwiz.hashnode.dev/map-filter-and-reduce-function">
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


        <div  style={{backgroundImage:`url(${Hooks3 }) `}} className='shadow-lg shadow-[#5f456f] group container rounded-md flex justify-center items-center mx-auto content-div w-[300px]'>
             {/* work*/}
    
                <div className='opacity-0 group-hover:opacity-100 group-hover:bg-purple-950 group-hover:w-[300px] h-[250px] '>
                <span className='text-2xl text-purple-100 tracking-wider font-bold mt-[60px] flex justify-center items-center rounded-md md:ml-[20px]'>
                Controlled form vs uncontrolled form in React.js 📜🖊️
                </span>
                
               <div className='pt-8 text-center'>
    
              <a href="https://thetechwiz.hashnode.dev/controlled-form-vs-uncontrolled-form-in-reactjs">
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
    
    
       
    
       
    
   
     
    
    
    
    
       
        {/*hover effect*/}
    
              
     {/*second work*/}
    
        
       </div>
        </div>
        </div>
      )
}

export default Blog 
