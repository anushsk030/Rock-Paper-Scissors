let userScore = 0, compScore = 0;
let user = document.querySelector("#user"); 
let comp = document.querySelector("#comp"); 
let choices = document.querySelectorAll(".choice img"); 
let msg = document.querySelector("#msg"); 
let messageBox = document.querySelector(".msg-box");


for (let choice of choices) {
    choice.addEventListener("click", () => {
        const userClicks = choice.getAttribute("id");
        console.log(userClicks, "was selected by user");
        playGame(userClicks);
    });
}


const compGenerates = () => {
    let num = Math.floor(Math.random() * 3);
    let arr = ["rock", "paper", "scissors"];
    console.log(arr[num], "was selected by comp");
    return arr[num];
}


const playGame = (userChoice) => {
    let compChoice = compGenerates();

    if (userChoice === compChoice) {
        msg.innerText = "It was a draw!";
        messageBox.style.backgroundColor = "#081B31";
    } else if (userChoice === "rock") {
        if (compChoice === "paper") {
            compScore++;
            msg.innerText = "You lose! Paper beats Rock.";
            messageBox.style.backgroundColor = "red";
            comp.innerText = compScore;
        } else {
            userScore++;
            msg.innerText = "You win! Rock beats Scissors.";
            messageBox.style.backgroundColor = "green";
            user.innerText = userScore;
        }
    } else if (userChoice === "paper") {
        if (compChoice === "rock") {
            userScore++;
            msg.innerText = "You win! Paper beats Rock.";
            messageBox.style.backgroundColor = "green";
            user.innerText = userScore;
        } else {
            compScore++;
            msg.innerText = "You lose! Scissors beats Paper.";
            messageBox.style.backgroundColor = "red";
            comp.innerText = compScore;
        }
    } else if (userChoice === "scissors") {
        if (compChoice === "rock") {
            compScore++;
            msg.innerText = "You lose! Rock beats Scissors.";
            messageBox.style.backgroundColor = "red";
            comp.innerText = compScore;
        } else {
            userScore++;
            msg.innerText = "You win! Scissors beats Paper.";
            messageBox.style.backgroundColor = "green";
            user.innerText = userScore;
        }
    }
}
