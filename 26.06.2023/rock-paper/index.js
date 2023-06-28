//variable
let playerPoints = 0;
let computerPoints = 0;
let drawsPoints = 0;

//Connection
const connGame = document.getElementById("game");
//function
function createButton(func, btnName) {
  return `<button onclick="${func}">${btnName}</button>`;
}

function setGame() {
  //Connections
  const connMyPoint = document.getElementById("myPoint");
  const connOpponentPoint = document.getElementById("opponentPoint");
  const connDrawsPoint = document.getElementById("draws");
  //Set points
  connMyPoint.innerHTML = playerPoints;
  connOpponentPoint.innerHTML = computerPoints;
  connDrawsPoint.innerHTML = drawsPoints;
  //Menu
  createMenu();
}

function playerChoice(choice) {
  let result = "";
  //Menu
  if (choice === "new_game") {
    result = `
        <h3>Choose one:</h3>
        ${createButton("playerChoice('rock')", "ROCK")}
        ${createButton("playerChoice('paper')", "PAPER")}
        ${createButton("playerChoice('scissors')", "SCISSORS")}
        `;
  } else if (choice === "restart") {
    playerPoints = 0;
    computerPoints = 0;
    drawsPoints = 0;
    return setGame();
  }
  //Game
  else if (choice === "rock") {
    let computerChoice = computerRandom();
    if (computerChoice === "rock") {
      drawsPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("DRAW!");
    } else if (computerChoice === "paper") {
      computerPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("Computer WIN!");
    } else if (computerChoice === "scissors") {
      playerPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("You WIN!");
    }
    return setGame();
  } else if (choice === "paper") {
    let computerChoice = computerRandom();
    if (computerChoice === "rock") {
      playerPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("You WIN!");
    } else if (computerChoice === "paper") {
      drawsPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("DRAW!");
    } else if (computerChoice === "scissors") {
      computerPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("Computer WIN!");
    }
    return setGame();
  } else if (choice === "scissors") {
    let computerChoice = computerRandom();
    if (computerChoice === "rock") {
      computerPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("Computer WIN!");
    } else if (computerChoice === "paper") {
      playerPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("You WIN!");
    } else if (computerChoice === "scissors") {
      drawsPoints++;
      console.log(`Player:${choice} Computer:${computerChoice}`);
      alert("DRAW!");
    }
    return setGame();
  }
  connGame.innerHTML = result;
}

//Computer random
function computerRandom() {
  //Random Number from 0 to 2 (length 3) + 1 (we expect value from 1 to 3)
  let computer = Math.floor(Math.random() * 3) + 1;
  //if random value is 1
  if (computer === 1) {
    return `rock`;
    //if random value is 2
  } else if (computer === 2) {
    return `paper`;
    //if random value is 3
  } else if (computer === 3) {
    return `scissors`;
  }
}

function createMenu() {
  let result = "";
  //Create Options
  result += createButton("playerChoice('new_game')", "NEW GAME");
  result += createButton("playerChoice('restart')", "RESTART");
  connGame.innerHTML = result;
}

setGame();
