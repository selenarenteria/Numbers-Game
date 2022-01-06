console.log('Game started')



const playerDeck = []
const computerDeck = []


const Deck = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10] 


const startGameButton = document.querySelector('.start-button')
console.log(startGameButton)

startGameButton.addEventListener("click", eventHandler)

function eventHandler() { 
    const start = document.createElement("START");
    document.body.appendChild(start); 
}

const playerHand = document.querySelector('.card2')
console.log(playerHand)

playerHand.addEventListener("click", isPlayerTurn)

function isPlayerTurn () {
    const pl1 = document.createElement("div");
    const randomPlayerChoice = Math.floor(Math.random()*Deck.length)
    
    const removeCard = Deck.splice(randomPlayerChoice)[0]
    pl1.textContent = removeCard
    playerHand.appendChild(pl1);
}


const computerHand = document.querySelector('.card1')
console.log(computerHand)

computerHand.addEventListener("click", isComputerTurn)

function isComputerTurn () {
    const cpu = document.createElement("div");
    const randomComputerChoice = Math.floor(Math.random()*Deck.length)
    cpu.textContent = randomComputerChoice
    computerHand.appendChild(cpu);
}
  


