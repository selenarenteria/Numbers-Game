console.log('Game started')

const playerDeck = []
const computerDeck = []
let pscore = 0
let cscore = 0
let scoresMcGee = document.getElementById("pscore")


const Deck = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10] 
 
const playerHand = document.querySelector('.card2')
console.log(playerHand)

playerHand.addEventListener("click", isPlayerTurn)

function isPlayerTurn () {
    if (Deck.length>0) {

        const pl1 = document.createElement("div");
          const randomPlayerChoice = Math.floor(Math.random()*Deck.length)
        
        
             const getPlayerCard = Deck.splice(randomPlayerChoice, 1)[0]
            playerDeck.push(getPlayerCard)
            pscore+= getPlayerCard
            pl1.textContent = getPlayerCard
            document.getElementById("pcards").replaceChildren(pl1)
            scoresMcGee.innerText=pscore
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
       

        
        const getComputerCard = Deck.splice(randomComputerChoice, 1)[0]
        cpu.textContent = getComputerCard
        document.getElementById("ccards").replaceChildren(cpu)
       console.log("Deck", Deck)


    } else {
        console.log("Game over no cards left")
    }

    
}
  

// const startGameButton = document.querySelector('.start-button')
// console.log(startGameButton)

// startGameButton.addEventListener("click", gameStarting)

// function gameStarting() { 
//     const start = document.createElement("START");
//     document.body.appendChild(start); 
//     // console.log("this is working!")
//     const modal = document.getElementById("myModal");

// // Get the button that opens the modal
// const btn = document.getElementById('.start-button');

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// startGameButton.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// }

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


const totalScore = 0
if (isPlayerTurn){

} else {

    if(isComputerTurn) {

    }
}


