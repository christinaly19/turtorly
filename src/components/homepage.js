import React from 'react'
import "./homepage.css"

function Homepage() {
  return (
    <div>
   <div class="split left bg-[#F4E9E3]">
  <div class="centered ">
    <h2 className = 'text-3xl font-bold underline'>Left</h2>
    <p>Some text.</p>
  </div>
</div>

<div class="split right bg-[#E6F0F1]">
  <div class="centered">
    <h2 className = 'text-3xl font-bold underline'>Right</h2>
    <p>Some text here too.</p>
  </div>
</div>
    </div>
  )
}

export default Homepage