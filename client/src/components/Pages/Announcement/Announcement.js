import React from 'react'
import { NavLink } from "react-router-dom";
import image from "../../../assets/graduate.jpg";


const Announcement = () => {
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
        <h1>Announcement</h1>
        </div>
    <div className="major-competition-content">
        
        <div className="major-competition-text">
            <h2>Academic Events</h2>
            <p>Student announcements might include information about upcoming lectures, workshops, seminars, or other academic events that students can attend.</p>
        </div>
        <div className="major-competition-text">
            <h2>Extracurricular activities:</h2>
            <p>Student announcements might include information about club meetings, sports practices, and other extracurricular activities that students can participate in.</p>
        </div>
        <div className="major-competition-text">
            <h2>School policies:</h2>
            <p>Student announcements might include updates or reminders about school policies, such as rules around attendance, dress code, or technology use.</p>
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

export default Announcement