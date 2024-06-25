import React from 'react'
import{RiCustomerService2Fill} from "react-icons/ri"
import {MdOutlineTravelExplore } from "react-icons/md"

export default function Search() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2>LUXURY INCLUDED VACTIONS FOR TWO PEOPLE</h2>
                < p className='py-4 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Inventore dolorum repudiandae labore accusantium totam hic est, 
                     molestias harum accusamus exercitationem voluptate, beatae, ipsum 
                     perspiciatis neque error repellat similique dolor! Nulla fuga odio ducimus 
                     a dolor autem doloribus mollitia id 
                    ab laudantium odit saepe labore optio at commodi, natus aliquid rerum?
                    </p>
            </div>
             <div className='grid  sm:grid-cols-2 gap-8 py-4' >
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><RiCustomerService2Fill size={50} /></button>
                    
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW.</p>
                </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button><MdOutlineTravelExplore size={50} /></button>
                <div>
                    <h3 className='py-2'>LEADING SERVICE</h3>
                    <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW.</p>
                </div>
                </div> 
                    </div>
                </div>     

                
                <div>
                        <div className='border text-center '>
                            <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                            <p className='py-4'>12 HOURS LEFT</p>
                            <p className='bg-gray-800 text-gray-200 py-2'> BOOK NOW AND SAFE</p>
                        </div>
                        <form  className='w-full'>
                            <div className='flex flex-col my-2'>
                                <label >Destination</label>
                                <select className='border rounded-md p-2' >
                                    <option value="">Hawaii</option>
                                    <option value="">Italy</option>
                                    <option value="">India</option>
                                    <option value="">Portugal</option>
                                </select>
                            </div>
                            <div className='flex flex-col my-4'>
                                <label >Check-In</label>
                                <input type="date" className='border rounded-md p-2'/>
                            </div>
                            <div className='flex flex-col my-2'>
                                <label >Check-Out</label>
                                <input type="date"className='border rounded-md p-2' />
                            </div>
                            <div>
                                <button className='w-full my-4'>Rates & Availabilities</button>
                            </div>
                        </form>
                 </div>
        </div>

  )
}
