import React from 'react'
import './Works.css'
import Linkedin from '../../img/linkedin.png'
import Github from '../../img/github.png'
import TryHackme from '../../img/tryhackme.png'
import Linktree from '../../img/linktree.png'
import Leetcode from '../../img/leetcode.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Works = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    function reveal() {
        var reveals = document.querySelectorAll(".w-mainCircle");

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
        <div className="services" id='Works'>
            <div className="expertise">
                <span style={{ color: darkmode ? 'white' : '' }}>You can see my</span>
                <span>Work Here 👉</span>
                <span style={{ fontWeight: 'bold', color: darkmode ? '#acc2ff' : '' }}>I ranks among the top 4% on TryHackme
                    <br />
                    You can see my past work on my linkedin and even on github, i have a good record of problem solving on leetcode also,
                    <br />
                    I have some websites hosted on the platforms like github and also on netlify
                </span>
                <a href="#" target={'_blank'} >
                    <button className='button s-button' style={{ color: darkmode ? 'black' : '', fontWeight: darkmode ? 'bolder' : '' }}>Hire Me</button>
                </a>
                <div className='blur s-blur1' style={{ background: "#f8f7f1" }} ></div>
            </div>

            <div className="w-right">
                <div className="w-mainCircle" style={{ backgroundColor: darkmode ? '#404040' : '', filter: darkmode ? 'drop-shadow(-14px 7px 11px #737373)' : '' }}>
                    <a href="#" target={"_blank"} >
                        <div className="w-secCircle" style={{ backgroundColor: darkmode ? '#717171' : '', filter: darkmode ? 'drop-shadow(-14px 7px 11px #737373)' : '' }}>
                            <img id='main-img1' src={Github} alt="" />
                        </div>
                    </a>
                    <a href="#" target={"_blank"} >
                        <div className="w-secCircle" style={{ backgroundColor: darkmode ? '#717171' : '', filter: darkmode ? 'drop-shadow(-14px 7px 11px #737373)' : '' }}>
                            <img id='main-img2' src={Leetcode} alt="" />
                        </div>
                    </a>
                    <a href="#" target={"_blank"} >
                        <div className="w-secCircle" style={{ backgroundColor: darkmode ? '#717171' : '' }}>
                            <img id='main-img3' src={Linkedin} alt="" />
                        </div>
                    </a>
                    <a href="#" target={"_blank"} >
                        <div className="w-secCircle" style={{ backgroundColor: darkmode ? '#717171' : '' }}>
                            <img id='main-img4' src={TryHackme} alt="" />
                        </div>
                    </a>
                    <a href="#" target={"_blank"} >
                        <div className="w-secCircle" style={{ backgroundColor: darkmode ? '#717171' : '', filter: darkmode ? 'drop-shadow(-14px 7px 11px #737373)' : '' }}>
                            <img id='main-img5' src={Linktree} alt="" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Works