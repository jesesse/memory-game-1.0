import React from "react";

import '../styles/scoreboard.css'

const Scoreboard = (props) => {

    let text;
    if(props.newBest) text = "NEW BEST SCORE"


    return (
        <div className="scoreboard">
            <div className="current--score">
                <h3>CURRENT SCORE</h3>
                <h2>{props.currentScore}</h2>
            </div>

            <div className="new--best--score">
                <h3>{text}</h3>
            </div>

            <div className="best--score">
                <h3>BEST SCORE</h3>
                <h2>{props.bestScore}</h2>
            </div>
        </div>
    )
}

export default Scoreboard