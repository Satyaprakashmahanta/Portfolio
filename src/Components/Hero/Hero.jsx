import React from "react";
import './Hero.css'
import myimg from '../../assets/myimg.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {

    return (
        <div id="home" className="hero">
            <img src={myimg} alt="" />
            <h1><span>I'm Satyaprakash,</span> full stack developer. </h1>
            <p>I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Contact with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}
export default Hero