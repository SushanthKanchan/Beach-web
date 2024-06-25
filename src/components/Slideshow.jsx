import React from 'react'
import { useState } from 'react';
import {BsArrowLeftSquareFill, BsArrowRightSquareFill} from  "react-icons/bs"

const sliderData =[
    {
    url:"https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg",
    },
{
    url:"https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg",
    
},
{
    url:"https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  
},
];

export default function Slideshow() {
  const [slide ,setSlide] = useState(0)
  const length =sliderData.length
  console.log(length);

const prevSlide =() =>{
  setSlide(slide === length -1 ? 0 : slide +1);
}
const nextSlide =() =>{
  setSlide(slide === 0? length -1 : slide -1)
}

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      <BsArrowLeftSquareFill onClick={prevSlide}
       className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
      <BsArrowRightSquareFill onClick={nextSlide} 
      className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
    {sliderData.map((item,index)=>{
     
      return(
      <div className={index === slide ?"opacity-100":" opacity-0"}>
          {index === slide && (<img className='w-full rounded-md' src={item.url} alt="/" />)}
            
      </div>
      )
    })}
  </div>
  )
}

