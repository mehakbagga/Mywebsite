import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Hi there, my name is Mehakpreet Kaur and you can call me Mehak. After finished my journey at Langara College, I am now seeking an entry-level role in the tech industry, from QA Engineer, DevOps Engineer, Front-End Web Developer to Full-Stack Web Developer. Prior to CST degree, I have competed a full-stack web development BootCamp program at CodeCore College. Exploring the digital world is my passion, and I want to deliver top-quality code by improving technical ability and gain experience on large-scale projects. There is so much to learn in every field and I'm ready for it!</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">

      </div>
    </div>
  )
}

export default AboutContent