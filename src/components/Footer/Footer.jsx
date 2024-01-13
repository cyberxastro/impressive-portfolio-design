import React from 'react'
import './Footer.css'
import Wave from '../../img/wave1.png'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Footer = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    return (
        <div className="footer">
            <img style={{ width: '100%', filter: darkmode ? 'grayscale(1)' : '' }} src={Wave} alt="" />
            <div className="f-content">
                <span id='imp-text' style={{ color: darkmode ? 'black' : '', fontWeight: darkmode ? 'bolder' : '' }} >linkedin.com/in/gauravss03</span>
                <div className="f-icons">
                    <a target={'_blank'} href="#">
                        <Linkedin color='Blue' size='3rem' />
                    </a>
                    <a target={'_blank'} href="#">
                        <Github color='black' size='3rem' />
                    </a>
                </div>
                <span id='imp-text' style={{ color: darkmode ? 'black' : '', fontWeight: darkmode ? 'bolder' : '' }} >Copyright reserved @gauravss03</span>
            </div>
        </div>
    )
}

export default Footer