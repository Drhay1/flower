import "./SectionAbout.css"
import React from 'react'

import couch2 from "../../assets/couch4.png";
import couch3 from "../../assets/couch5.png";
import { Link } from "react-router-dom";

const SectionAbout = () => {
  return (
    <div className="About-Main">

      <h1>About</h1>

      <div  className="About">
        <div className="img-content">
          <img src={couch2} alt="couch"/>
        </div>

        <div className="About-content">
          <h2> Double Seater Sofa </h2>
          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years</p>
          <Link to="/Blog" className="btn Learn">
            Learn more
          </Link>
        </div>
      </div>


      <div  className="About">
        <div className="About-content">
          <h2> Square Seater Sofa </h2>
          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years</p>
          <Link to="/Blog" className="btn Learn">
            Learn more
          </Link>
        </div>

        <div className="img-content">
          <img src={couch3} alt="couch"/>
        </div>
      </div>

    </div>
  )
}

export default SectionAbout