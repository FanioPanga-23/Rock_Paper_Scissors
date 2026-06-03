let     rock = document.querySelector( ".rock" );
let     paper = document.querySelector( ".paper" );
let     scissors = document.querySelector( ".scissors" );
let     score = document.querySelector( ".score" );

rock.addEventListener( "click", ()=> {console.log("Chamou!!")});


let     humanScore;
let     computerScore;
const   rock1 = "rock";
const   paper1 = "paper";
const   scissors1 = "scissors";

humanScore = 0;
computerScore = 0;

function    computerChoice()
{
    let     choice;
    if (Math.round(1 + Math.random() * 2) === 1)
        return (rock);
    else if (Math.round(1 + Math.random() * 2) === 2)
        return (paper);
    else
        return (scissors);
}

function checkWinner(player1, player2)
{
    let     winner;

    if (player1 === player2)
        return (alert("Draw"));

    winner = "unknown";
    if (player1 === rock && player2 === paper)
        winner = "Computer";
    else if (player2 === rock && player1 === paper)
        winner = "You";
    else if (player1 === rock && player2 === scissors)
        winner = "You";
    else if (player2 === rock && player1 === scissors)
        winner = "Computer";
    else if (player2 == paper && player1 == scissors)
        winner = "You";
    else if (player1 == paper && player2 == scissors)
        winner = "Computer";

    return (winner);
}

function    chooseWinner( winner )
{
    if (winner === "You")
    {
        humanScore++;
        alert(`${winner} win`);
    }
    else if (winner === "Computer")
    {
        computerScore++;
        alert(`${winner} wins`);
    }
    alert(`Score:\nYOU ${humanScore} - ${computerScore} CPU`);
}

function    playRound(player1, player2 )
{
    return (chooseWinner(checkWinner(player1, player2)));
}

function playGame()
{
    for (let i = 1; i <= 5; i++)
    {
        alert(`Round ${i}`);
        playRound(humanChoice(), computerChoice());
    }
}

playGame();