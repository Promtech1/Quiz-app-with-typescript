import React from 'react'
import './Level.css'
import { Link } from 'react-router-dom';

const Level = () => {
  return (
    <div className="level-container">
        <div className="level-wrapper">
            <div className="level-heading">
                <button className="level-up">Level Up</button>
            </div>

            <div className="level-main">
                <div className="level easy">
                    <h3>Easy</h3>
                    <Link to="/play/easy">
                        <button>Start Quiz</button>
                    </Link>
                </div>
                

                <div className="level normal">
                    <h3>Normal</h3>
                    <Link to="/play/medium">
                        <button>Start Quiz</button>
                    </Link>
                </div>
                
                <div className="level hard">
                    <h3>Hard</h3>
                    <Link to="/play/hard">
                        <button>Start Quiz</button>
                    </Link>
                </div>
            </div>

            <button className="about">About</button>
        </div>
    </div>
  )
}

export default Level