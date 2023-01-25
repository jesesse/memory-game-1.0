import React from "react";
import '../styles/card.css'

const Card = ({ cardData, handleClick }) => {

    return (
        <div id={cardData.id} onClick={() => handleClick(cardData.id)} className="card">
            <img className="card-img" src={cardData.url} alt={cardData.name} />
        </div>
    )
}

export default Card