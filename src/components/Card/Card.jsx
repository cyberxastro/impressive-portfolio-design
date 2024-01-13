import React from 'react'
import './Card.css'
const Card = ({ emoji, heading, detail }) => {
    return (
        <div className="card">
            <img src={emoji} alt="" />
            <span id='heading' >{heading}</span>
            <span id='details' >{detail}</span>
            <a href="#" target={'_blank'}>
            <button className="c-button" style={{cursor:'pointer'}}>Know more</button>
            </a>
        </div>
    )
}

export default Card