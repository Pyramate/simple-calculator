// Ask a number to the player (between 1 and 100)
const playerRandomNumber = prompt("Select a number between 1 and 100")
const randomNumber = Math.floor(Math.random() * 100) + 1
const playerName = prompt("What's your name?")

// - If the player's number is over the stored value, log "It is less"
function game(playerRandomNumber,randomNumber,playerName){

    while (playerRandomNumber !== randomNumber){
        if (playerRandomNumber>randomNumber){

            console.log("It is less.");
            playerRandomNumber = prompt("Select a number between 1 and 100");

        } else if (playerRandomNumber<randomNumber){
            console.log("It is more.")
            playerRandomNumber = prompt("Select a number between 1 and 100");

        } else {
            console.log(`${playerName} wins!`)
        }
    }

}

game(playerRandomNumber,randomNumber,playerName)

// - If the player's number is under the stored value, log "It is more"
// - If the player's number equals the stored value, log "<player> wins" (where <player> is replaced by the player's name)
// - The game stops when the player wins
