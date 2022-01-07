console.log('Game started')



const playerDeck = []
const computerDeck = []


const Deck = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10] 
 



const playerHand = document.querySelector('.card2')
console.log(playerHand)

playerHand.addEventListener("click", isPlayerTurn)

function isPlayerTurn () {
    if (Deck.length>0) {

        const pl1 = document.createElement("div");
        const randomPlayerChoice = Math.floor(Math.random()*Deck.length)
        // while loop 

            // player and computer cannot get the same card 
             const removeCard = Deck.splice(randomPlayerChoice, 1)[0]
            
            
             // .push[] remove card into playerDeck 
             removeCard.push(playerDeck)
             pl1.textContent = removeCard
             playerHand.appendChild(pl1);
             console.log("Deck", Deck)


    } else {
        console.log("Game over no cards left")
    }

   
}


const computerHand = document.querySelector('.card1')
console.log(computerHand)
computerHand.addEventListener("click", isComputerTurn)

function isComputerTurn () {
    if (Deck.length>0) {
        const cpu = document.createElement("div");
        const randomComputerChoice = Math.floor(Math.random()*Deck.length) 
       // while loop  

        
        const removeCard = Deck.splice(randomComputerChoice, 1)[0]
        // .push() remove card into computerDeck
        cpu.textContent = removeCard
        computerHand.appendChild(cpu);


    } else {
        console.log("Game over no cards left")
    }

    
}
  

const startGameButton = document.querySelector('.start-button')
console.log(startGameButton)

startGameButton.addEventListener("click", gameStarting)

function gameStarting() { 
    const start = document.createElement("START");
    document.body.appendChild(start); 
    console.log("this is working!")
}

const resetGameButton = document.querySelector('.reset-button')
console.log(resetGameButton)

resetGameButton.addEventListener("click", pressReset)

function resetGame() {
    const reset = document.createElement("RESET");
    document.body.appendChild(reset);
    
}

function pressReset() {
    return location.reload()
}

// create a function to determine 
// function determine




