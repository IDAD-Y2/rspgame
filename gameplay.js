var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");

const CANVAS_WDT = canvas.width = 800;
const CANVAS_HGT = canvas.height = 400;
const SPRITE_WDT = 700;
let framex = 0;
let speed = 0;
const SLOW_FRAME = 6;
var pickCardRand;
var playerPick;
var computerPick;
var cardIsPicked = false;  
var rounds; 

const rock = new Image();
rock.src = "rock.png";

const paper = new Image();
paper.src = "paper.png";

const scissors = new Image();
scissors.src = "scissors.png";

const rock2 = new Image();
rock2.src = "rock.png";

const paper2 = new Image();
paper2.src = "paper.png";

const scissors2 = new Image();
scissors2.src = "scissors.png";

const load = new Image();
load.src = "load.png";

context.shadowOffsetX = 5;
context.shadowOffsetY = 3;
context.shadowColor = "rgba(80, 32, 131,0.2)";
context.shadowBlur = 2;

canvas.addEventListener("mousedown", clicked, false);

function clicked(event) {
    let rect = canvas.getBoundingClientRect();
    event.preventDefault();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    if (x < 160 && x > 32 && y > 110 && y < 292) { //780 = 580+(200) <- image width
        playerPick = "rock";
        cardIsPicked = true;
    }

    if (x < 300 && x > 172 && y > 110 && y < 292) { //780 = 580+(200) <- image width
        playerPick = "paper";
        cardIsPicked = true;
    }

    if (x < 440 && x > 312 && y > 110 && y < 292) { //780 = 580+(200) <- image width
        playerPick = "scissors";
        cardIsPicked = true;
    }
}



    var randCard = Math.floor((Math.random() * 3));
    
    if (randCard == 0){
        computer = "rock";     
    }

    if (randCard == 1){
        computer = "paper";     
    }

    if (randCard == 2){
        computer = "scissors";     
    }


function animate() {
    context.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
    context.drawImage(rock, framex * SPRITE_WDT, 0, 700, 700, 0, 100, 200, 200);
    context.drawImage(paper, framex * SPRITE_WDT, 0, 700, 700, 140, 100, 200, 200);
    context.drawImage(scissors, framex * SPRITE_WDT, 0, 700, 700, 280, 100, 200, 200);
    context.drawImage(load, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200);
    if (speed % SLOW_FRAME == 0) {
        if (framex < 10) framex++;
        else framex = 0;
    }
    speed++;

    if (cardIsPicked == true) {
        context.font = "40px Arial";
        context.fillStyle = "white";
        context.strokeStyle = "rgba(92, 11, 90, 1)";
        context.textAlign = "center";
        context.fillText("You picked " + playerPick, 230, 330);
        context.strokeText("You picked " + playerPick, 230, 330);
    }

    if (computer == "rock" && cardIsPicked == true)
    {context.drawImage(rock2, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200);}

    if (computer == "paper" && cardIsPicked == true)
    {context.drawImage(paper2, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200);}

    if (computer == "scissors" && cardIsPicked == true )
    {context.drawImage(scissors2, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200);}

    if (playerPick == "rock" && computer == "scissors" ||
        playerPick == "scissors" && computer == "paper" ||
        playerPick == "paper" && computer == "rock")
    { context.font = "40px Arial";
    context.fillStyle = "white";
    context.strokeStyle = "rgba(92, 11, 90, 1)";
    context.textAlign = "center";
    context.fillText("You WIN", 400, 370);
    context.strokeText("You WIN", 400, 370);}

    if (playerPick == "scissors" && computer == "rock" ||
playerPick == "paper" && computer == "scissors" ||
playerPick == "rock" && computer == "paper")
{ 
context.fillText("You LOSE", 400, 370);
context.strokeText("You LOSE", 400, 370);
}

if (playerPick == "scissors" && computer == "scissors" ||
playerPick == "paper" && computer == "paper" ||
playerPick == "rock" && computer == "rock")
{ 
context.fillText("DRAW", 400, 370);
context.strokeText("DRAW", 400, 370);
}



}



function gameloop() {
    animate();
    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);
