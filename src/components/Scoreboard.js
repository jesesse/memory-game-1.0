import React from "react";

import '../styles/scoreboard.css'

const Scoreboard = (props) => {

    return (
        <div className="scoreboard">
            <div className="current--score">
                <h3>CURRENT SCORE</h3>
                <h2>{props.currentScore}</h2>
            </div>

            <div className="best--score">
                <h3>BEST SCORE</h3>
                <h2>{props.bestScore}</h2>
            </div>
        </div>
    )
}

export default Scoreboard