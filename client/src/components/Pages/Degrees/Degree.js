import './Degree.css'
import React from 'react';
import { NavLink } from "react-router-dom";
import image from "../../../assets/body3.jpg";
import communication from "../../../assets/BachelorCommunicationMedia.png";
import english from "../../../assets/BachelorArtsEnglish.png";
import Design from "../../../assets/BachelorArtsDesign.png";
import Infor from "../../../assets/BachelorScienceInformationSystems.png";
import international from "../../../assets/BachelorArtsInternationalRelations.png";
import social from "../../../assets/BachelorArtsSocialBehavioralScience.png";
import accounting from "../../../assets/BachelorBusinessAdministrationAccounting.png";
import bussiness from "../../../assets/BachelorBusinessAdministrationManagement.png";
import finance from "../../../assets/BachelorBusinessAdministrationFinance.png";
import human from "../../../assets/BachelorBusinessAdministrationHumanResourceManagement.png";
import marketing from "../../../assets/BachelorBusinessAdministrationMarketing.png";
import economics from "../../../assets/BachelorBusinessAdministrationEconomics.png";

const Degree = () => {
    return (

        <div className="major-body" style={{backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        // position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-1",
        // backgroundAttachment: "fixed",
        // opacity: "0.9"

  
  }}>
 <div className="major">
    
    <div className="major-header">
    <nav>
    <ul className="ul">
    {/* <li><a href="#home">Home</a></li> */}
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


  <div className="major-content_degree">
      <div className="major-degree">
          <h1>College Of Art & Science</h1>
          <ul>
              <li><span>-</span><a href={communication}>Communication & Media</a></li>
              <li><span>-</span><a href={english}>English</a></li>
              <li><span>-</span><a href={Design}>Graphic and Design</a></li>
              <li><span>-</span><a href={Infor}>Information Technology</a></li>
              <li><span>-</span><a href={international}>International Relations</a></li>
              <li><span>-</span><a href={social}>Social and Behavioral Science</a></li>


          </ul>
          </div>

      <div className="major-degree">
          <h1>College Of Business Administration</h1>

          <ul>
              <li><span>-</span><a href={accounting}>Accounting</a></li>
              <li><span>-</span><a href={bussiness}>Bussiness Administration</a></li>
              <li><span>-</span><a href={finance}>Finance</a></li>
              <li><span>-</span><a href={human}>Human Resource and Management</a></li>
              <li><span>-</span><a href={marketing}>Marketing</a></li>
              <li><span>-</span><a href={economics}>Economics</a></li>
          </ul>
      </div>

      <div className="major-degree">
          <h1>College Engineering & Applied Sccience</h1>
          <ul>
              <li><span>-</span><a href={accounting}>Computer Engineering</a></li>
              <li><span>-</span><a href={bussiness}>Electrical Engineering</a></li>
              <li><span>-</span><a href={finance}>Mechanical Engineering</a></li>
              <li><span>-</span><a href={human}>Civil Engineering</a></li>
              <li><span>-</span><a href={marketing}>Computer Science</a></li>
              <li><span>-</span><a href={economics}>Computer Information Systems</a></li>
          </ul>
      </div>
  


  </div>

      <div className="major-footer_degree">
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
    </div>
       
    
      );
}

export default Degree