let playGame = confirm("shall we play rock paper scissor");
if(playGame){
    let playerChoice = prompt("please enter rock or paper or scissor");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scisoor"
        ){
            let computerChoice = Math.floor(Math.random()*3 +1);
            let computer =
            computerChoice === 1 ?"rock"
            : computerChoice === 2 ?"paper"
            : "scissor";
            let result = 
            playerOne === computer ? "Match Tie"
            : playerOne === "rock" && computer === "paper"
            ?`playerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins`
            : playerOne === "paper" && computer === "scissor"
            ?`playerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins`
            : playerOne === "scissor" && computer === "rock"
            ?`playerOne: ${playerOne}\ncomputer: ${computer}\nComputer Wins`
            :`playerOne: ${playerOne}\ncomputer: ${computer}\nPlayerone Wins`;
            alert(result);
            let playAgain = confirm("play again");
            playAgain ? location.reload() :alert("ok thanks for playing")

        }
        else{
            alert("you didn't enter rock paper scissor");
        }

    }
    else{
        alert("ok your mind is changed we play next time");
    }
}
else{
    alert("ok play next time");
}