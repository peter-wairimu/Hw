import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import image from "../../../assets/inquire.jpg";
import "./inqure.css";

const Inquire = () => {
const [textareavalue, setTextareavalue] = useState('');
const [emailvalue, setEmailvalue] = useState('');
const [Phonevalue, setPhonevalue] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    message: textareavalue,
    email: emailvalue,
    phone: Phonevalue,
  };
  if (!textareavalue || !emailvalue || !Phonevalue) {
    // Display an error message if any of the fields is empty
    alert('All fields are required!');
    return;
}
  fetch("http://ec2-54-178-198-102.ap-northeast-1.compute.amazonaws.com:3000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      setTextareavalue('');
      setEmailvalue('');
      setPhonevalue('');
      alert("Message Sent successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error: Message Failed");
    });
};


  return (
    <div className='inquire'>
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
            <div className="major-inquire" style={{backgroundImage: `url(${image})`,
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
            <div className="inquire-content">
                <div className="inquire-text">
                    <h1>Get In Touch</h1>
                    <p>Fill out the form below and we will get back to you as soon as possible.</p> 
                </div>
                    <div className="inquire-form">
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-group">
                                <label htmlFor="text">Message</label>
                                <input type="text" id="text" value={textareavalue} onChange={(e) => setTextareavalue(e.target.value)} />

                                <label htmlFor="email">Email</label>
                                <input type="email" id="studentId" value={emailvalue} onChange={(e) => setEmailvalue(e.target.value)} />

                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" value={Phonevalue} onChange={(e) => setPhonevalue(e.target.value)} />



                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            <div className="major-footer_inquire">
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
  )
}

export default Inquire