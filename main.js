var A_score = 0;
var B_score = 0;
var Random_Dice = 0;
var Turn_cnt = 0;

console.log("testing")

const userNumber = parseInt(prompt('플레이어 수를 입력하세요.'));
console.log(typeof(userNumber))

// function user() {
// 	for(const i=0; i < userNumber; i++) {
// 		const user = document.getElementsByClassName('player');
// 		console.log(user)
// 	}
// }

function Random() {
	const resultElement1 = document.getElementById('score2');	
	const resultElement = document.getElementById('score1');
	Random_Dice = Math.floor((Math.random())*8);
  	if(Random_Dice != 1){
  
  	let number = resultElement.innerText;
	number = parseInt(number) + Random_Dice

  	resultElement.innerText = number;
	}
	else{
		resultElement.innerText = "You lose"

		resultElement1.innerText = "You win"

	}


}

function Random1() {

	const resultElement = document.getElementById('score2');
	const resultElement1 = document.getElementById('score1');
	Random_Dice = Math.floor((Math.random())*8);
  	if(Random_Dice != 1){
  
  	let number = resultElement.innerText;
	number = parseInt(number) + Random_Dice

  	resultElement.innerText = number;
	}
	else{
		resultElement.innerText = "You lose"
		resultElement1.innerText = "You win"

	}



}

function init() {
		const resultElement = document.getElementById('score2');
		const resultElement1 = document.getElementById('score1');
		resultElement.innerText = 0
		resultElement1.innerText = 0


}



