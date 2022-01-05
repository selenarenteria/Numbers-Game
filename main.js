console.log('Game started')




const playerDeck = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10]
const computerDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(playerDeck[0])
// console.log(computerDeck[0])

const randomPlayerChoice = Math.floor(Math.random()*playerDeck.length)
const randomComputerChoice = Math.floor(Math.random()*computerDeck.length)
console.log(randomPlayerChoice, randomComputerChoice)

//step 1 DOM reference aka querySelector/ 
// step 2 addEventListener

// start button DOM reference 
// addEventListener that calls  start game function

  
const startGameButton = document.querySelector('.start-button')
console.log(startGameButton)

startGameButton.addEventListener("click", eventHandler)


function eventHandler(){
    alert('Game has begun!')
}

const playerHand = document.querySelector(".card2")
console.log(playerHand)

playerHand.addEventListener("click", isPlayerTurn)

function isPlayerTurn () {
    alert('Your Turn!')
}

const computerHand = document.querySelector(".card1")
console.log(computerHand)

computerHand.addEventListener("click", isComputerTurn)

function isComputerTurn() {
    alert('Computers Turn!')
}

