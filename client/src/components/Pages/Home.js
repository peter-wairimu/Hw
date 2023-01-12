import React from "react";
// import { Link } from "react-router-dom";
import image from "../../assets/background3.jpg";


export const Home = () => {
  return (
    <div>
  <div className="header" style={{backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    position: "absolute",
    opacity: "0.8",
    top: "0",
    left: "0",
    zIndex: "-1",
    backgroundAttachment: "fixed"
  
  }}>

  </div>


      <div className="hero">
        <h1 className="hero-text">
          Welcome to <span> AUK </span>
        </h1>
        </div>



      
    </div>
  );
};
