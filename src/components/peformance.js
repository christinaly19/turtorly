import React from 'react'
import Navbar from './navbar'
import { Rating } from '@mui/material';
import './performance.css';
import HoverRating from './stars'
import RadioGroupRating from './viberating'
function Performance() {
  
  return (
    <div>
        <Navbar buttontxt = 'Back to Home' current = 'Peformance' className = 'bg-[#f4e9e3] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0'></Navbar>
        <div className = 'spacing'></div>
        <h1 className = 'tracking-wide text-center font-sans font-medium text-4xl'> 🌟 Tracking Student <mark className = 'text-black bg-[#e1ebed]'> &nbsp; Performance &nbsp;</mark> 🌟</h1>


 <div class="grid gap-2 grid-cols-2 grid-rows-3">
 <div>  
       <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Enter Student Name:</h2>
        <form className=' w-1/2 mt-2 flex '>
        <input type="text" className=' w-12 bg-[#eff2f7] ml-20 shadow-inner rounded-l p-2 flex-1' id='name'  placeholder='First Name, Last Name' />
      </form>
      </div> 

      <div>  
       <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Enter Student/Guardian Email:</h2>
        <form className=' w-1/2 mt-2 flex '>
        <input type="text" className=' w-12 bg-[#eff2f7] ml-20 shadow-inner rounded-l p-2 flex-1' id='name'  placeholder='example@gmail.com' />
      </form>
      </div> 

  <div>
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> In-Class Participation:</h2>
   <HoverRating className = 'mt-5 ml-20' size = 'large'></HoverRating>
   </div>

   <div>
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Productivity & Focus :</h2>
   <HoverRating className = 'mt-5 ml-20' size = 'large'></HoverRating>
   </div>

   <div>
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Understanding of Material:</h2>
   <HoverRating className = 'mt-5 ml-5' size = 'large'></HoverRating>
   </div>


   <div>
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Organization and Prepardness:</h2>
   <HoverRating className = 'mt-5 ml-5' size = 'large'></HoverRating>
   </div>

   <div>
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Overall Attitude & Vibes: </h2>
   <RadioGroupRating></RadioGroupRating>
   </div>

   <div> 
    <button className = 'p-4 font-normal text-lg rounded-full hover:bg-[#493b49] text-white bg-[#735972] mt-16 ml-20'> &nbsp; Submit Feedback &nbsp;  </button>
   </div>

    </div>
    </div>
  )
}

export default Performance