import React from 'react'
import Navbar from './navbar'
import { Rating } from '@mui/material';
import './performance.css';
import HoverRating from './stars'
function Performance() {
  
  return (
    <div>
        <Navbar buttontxt = 'Back to Home' current = 'Peformance' className = 'bg-[#f4e9e3] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0'></Navbar>
        <div className = 'spacing'></div>
        <h1 className = 'tracking-wide text-center font-sans font-medium text-4xl'> 🌟 Tracking Student <mark className = 'text-[#473946] bg-[#e8dce2]'> &nbsp; Performance &nbsp;</mark> 🌟</h1>
        <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Enter Student Name:</h2>
        <form className=' w-1/3 mt-2 flex '>
        <input type="text" className=' w-12 bg-[#eff2f7] ml-20 shadow-inner rounded-l p-2 flex-1' id='name'  placeholder='Enter Your Student`s Name here' />
      </form>
        <h2 className = 'tracking-wide text-xl mt-10 ml-20'> In-Class Participation:</h2>
   <HoverRating className = 'mt-5 ml-20' size = 'large'></HoverRating>
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Productivity:</h2>
   <HoverRating className = 'mt-5 ml-20' size = 'large'></HoverRating>
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Understanding of Material:</h2>
   <HoverRating className = 'mt-5 ml-20' size = 'large'></HoverRating>
    </div>
  )
}

export default Performance