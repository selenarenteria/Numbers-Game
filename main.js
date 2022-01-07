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
        
             const getPlayerCard = Deck.splice(randomPlayerChoice, 1)[0]
            playerDeck.push(getPlayerCard)

            pl1.textContent = getPlayerCard
            document.getElementById("pcards").replaceChildren(pl1)
            //   playerHand.textContent = pl1.textContent
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

        
        const getComputerCard = Deck.splice(randomComputerChoice, 1)[0]
        cpu.textContent = getComputerCard
        document.getElementById("ccards").replaceChildren(cpu)
       console.log("Deck", Deck)


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






