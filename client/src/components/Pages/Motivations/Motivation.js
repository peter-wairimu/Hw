import React from 'react'
import { NavLink } from "react-router-dom";
import image from "../../../assets/mot1.jpg";


const Motivation = () => {
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
        <h1>Motivation</h1>
        </div>
    <div className="major-competition-content">
        
        <div className="major-competition-text">
            <h2>Extrinsic</h2>
            <p>Extrinsic motivation is doing something for the external rewards you get from it. In your career, this can include financial gain, benefits, perks and even avoiding getting fired,” says says Shawna Clark, owner of Clark Executive Coaching, a leadership development company.</p>
        </div>
        <div className="major-competition-text">
            <h2> Intrinsic</h2>
            <p>“Intrinsic motivation is doing something because it feels good to you. You feel internally rewarded for doing it,” says Clark. “In a job, this can be doing work that feels purposeful, enjoying time with your teammates or achieving goals you’ve set for yourself.”</p>
        </div>
        <div className="major-competition-text">
            <h2>Family</h2>
            <p>“Family motivation can relate to both intrinsic and extrinsic motivation. If family is a top value of yours, then your family can serve as an intrinsic motivator. If you feel family pressure or obligations, then that's more of an extrinsic motivator,” says Clark.</p>
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

export default Motivation