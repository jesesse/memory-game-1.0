import React from "react";
import './styles/main.css'
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import Confetti from 'react-confetti'

function App() {

  const [bestScore, setBestScore] = React.useState(0)
  const [currentScore, setCurrentScore] = React.useState(0);
  const [cards, setCards] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState(false)
  const [confetti, setConfetti] = React.useState(false);


  function handleClick(id) {
    if(isGameOver) return;
    let clickedCard = cards.find(card => id === card.id)
    if (clickedCard.isPicked) {
      setCards(prevCards => prevCards.map(card => {
        if (card.id === id) card = {
          ...card,
          deathCard: true
        }
        return card;
      }))
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
      shuffleCards();
    }
  }

  function gameOver() {


    if (currentScore > bestScore) {
      setBestScore(currentScore)
      setConfetti(true)
    }
    setIsGameOver(true)
  }


  function newGame() {
    setConfetti(false)
    setCurrentScore(0)
    refreshCards();
    shuffleCards();
    setIsGameOver(false)
  }


  React.useEffect(() => {
    createDeck();
  }, [])

  function shuffleCards() {

    setCards(prevCards => prevCards.sort((a, b) => 0.5 - Math.random()));
  }

  function refreshCards() {

    setCards(prevCards => prevCards.map(card => {
      card = {
        ...card,
        isPicked: false,
        deathCard: false
      }
      return card;
    }))
  }

  async function createDeck() {

    const response = await fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=10")
    const data = await response.json();
    let deck = [];
    for (let i = 0; i < data.cards.length; i++) {
      deck.push({
        id: i,
        isClicked: false,
        imgUrl: data.cards[i].image,
        text: `${data.cards[i].value} of ${data.cards[i].suit}`,
      })
    }
    setCards(deck)
  }

  return (
    <div className="container">
      {confetti && <Confetti></Confetti>}
      <Header />
      <Scoreboard newBest={confetti} currentScore={currentScore} bestScore={bestScore} />
      <Gameboard cards={cards} handleClick={handleClick} gameOver={isGameOver} />
      {isGameOver && <button onClick={newGame}>NEW GAME</button>}
    </div>
  );
}

export default App;
