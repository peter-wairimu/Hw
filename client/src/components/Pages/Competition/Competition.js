import React from 'react'
import { NavLink } from "react-router-dom";
import image from "../../../assets/sport.jpg";
import './competition.css'

const Competition = () => {
  return (
    <div className='competition'>
         <div className="major-advisor" style={{backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
            backgroundAttachment: "fixed",
            opacity: "0.7"
      }}>    
    </div>
    <div className="major-comp-content">
        <h1>Competition</h1>
        </div>
    <div className="major-competition-content">
        
        <div className="major-competition-text">
            <h2>Academic Competitions</h2>
            <p>These are contests that test students' knowledge in a particular subject, such as math, science, or history.</p>
        </div>
        <div className="major-competition-text">
            <h2>Art Competitions</h2>
            <p>These are contests that test students' artistic abilities, such as drawing, painting, or photography.</p>
        </div>
        <div className="major-competition-text">
            <h2>Music Competitions</h2>
            <p>These are contests that test students' musical abilities, such as singing, playing an instrument, or composing music.</p>
        </div>  
    </div>

    <div className="btn">
                <button className="btn1">
                <NavLink className="btn-link"
                            exact
                            to="/"
                        >
                            Back Home
                        </NavLink>
                </button>
    </div>


    </div>
  )
}

export default Competition