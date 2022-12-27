import React from 'react'
import "./homepage.css"
import phone from '../assets/phone.png'
import phone2 from '../assets/phone2.png'

function Homepage() {
  return (
    <div>
   <div class="split left bg-[#F4E9E3]">
  <div class="centered ">
    
    <h2 className = 'text-left  text-6xl font-bold'>Let's Study <mark className = 'bg-transparent text-[#DB8590]'> Together. </mark>📝 </h2>
    <div className = 'space'></div>
    <h1 className = 'text-left font-normal font-sans text-2xl italic'> Your place for <mark className = 'bg-transparent font-semibold text-[#735972]'>learning</mark> and <mark className = 'bg-transparent font-semibold text-[#735972]'>teaching </mark>  — all in one. </h1>
    <br></br>
    <br></br>
    <p className = 'text-left text-lg font-light'> Tutor.ly connects students with their tutors <mark className = 'bg-transparent underline'> seamlessly</mark> and provides a platform for organization so that 
    assigning homework, upadting parents, and keeping track of performance has never been easier. </p>
    <br></br>
    <button className = 'text-white bg-[#735972] hover:bg-[#473946] focus:ring-2 focus:outline-none focus:ring-gray-400 font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' > Get Started </button>
  </div>
</div>

<div class="split right bg-[#E6F0F1]">
  <div class="centered">
  <wrapper>
    <div className = 'phone1' >
    <img alt = 'phone' src={phone}/> 
    </div>

    <div className = 'phone2' >
    <img alt = 'phone' src={phone2}/> 
    </div>
    </wrapper>
  </div>
</div>
    </div>
  )
}

export default Homepage