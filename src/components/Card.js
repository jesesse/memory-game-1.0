import React from "react";
import '../styles/card.css'

const Card = ({card, handleClick }) => {

  let style;
  if (card.deathCard) style = {
    backgroundColor: "red",
    opacity: "50%"
  }

  return (
    <div id={card.id} onClick={handleClick} className="card">
      <img className="card-img" src={card.imgUrl} alt={card.text} />
      <div className="img-layer" style={style}></div>
    </div>
  )
}



export default Card