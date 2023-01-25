import React from "react";
import './styles/main.css'
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import { svgs } from "./assets/card-images";

function App() {

  localStorage.clear();

  const [bestScore, setBestScore] = React.useState(getBestScore())
  const [currentScore, setCurrentScore] = React.useState(0);
  const [cards, setCards] = React.useState(createNewCards())
  const [confetti, setConfetti] = React.useState(false)

  function getBestScore() {
    if(!JSON.parse(localStorage.getItem('bestScore'))) return 0;
    else return JSON.parse(localStorage.getItem('bestScore'))
}

  function handleClick(id) {
    let clickedCard = cards.find(card => id === card.id)
    if (clickedCard.isPicked) {
      gameOver()
    } else {
      setCards(prevCards => prevCards.map(card => {
        if (card.id === id) {
          card = {
            ...card,
            isPicked: true
          }
        }
        return card;
      }))
      setCurrentScore(prevScore => prevScore + 1)
      shuffleCards()
    }
  }

  function gameOver() {
    if (currentScore > bestScore) {
      setConfetti(true);
      localStorage.setItem('bestScore', JSON.stringify(currentScore))
      setBestScore(currentScore)
    }
    newGame()
  }

  function newGame(){
    setCurrentScore(0)
    setCards(createNewCards())
    shuffleCards();
  }


  function createNewCards() {
    let cardsArray = [];
    for (let i = 0; i < svgs.length; i++) {
      let card = {
        url: svgs[i].url,
        name: svgs[i].name,
        id: i,
        isPicked: false
      }
      cardsArray.push(card)
    }
    return cardsArray;
  }


  function shuffleCards() {
    setCards(prevCards => {
      let shuffledCards = prevCards.sort((a, b) => 0.5 - Math.random())
      return shuffledCards;
    })
  }

  return (
    <div className="container">
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Gameboard cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
