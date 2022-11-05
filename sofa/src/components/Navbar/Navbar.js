import "./Navbar.css";

import React, {useState}from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <Link to="/">
            <h1>sofa</h1>
        </Link>

        
        <ul className={click ? "navMenu active" : "navMenu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Shop">Shop</Link>
            </li>
            <li>
                <Link to="/Blog">Blog</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>

            {click ?<FaTimes size={30} style={{color: "black"}} /> : <FaBars size={30} style={{color: "black"}} /> }
        
        </div>

    </div>
    
  )
}

export default Navbar