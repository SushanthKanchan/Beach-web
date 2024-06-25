import React from 'react'

const sliderData =[
    {
url:"https://plus.unsplash.com/premium_photo-1675670743878-a30bd5ea03e4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
{
    url:"https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg",
},
{
    url:"https://images.pexels.com/photos/2273642/pexels-photo-2273642.jpeg?auto=compress&cs=tinysrgb&w=600",
},
];

export default function Imag() {
   
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
      {sliderData.map((item,index)=>{
        <div>
            <h1>hello</h1>
            <img className='w-full rounded-md' src={item.url} alt="/" />
            {index}
        </div>
      })}
    </div>
  )
}
