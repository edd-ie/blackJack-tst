function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function print(val){
    console.log(val);
}



const button = document.getElementById('start')
const cardA = document.getElementById('one')
const cardB = document.getElementById('two')
const out = document.getElementById('three');
const results = document.getElementById('four');

function gameLogic(){
    let card1 = Math.floor(randomNumber(2,12));
    let card2 = Math.floor(randomNumber(2,12));
    let sum = card1 + card2;
    let won = false;
    let alive = true; 
    let msg = "";
    if (sum === 21){
        results.style.color = 'gold';
        won = true;
        msg = "BlackJack!!";
    }
    else if(sum > 21){
        results.style.color = 'red';
        alive = false;
        msg = "Game Over!";
    }
    else{
        results.style.color = 'white';
        msg = "Play another Card!";
    }

    cardA.textContent = card1;
    cardB.textContent = card2;
    out.textContent = sum;
    results.textContent = msg;
};




button.addEventListener('mousedown', function roll(){
    gameLogic();
    // alert("yeah")
})
