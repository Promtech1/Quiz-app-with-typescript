import React from 'react'
import './HomeQuiz.css'
import trophy from "../../images/trophy.png"
import { Link } from 'react-router-dom'

const HomeQuiz = () => {
  return (
    <div className="home-container">
      <div className="home-container-wrapper">
        <div className="logo">
          <h1>QUIZ</h1>
          <img src={trophy} alt="" />
        </div>

        <div className="lets-play">
          <h1>Let's Play</h1>
          <span>Play now and win</span>
        </div>

        <div className="play-button">
          <Link to='/level'><button className='play'>Play Now</button></Link>
          
          <Link to='/about'><button className="about">About</button></Link>
          
        </div>
      </div>
    </div>
  )
}

export default HomeQuiz