import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"



export default function Destinations() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center '>
      <h1>All-Inclusive Resorts</h1>
      <p className='py-3 '>On the Caribbean's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img src={img2} alt="/" className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2'/>
        <img src={img3} alt="/" className='w-full h-full object-cover'/>
        <img src={img1} alt="/" className='w-full h-full object-cover'/>
        <img src={img4} alt="/" className='w-full h-full object-cover'/>
        <img src={img5} alt="/" className='w-full h-full object-cover'/>
        
      </div>
    </div>
  )
}
