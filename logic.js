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
}
gameLogic(sum)

print(`Card1 = ${card1} \nCard2 = ${card2} 
        \nGame state: \nAlive = ${alive} \nWon = ${won}
        \n${msg}`);