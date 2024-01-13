import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Services = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    function reveal() {
        var reveals = document.querySelectorAll("#animations-cards");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    return (
        <div className="services" id='Services'>
            <div className="expertise">
                <span style={{ color: darkmode ? 'white' : '' }} >My Expertise</span>
                <span>Are in</span>
                <span style={{ color: darkmode ? '#acc2ff' : '', fontWeight: 'bold' }}>I ranks among the top 4% on TryHackme, also am quite good in Cyber Defense, Web Developement and also Python Developement
                    <br />
                    Also i have a tendency to learn new skills quickly and can utilize them.
                </span>
                <a href="#" target={'_blank'} >
                    <button className='button s-button' style={{ color: darkmode ? 'black' : '', fontWeight: darkmode ? 'bolder' : '' }}>Download CV/Resume</button>
                </a>
            </div>
            <div className="cards">
                <div id='animations-cards' style={{ left: '14rem' }} >
                    <Card
                        emoji={HeartEmoji}
                        heading={'Web Developement'}
                        detail={'HTML5, CSS3, Django, JavaScript, React, SQL, etc.'}
                    />
                </div>
                <div id='animations-cards' style={{ top: "12rem", left: "-4rem" }} >
                    <Card
                        emoji={Glasses}
                        heading={"Cyber Researcher"}
                        detail={"SIEM (SPLUNK, ELK, Wazuh, Qradar), Mitre Att&ck, DevSecOps, Phishing Email Analysis, etc"}
                    />
                </div>
                <div id='animations-cards' style={{ top: "19rem", left: "12rem" }} >
                    <Card
                        emoji={Humble}
                        heading={"Python Developer"}
                        detail={"Django, Linux, AWS (Amazon Web Services) , etc"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services