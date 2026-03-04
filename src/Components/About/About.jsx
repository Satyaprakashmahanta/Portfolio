import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myimg from '../../assets/myimg.jpeg'

function About() {
    
    return(
        <div  id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={myimg} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi everyone, I am Soumyaranjan Behera from Odisha, India. I am a third-year student pursuing a Bachelor of Technology in Computer Science and Engineering from Raajdhani Engineering College [REC], Bhubaneswar. </p>
                        <p> I am proficient in Web Development Technologies as mentioned below.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Django</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achivement">
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    )
}
export default About;