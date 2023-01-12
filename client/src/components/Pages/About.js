import React from 'react';
import './about.css'
import { NavLink } from "react-router-dom";
import image from "../../assets/body2.jpg";


export const About = () => {

  return (

    
    <div className="major">

      <div className="major-header">
      <nav>
      <ul className="ul">
      {/* <li>
        <a href="#home">Home</a></li> */}
      <li><NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink></li>
          <li><NavLink
                exact
                to="/degree"
                activeClassName="active"
                className="nav-links"
              >
                Degree
              </NavLink></li>
                            <li><NavLink
                    exact
                    to="/inquries"
                    activeClassName="active"
                    className="nav-links"
                  >
                    Inquries
                  </NavLink></li>
      </ul>
      
      </nav>

      </div>
    <div className="major-body" style={{backgroundImage: `url(${image})`,
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

    <div className="major-content">
      <div className="major-text">
        <h1>Plan Your Classes</h1>
        <p>Check Your Major Classes and Discover Your Passion</p>

        </div>
        <div className="major-text">
        <h1>Don’t Keep waiting</h1>
        <p>How Wonderfull It is that nobody need wait a single moment before starting to improve the world</p>

        </div>

      </div>
      <div className="major-footer">
      <div className='move'>
             <h1>America University of Kuwait</h1>
                <p>P.O.BOX 3323, Safat 13034, Kuwait</p>
                <p>Phone: +965 2224 0000</p>

             </div>
                {/* <div className="btn"> */}
                        {/* <button className="btn1"> */}
                        <NavLink className="btn-link inquire-btn"
                                    exact
                                    to="/"
                                >
                                    Back Home
                                </NavLink>
                        {/* </button> */}
                    {/* </div> */}
        </div>
      
    </div>


  );
};
