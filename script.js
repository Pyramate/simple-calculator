// Ask a number to the player (between 1 and 100)
let playerRandomNumber = prompt("Select a number between 1 and 100")
playerRandomNumber = parseInt(playerRandomNumber)
const randomNumber = Math.floor(Math.random() * 100) + 1
const playerName = prompt("What's your name?")

// - If the player's number is over the stored value, log "It is less"
while (playerRandomNumber !== randomNumber) { 
    if (playerRandomNumber>randomNumber){
        alert("This is less")
    } else if (playerRandomNumber<randomNumber){
        alert("This is more")
    }
    playerRandomNumber = parseInt(prompt("Select a number between 1 and 100"))
} 

alert(`${playerName} win!`);



// - If the player's number is under the stored value, log "It is more"
// - If the player's number equals the stored value, log "<player> wins" (where <player> is replaced by the player's name)
// - The game stops when the player wins
