var A_score = 0;
var B_score = 0;
var Random_Dice = 0;
var Turn_cnt = 0;

console.log("testing")

function Random() {
	Random_Dice = Math.floor((Math.random())*8);
  
	const resultElement = document.getElementById('score1');
  
  	let number = resultElement.innerText;

	number = parseInt(number) + Random_Dice

  	resultElement.innerText = number;
}



