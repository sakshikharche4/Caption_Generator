import React from 'react'
import { useNavigate } from 'react-router';
import Typewriter from "typewriter-effect";
import Card from './Card';


const Hero = () => {
  return (
    <div className='pt-40 bg-slate-200 w-screen h-screen mt-4 '>
     <div className='flex flex-col items-center justify-center space-x-2 '>
         <div className='flex '>
            <h1 className=" text-7xl font-bold">
  Generate Perfect Caption for </h1>
         </div>
  <div className='mt-10 text-6xl font-bold bg-linear-to-r from-purple-700 to-indigo-700 text-transparent bg-clip-text'> 
    <Typewriter 
  options={{
    strings: [
        "Your Pictures",
      "Every Moment✨",
      "That Matches Your Mood",
      
    ],
    
    autoStart: true,
    loop: true,
     delay: 40,        
      deleteSpeed: 10  
  }}
/>
  </div>
  <div className='pt-25'>
        <button onClick={()=>{
          useNavigate(<Card/>)
        }} className='cursor-pointer px-20 py-4 rounded-xl bg-linear-to-r from-purple-700 to-indigo-700 text-white text-2xl font-semibold tracking-wide '>Generate Caption</button>
     </div>
     </div>

   
    </div>
  )
}

export default Hero
