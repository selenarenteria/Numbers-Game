console.log('Game started')

 const playerDeck = []
 const computerDeck = []
 let pscore = 0
 let cscore = 0
 let playerScore= document.getElementById("pscore") 
 let computerScore= document.getElementById("cscore")


const Deck = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10] 


const startGameButton = document.querySelector('.start-button')
console.log(startGameButton)

startGameButton.addEventListener("click", gameStarting)

function gameStarting() { 
    const start = document.createElement("START");
    document.body.appendChild(start); 
    // console.log("this is working!")
    const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById('.start-button');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
startGameButton.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

const winner =document.querySelector('.winner')
console.log(winner)

function checkForWinners() {
    if (playerScore > 10) {
        console.log ("Player Wins")
        winner.innerText = "Player Wins!"
     } else if (playerScore => 5 ) {
         console.log ("Player Wins")
        winner.innerText= "Player Wins!"
     } else if (computerScore > 10) {
         console.log ("Computer Wins")
        winner.innerText= "Computer Wins"
     }else if (computerScore => 5) {
         console.log ("Computer Wins")
        winner.innerText= "Computer Wins!"
    }else if (playerScore === 10 && computerScore === 10){
        console.log ("Tie!")
        winner.innerText= "Tie!"
    }
}
 
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
            playerScore.innerText=pscore
            console.log("Deck", Deck)
     } else {
        checkForWinners(isPlayerTurn)
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
            computerDeck.push(getComputerCard)
            cscore+= getComputerCard
            cpu.textContent = getComputerCard
            document.getElementById("ccards").replaceChildren(cpu)
            computerScore.innerText=cscore
            console.log("Deck", Deck)


    } else {
        checkForWinners(isComputerTurn)
        console.log("Game over no cards left")
    }

    
}
  


const resetGameButton = document.querySelector('.reset-button')
console.log(resetGameButton)

resetGameButton.addEventListener("click", pressReset)

function resetGame() {
    const reset = document.createElemenst("RESET");
    document.body.appendChild(reset);
    
}

function pressReset() {
    return location.reload()
}



// function checkForWinners() {
//     if (pscore > 10) {
//         console.log ("Player WIns")
//         winner.innerText = "Player Wins!"
//     } else if (pscore => 5 ) {
//         console.log ("Player Wins")
//         winner.innerText= "Player Wins!"
//     } else if (cscore > 10) {
//         console.log ("Computer Wins")
//         winner.innerText= "Computer Wins"
//     }else if (cscore => 5) {
//         console.log ("Computer Wins")
//         winner.innerText= "Computer Wins!"
//     }else if (pscore === 10 && cscore === 10){
//         console.log ("Tie!")
//         winner.innerText= "Tie!"
    // }else if (dealerScore > playerScore && dealerScore >16 && dealerScore <=21) {
    //     console.log ("House wins! You lose!")
    //     winner.innerText= "House wins! You lose!"
    // }else if (playerScore > dealerScore && playerScore >16 && playerScore <=21) {
    //     console.log ("You win! House loses!")
    //     winner.innerText= "You win! House loses!"
    //  }



