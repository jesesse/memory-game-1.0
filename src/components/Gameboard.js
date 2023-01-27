import React from "react";
import Card from "./Card";
import '../styles/gameboard.css'

const Gameboard = (props) => {

    const cardElements = props.cards.map(card => {
        return <Card
            key={card.id}
            handleClick={() => props.handleClick(card.id)}
            card={card}>
        </Card>
    })

    return (
        <div className="gameboard--container">
            <div className="gameboard">
                {cardElements}
            </div>
        </div>
    )
}

export default Gameboard