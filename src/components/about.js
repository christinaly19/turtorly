import './about.css'
import React from 'react'
import Navbar from './navbar'
function About() {
  return (
    <div>
        <Navbar buttontxt = "Performance"showbutton = {true} aboutbold = {true} current = 'Home' className = 'bg-[#f4e9e3] px-2 sm:px-4 lg:px-6 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0'></Navbar>
        <br></br>
        <h1 className = 'text-[#735972] tracking-wide ml-20 font-bold text-6xl mt-32'> What is <mark className = 'bg-transparent text-[#DB8590]'> Tutor.ly? </mark>  </h1>
        <p className = 'mt-4 ml-20 text-lg mr-20'> Tutor.ly's mission is to modernize the concept of physical 'take-home' agendas between tutors and their students to better facilitate 
        progress reports and updates between tutors and students/parents. With Tutor.ly's unique performance page, tutors can easily grade students on learning by 
        scoring students on key areas such as productivity, focus, understanding, homework completiton, and more. Tutors can then easily download the page, and send it to parent emails 
        with only a few mouse clicks — freeing up more time for learning and teaching. </p>
    </div>
  )
}

export default About