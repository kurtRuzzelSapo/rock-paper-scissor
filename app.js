function playRound(playerSelection, computerSelection) {
	// your code here!
}
function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissor'];
	let choice = Math.floor(Math.random() * 3);

	return choices[choice];
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
