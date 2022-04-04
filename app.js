const dice1 = document.getElementById("dicePlayer1");
const dice2 = document.getElementById("dicePlayer2");

const score1 = document.getElementById("player1-score");
const score2 = document.getElementById("player2-score");

const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const playAgain = document.getElementById("playAgain");

let currentPlayer = 1;
let player1total = 0;
let player2total = 0;

roll.addEventListener("click", () => {
	let currentRoll = Math.ceil(Math.random() * 6);
    console.log("Clicked")
    if (currentPlayer == 1) {
        score1.style.color = "red"
        dice1.src = `images/Dice_${currentRoll}.png`;
        player1total += currentRoll;
        score1.textContent = player1total;

        if (player1total >= 20) {
            console.log("You Win");
            score1.textContent = "You Win";
            roll.style.display = "none";
            playAgain.style.display = "block";
            if (window.location.pathname == '/twoPlayer.html') {
            hold.style.display = "none";
            }
        }
        else {
            if (currentRoll == 1) {
                console.log("You Lose");
                score1.textContent = "You Lose";
                roll.style.display = "none";
                playAgain.style.display = "block";
                if (window.location.pathname == '/twoPlayer.html') {
                hold.style.display = "none";
                }
            }
        }
    }
    else {
        if (currentPlayer == 2){
            score2.style.color = "red"
            dice2.src = `images/Dice_${currentRoll}.png`;
            player2total += currentRoll;
            score2.textContent = player2total;

            if (player2total >= 20) {
                console.log("You Win");
                score2.textContent = "You Win";
                roll.style.display = "none";
                playAgain.style.display = "block";
                if (window.location.pathname == '/twoPlayer.html') {
                hold.style.display = "none";
                }
            }
            else {
                if (currentRoll == 1) {
                    console.log("You Lose");
                    score2.textContent = "You Lose";
                    roll.style.display = "none";
                    playAgain.style.display = "block";
                    if (window.location.pathname == '/twoPlayer.html') {
                    hold.style.display = "none";
                    }
                }
            }
        }  
    }             
})

playAgain.addEventListener("click", () =>{
    console.log("Replaying")
    window.location.reload();
})

hold.addEventListener("click", () => { 
    if (currentPlayer == 1){
        currentPlayer = 2
        console.log(currentPlayer)
        score2.style.color = "red"
        score1.style.color = "black"
    } else {
        if (currentPlayer == 2){
        currentPlayer = 1
        console.log(currentPlayer)
        score1.style.color = "red"
        score2.style.color = "black"
        }   
    }
})

