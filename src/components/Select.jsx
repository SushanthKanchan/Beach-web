import React from 'react'
import SelectCard from './SelectCard'
import beach1 from "../assets/beach11.avif"
import beach2 from "../assets/beach12.avif"
import beach3 from "../assets/beach3.avif"
import beach4 from "../assets/beach4.jpg"
import beach5 from "../assets/img4.jpg"
import beach6 from "../assets/img5.jpg"

export default function Select() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      
      <SelectCard bg={beach1} text="bora bora" />
      <SelectCard bg={beach2} text="Hawaii" />
      <SelectCard bg={beach3} text="lakshadweep"  />
      <SelectCard bg={beach4} text="Brazil" />
      <SelectCard bg={beach5} text="Canada" />
      <SelectCard bg={beach6} text="Philippines" />
    </div>
  )
}
