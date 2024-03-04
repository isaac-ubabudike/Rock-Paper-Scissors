const randomSelection = ['rock', 'paper', 'scissors'];


function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = randomSelection[randomNumber];
    return computerChoice;
}

function computeResult(input, holdComputerVal){
    userVal = String(input.toLowerCase());
    let exit = true;
    //holdComputerVal = getComputerChoice();
    console.log(userVal)
    while (exit){
        if ((userVal != 'rock') && (userVal != 'paper') && (userVal != 'scissors')){
            return 'incorrect';
            exit = false;
        } else if (userVal == holdComputerVal){
            return 'Tie';
            exit = false;
        }else if(holdComputerVal != userVal){
            if ((userVal == 'paper') && (holdComputerVal == 'Rock')){
                return 'userVal';
            }else if((userVal == 'scissors') && (holdComputerVal == 'paper')){
                return 'userVal';
            }else if((userVal == 'rock') && (holdComputerVal == 'scissors')){
                return 'userVal';
            }else{
                return 'computer';
            }
            exit = false;
        }
    }
}

function playGame(){
    let userWinCount =  0;
    let computerWinCount = 0;
    let countTies = 0;
    let count = 0;
    let total = 0;
    console.log('The game is best out of 5, ties do not count you will have to play until you win 3 times!!!')
    while (count < 5){
        userInput = prompt(`Enter your your choice here: `)
        const answer = computeResult(userInput, getComputerChoice());
        if(answer == 'userVal'){
            console.log(`You won, your choice was ${userInput}, and the computer's choice was ${getComputerChoice()}`);
            userWinCount += 1;
        } else if(answer == 'computer'){
            console.log(`You took the L, your choice was ${userInput}, and the computer's choice was ${getComputerChoice()}`);
            computerWinCount += 1;
        } else if (answer == 'Tie'){
            console.log(`The game was a tie, your choice was ${userInput}, and the computer's choice was ${getComputerChoice()}`);
            countTies += 1;
            count -= 1;
        } else if (answer == 'incorrect'){
            console.log(`You enter incorrectly! make sure to check for spelling "'rock', 'paper', 'scissors'"`);
        }
        count += 1;
        total += 1;
    }

    return `Game over!!! out of 5 games, your score is: ${userWinCount} and the computer score is ${computerWinCount}, you played a total of ${total} games and you tied ${countTies} times`;
}

