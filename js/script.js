let     humanScore = 0;
let     computerScore = 0;
let     rock = document.querySelector( ".rock" );
let     paper = document.querySelector( ".paper" );
let     scissors = document.querySelector( ".scissors" );
let     score = document.querySelector( ".score" );
let     inputCPU = document.getElementById( "cpu" );
let     inputHuman = document.getElementById( "human" );

rock.addEventListener( "click", () => {
    checkWinner( "rock", computerChoice() );
    endGame();
} );

paper.addEventListener( "click", () => {
    checkWinner( "paper", computerChoice() );
    endGame();
} );

scissors.addEventListener( "click", () => {
    checkWinner( "scissors", computerChoice() );
    endGame();
} );

function    computerChoice()
{
    let     choice;
    if (Math.round(1 + Math.random() * 2) === 1)
        return ( "rock" );
    else if (Math.round(1 + Math.random() * 2) === 2)
        return ( "paper" );
    else
        return ( "scissors" );
}

function checkWinner(player1, player2)
{
    let     winner;

    winner = "unknown";
    if (player1 === "rock" && player2 === "paper")
        winner = "Computer";
    else if (player2 === "rock" && player1 === "paper")
        winner = "You";
    else if (player1 === "rock" && player2 === "scissors")
        winner = "You";
    else if (player2 === "rock" && player1 === "scissors")
        winner = "Computer";
    else if (player2 == "paper" && player1 == "scissors")
        winner = "You";
    else if (player1 == "paper" && player2 == "scissors")
        winner = "Computer";

    chooseWinner( winner );
}

function    chooseWinner( winner )
{
    if (winner === "You")
        humanScore++;
    else if (winner === "Computer")
        computerScore++;
    updateScore();
}

function    updateScore()
{
    inputHuman.value = `${humanScore}`;
    inputCPU.value = `${computerScore}`;
}

function    resetScore()
{
    humanScore = 0;
    computerScore = 0;
    inputCPU.value = 0;
    inputHuman.value = 0;
}

function    endGame()
{
    if ( humanScore > 4 || computerScore > 4 )
    {
        if ( humanScore > 4 )
            alert("Game Over.\n\t\tYou win!");
        else
            alert( "Game Over.\n\t\tCPU win!");
        resetScore();
    }
}