import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import hero_image from "../Components/Assests/hero_image.png";
import hand_icon from "../Components/Assests/hand_icon.png"
import './Hero.css'


const Hero = () => {
    return (
      <div className="hero">
        <div className="hero-left">
          <h2> NEEW ARRIVALS ONLY</h2>

          <div>
            <div className="hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>For EveryOne</p>
          </div>
          <div className="hero-latest-btn">
            <div className='flex gap-3'>
              <h1> Latest Collection</h1>
          <FaArrowRight></FaArrowRight>    
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="" />
        </div>
      </div>
    );
};

export default Hero;