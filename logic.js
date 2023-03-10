function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function print(val){
    console.log(val);
}

let card1 = Math.floor(randomNumber(2,11));
let card2 = Math.floor(randomNumber(2,11));
let won = false;
let alive = true; 
let msg = "";

let sum = card1 + card2;

const button = document.getElementById('start')
const cardA = document.getElementById('card1')
const cardB = document.getElementById('card2')

function gameLogic(add){
    if (add === 21){
        won = true;
        msg = "BlackJack!!";
    }
    else if(add > 21){
        alive = false;
        msg = "Game Over!";
    }
    else{
        msg = "Want another Card?";
    }

    cardA.textContent = "Card 1: " + card1;
    cardB.textContent = "Card 2: " + card2;
}




button.addEventListener('mousedown', function roll(){
    gameLogic(sum);
    alert("yeah")
})
