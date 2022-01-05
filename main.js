console.log('Game started')




const playerDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const computerDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(playerDeck[0])
// console.log(computerDeck[0])

const randomPlayerChoice = Math.floor(Math.random()*playerDeck.length)
const randomComputerChoice = Math.floor(Math.random()*computerDeck.length)
console.log(randomPlayerChoice, randomComputerChoice)


const startGameButton = document.querySelector('.start-button')
console.log(startGameButton)
startGameButton.addEventListener("click", eventHandler)

function eventHandler() { 
const start = document.createElement("START");
start.innerText = "Game Begins";
document.body.appendChild(start); 

  const playerHand = document.querySelector('.card2')
  console.log(playerHand)

  playerHand.addEventListener("click", isPlayerTurn)

  function isPlayerTurn () {
  const pl1 = document.createElement("PLAYER");
  pl1.innerText = "Player Choice";
  document.body.appendChild(pl1);


  const computerHand = document.querySelector(".card1")
  console.log(computerHand)

  computerHand.addEventListener("click", isComputerTurn)

  function isComputerTurn() {
    const cpu = document.createElement("COMPUTER");
    cpu.innerText = "Computer Choice";
    document.body.appendChild(cpu);
}
  }
}



