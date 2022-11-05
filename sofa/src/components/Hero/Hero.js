import "./Hero.css";

import React from 'react';
import { Link } from "react-router-dom";

import couch from "../../assets/couch1.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="heroleft">
        <h1><span>Discover</span> The <br/> Best <span>Furniture</span></h1>
        <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry. Lorem</p>
        <Link to="/Shop" className="btn">Shop Now</Link>
      </div>
      <div className="heroright">
        <img className="img" src={couch} alt="couch" />
      </div>
    </div>
  )
}

export default Hero