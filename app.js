let per = 0;
let com = 0;

function playRound(playerSelection, computerSelection) {
	let playerChoice = playerSelection.toLowerCase();
	let computerChoice = computerSelection.toLowerCase();
	let result;
	if (playerChoice == computerChoice) {
		// getComputerChoice();
		result = 'TIE';
	} else if (playerChoice == 'rock' && computerChoice == 'scissor') {
		result = `You win! ${playerChoice} beats ${computerChoice}`;
		per++;
	} else if (playerChoice == 'paper' && computerChoice == 'rock') {
		result = `You win! ${playerChoice} beats ${computerChoice}`;
		per++;
	} else if (playerChoice == 'scissor' && computerChoice == 'paper') {
		result = `You win! ${playerChoice} beats ${computerChoice}`;
		per++;
	} else {
		result = `You Lose! ${computerChoice} beats ${playerChoice} `;
		com++;
	}

	return console.log(result);
}

function game() {
	for (let i = 0; i <= 5; i++) {
		let playerSelection = prompt('RPS?');
		let computerSelection = getComputerChoice();
		playRound(playerSelection, computerSelection);
		console.log(`player : ${per}`);
	}

	if (per > com) {
		alert('YOU WIN!!');
	} else {
		alert('YOU LOST');
	}
}

function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissor'];
	let choice = Math.floor(Math.random() * 3);

	return choices[choice];
}

const playerSelection = 'paper';
const computerSelection = getComputerChoice();
game();
