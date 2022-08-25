document.addEventListener("DOMContentLoaded", (event) => {
  //declare the variables
  const paper = document.querySelector("button.paper");
  const rock = document.querySelector("button.rock");
  const scissors = document.querySelector("button.scissors");
  const player1 = document.querySelector("#player1");
  const player2 = document.querySelector("#player2");
  let userChoice;
  let computerChoice;

  userChooses();

  //start and reset state
  //function cleanState() {}

  //assign the value to userChoice
  function userChooses() {
    paper.addEventListener("click", onPaperClicked);
    rock.addEventListener("click", onRockClicked);
    scissors.addEventListener("click", onScissorsClicked);

    function onPaperClicked() {
      userChoice = 0;
      console.log(userChoice);
      computerChooses();
    }

    function onRockClicked() {
      userChoice = 1;
      console.log(userChoice);
      computerChooses();
    }

    function onScissorsClicked() {
      userChoice = 2;
      computerChooses();
    }
  }

  //decide randomly on one of the options
  function computerChooses() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      computerChoice = 0;
    }
    if (randomNumber === 1) {
      computerChoice = 1;
    }
    if (randomNumber === 2) {
      computerChoice = 2;
    }
    showComputerChoice();
  }

  //show which option computer chose
  function showComputerChoice() {
    if (computerChoice === 0) {
      let computerChoiceMessage = `Computer chose paper`;
      document.querySelector("#computerChoice").innerHTML =
        computerChoiceMessage;
    } else if (computerChoice === 1) {
      let computerChoiceMessage = `Computer chose rock`;
      document.querySelector("#computerChoice").innerHTML =
        computerChoiceMessage;
    } else if(computerChoice === 2) {
      let computerChoiceMessage = `Computer chose scissors`;
      document.querySelector("#computerChoice").innerHTML =
        computerChoiceMessage;
    }
    assignWinner();
  }

  //check who won and print the winner to the screen
  function assignWinner() {
    function draw() {
      document.querySelector("#draw").classList.remove("hidden");
    }

    function userLoses() {
      document.querySelector("#lose").classList.remove("hidden");
    }

    function userWins() {
      document.querySelector("#win").classList.remove("hidden");
    }

    if (computerChoice === userChoice) {
      draw();
    }

    if (computerChoice === 0 && userChoice === 1) {
      userLoses();
    }

    if (computerChoice === 1 && userChoice === 2) {
      userLoses();
    }

    if (computerChoice === 2 && userChoice === 0) {
      userLoses();
    }

    if (computerChoice === 0 && userChoice === 2) {
      userWins();
    }

    if (computerChoice === 1 && userChoice === 0) {
      userWins();
    }

    if (computerChoice === 2 && userChoice === 1) {
      userWins();
    }
  }
});
