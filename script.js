// RPS JS
// Rock=0 Paper=1 Scissors=2

function Rock(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="Draw! Your opponent guessed Rock too!";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="You Lost! Your opponent guessed Paper!";
		}			
		else{
			document.getElementById("Result").innerHTML="You Win! Your opponent guessed Scissors!";
		}
}
		
function Paper(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="You Win! Your opponent guessed Rock";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="Draw! Your opponent guessed Paper too!";
		}			
		else{
			document.getElementById("Result").innerHTML="You Lost! Your opponent guessed Scissors!";
		}
}	
		
function Scissors(){
	randomNum=Math.floor(Math.random()*3);
		if (randomNum==0){
			document.getElementById("Result").innerHTML="You Lost! Your opponent guessed Rock!";
		}			
		else if (randomNum==1){
			document.getElementById("Result").innerHTML="You Win! Your opponent guessed Paper!";
		}			
		else{
			document.getElementById("Result").innerHTML="Draw! Your opponent guessed Scissors too!";
		}
}