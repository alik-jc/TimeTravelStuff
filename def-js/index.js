/*const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const getUserChoice = () => {
    let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return userInput;
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    }
    return "Computer wins!";
}
const playGame = () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    alert(`You chose: ${userChoice}`);
    alert(`Computer chose: ${computerChoice}`);
    alert(determineWinner(userChoice, computerChoice));
}
playGame();
const minimo = 0
const maximo = 2
const numRand = (minimo, maximo) => {
    const random = Math.floor(Math.random() * (minimo + maximo + 1));
    return random;
};
*/