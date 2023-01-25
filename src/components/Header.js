import React from "react";
import icon from '../assets/icon.png'
import icon2 from '../assets/score.png'
import '../styles/header.css'

const Header = (props) => {

    return (
        <div className="header">
            <h1>TAROT CARD</h1>
            <img className="header--logo" src={icon} alt="logo" />
            <h1>MEMORY GAME</h1>
        </div>
    )
}

export default Header