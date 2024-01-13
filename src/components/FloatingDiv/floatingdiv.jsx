import React from 'react'
import './floatingdiv.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const FloatingDiv = ({ image, txt1, txt2 }) => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkmode;
    return (
        <div style={{ backgroundColor: darkmode ? '#404040' : '' }} className="floatingdiv">
            <img src={image} alt="" />
            <span>{txt1}
                <br />
                {txt2}
            </span>
        </div>
    )
}

export default FloatingDiv