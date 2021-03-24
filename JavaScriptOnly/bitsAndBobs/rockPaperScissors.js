const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("You did not pick a valid choice, the game is called Rock, Paper, Scissors dummy!!!")
    }
    };
    
    function getComputerChoice () {
      const randomNumber = Math.floor(Math.random() * 3);
      switch (randomNumber) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
      }  
    }
    
    function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return "The game is a tie!";
      };
    
      if (userChoice === 'rock') {
        if (computerChoice === "paper") {
          return "The computer beat you!"
        } else {
          return "Winner winner chicken dinner...."
        }
      };
    
      if (userChoice === 'paper') {
        if (computerChoice === "scissors") {
          return "Beaten by a machine loser!!!"
        } else {
          return "You beautiful clever beast you, you win...."
        };
      };
       
       if (userChoice === 'scissors') {
        if (computerChoice === "rock") {
          return "Robots will rule the world!!!"
        } else {
          return "You won, now go make your father a cup of tea...."
        }
      }
    };
    
    
    const playGame = () => {
      const userChoice = getUserChoice('scissors');
      const computerChoice = getComputerChoice();
      console.log('You chose: ' + userChoice);
      console.log('The computer chose: ' + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    }
    
    playGame();
    
    
    
    
    
    