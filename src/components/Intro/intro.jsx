import React from 'react'
import './intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Vector1 from '../../img/vector-blue.png'
import Vector2 from '../../img/splash.png'
import boy from '../../img/programmer.png'
import Crown from '../../img/weblogo.png'
import thumbup from '../../img/cyberlogo.png'
import FloatingDiv from '../FloatingDiv/floatingdiv'
import glassesimoji from '../../img/glassemoji1.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'


const Intro = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 340) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);
    const bottomToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkmode ? 'white' : '' }} >Hello, Myself</span>
                    <h1 data-value="Gaurav Suryawanshi" >Gaurav Suryawanshi</h1>
                    <span style={{ color: darkmode ? '#acc2ff' : '' }}>A Cyber Security Practitioner/ Researcher,am quite good in SIEM (like Splunk, ELK, Wazuh, Qradar), Phishing Email Analysis, etc <br />Also am quite good in Python Developement as well as Web Developement/ Software Developement.</span>
                </div>
                <a href="#" target={'_blank'}>
                <button className="button i-button" style={{ color: darkmode ? 'black' : '', fontWeight: darkmode ? 'bolder' : '' }}>Hire Me</button>
                </a>
                <div className="i-icons">
                    <a href="http://github.com/astroxhacker">
                        <img id='github' src={Github} alt="" style={{ filter: darkmode ? 'invert(1)' : '' }} />
                    </a>
                    <a href="https://linkedin.com/in/gauravss03">
                        <img id='linkedin' src={LinkedIn} alt="" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector2} alt="" />
                <img src={boy} alt=""  />
                <img src={glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '68%' }} className='floating-div' >
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }} className='floating-div' >
                    <FloatingDiv image={thumbup} txt1='Cyber-Sec' txt2='Researcher' />
                </div>
                {scrollTop && (
                    <button onClick={bottomToTop} className="backToTop" style={{filter: darkmode? 'invert(1)':''}}>
                        &#8593;
                    </button>
                )}
                <div className='blur' style={{ background: "#f8f7f1" }} ></div>
            </div>
            <script src="index.js"></script>
        </div>
    )
}
export default Intro