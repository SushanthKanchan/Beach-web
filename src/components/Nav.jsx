import React , {useState}from 'react';
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import {HiOutlineMenuAlt4} from "react-icons/hi" ;
import { FaFacebook,FaInstagram,FaPinterest,FaTwitter,FaYoutube} from "react-icons/fa"

export default function Nav() {
const [navbar,setNavbar]= useState (false); 
const handleNav =()=>{
    setNavbar(!navbar);
};



  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
            <h1>BEACHES.</h1>
        </div>
        <ul className='hidden md:flex'> {/* Add TailwindCSS classes here */}
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className="hidden md:flex "> {/* Optionally, adjust spacing between icons */}
            <BiSearch className='mr-4' size={20}/>
            <BsPerson  size={20}/>
        </div>



        <div onClick={handleNav} className='md:hidden'> 
        {navbar ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        
        </div>

        {/* Menu DropDown */}

        <div onClick={handleNav} className={navbar ? 'absolute  text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul >
            <h1>BEACHES.</h1>
            <li className='border-b'>Book</li>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <div>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6' >
                <FaFacebook className= "icon" />
                <FaTwitter className= "icon"/>
                <FaInstagram className= "icon"/>
                <FaYoutube className= "icon"/>
                <FaPinterest className= "icon"/>
            </div>
        </ul>
        </div>
    </div>
  );
}