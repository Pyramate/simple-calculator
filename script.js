// Ask a number to the player (between 1 and 100)
let playerRandomNumber = prompt("Select a number between 1 and 100")
playerRandomNumber = parseInt(playerRandomNumber)
const randomNumber = Math.floor(Math.random() * 100) + 1
const playerName = prompt("What's your name?")

// - If the player's number is over the stored value, log "It is less"
function game(playerRandomNumber,randomNumber,playerName){

        if (playerRandomNumber == randomNumber) {
        console.log(`${playerName} wins!`)
        return `${playerName} wins!`

        } else if {
        while (playerRandomNumber !== randomNumber){
            if (playerRandomNumber>randomNumber){

            console.log("It is less.");
            playerRandomNumber = prompt("Select a number between 1 and 100");

            } else if (playerRandomNumber<randomNumber){
            console.log("It is more.")
            playerRandomNumber = prompt("Select a number between 1 and 100");

         }
     }
    }
}

game(playerRandomNumber,randomNumber,playerName)

// - If the player's number is under the stored value, log "It is more"
// - If the player's number equals the stored value, log "<player> wins" (where <player> is replaced by the player's name)
// - The game stops when the player wins
