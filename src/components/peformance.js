import React from 'react'
import Navbar from './navbar'
import { Rating } from '@mui/material';
import './performance.css';
import HoverRating from './stars'
import RadioGroupRating from './viberating'
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from '@mui/material/TextField';


function Performance() {
  
  return (
    <div>
        <Navbar showbutton = {true} buttontxt = 'Back to Home' current = 'Peformance' className = 'bg-[#f4e9e3] px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0'></Navbar>
        <div className = 'spacing'></div>
        <h1 className = 'tracking-wide text-center font-sans font-medium text-4xl'> 🌟 Tracking Student <mark className = 'text-black bg-[#e1ebed]'> &nbsp; Performance &nbsp;</mark> 🌟</h1>

<wrapper className = 'container'>
<div class = 'left'>
 <div class="grid gap-2 grid-cols-2 grid-rows-3">
 <div>  
       <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Enter Student Name:</h2>
        <form className=' w-max mt-2 flex '>
        <input type="text" className=' w-max bg-[#eff2f7] ml-20 shadow-inner rounded-l p-2 flex-1' id='name'  placeholder='First Name, Last Name' />
      </form>
      </div> 

      <div>  
       <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Enter Student/Guardian Email:</h2>
        <form className='w-max mt-2 flex '>
        <input type="text" className=' w-max bg-[#eff2f7] ml-20 shadow-inner rounded-l p-2 flex-1' id='name'  placeholder='example@gmail.com' />
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
   <h2 className = 'tracking-wide text-xl mt-10 ml-20'> Overall Attitude To Learning: </h2>
   <RadioGroupRating></RadioGroupRating>
   </div>

   <div className = 'mt-10 ml-20'> 
   <FormControlLabel control={<Checkbox size="large" defaultChecked />} label="Homework Completed?" />
   </div>

    </div>
    </div>
    <div className = 'right'>
      <div className = 'mt-10 textbox'>
    <TextField
          id="outlined-multiline-flexible"
          label="Short Student Feedback"
          placeholder="Enter a few sentences of student's learning progres. Be sure to mention topics covered, assigned homework,
          and any key feedback for parents/guardians."
          multiline
          fullWidth 
          minRows={10}
        />
        </div>
    <button className = 'center p-4 font-normal text-bg rounded-full hover:bg-[#493b49] text-white bg-[#735972] mt-16 content-center'> &nbsp; Click To Submit Feedback &nbsp;  </button>
    </div>

    </wrapper>
    </div>
  )
}

export default Performance