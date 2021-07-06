var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");
var canvas_results = document.getElementById("the_canvas_results");
var context2 = canvas_results.getContext("2d");

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
var rounds = 1;
var winTextXPos;
var winTextYPos;
var cardTextYPos;
var cardTextYPos;
youPicked = "You picked ";
youWin = "You Win!";
youLose = "You Lose!";
youDraw = "Draw!";
var playScore;
var rivalScore;

const rock = new Image();//my images 
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

const star = new Image();
star.src = "star.png";

const starF = new Image();
starF.src = "starfilled.png";

context.shadowOffsetX = 5;//setting the shadows on the canvas 
context.shadowOffsetY = 3;
context.shadowColor = "rgba(80, 32, 131,0.3)";
context.shadowBlur = 2;
context2.fillStyle = "white";
context2.strokeStyle = "rgba(92, 11, 90, 1)";
context2.textAlign = "center";


canvas_results.addEventListener("mousedown", clicked, false);//Event listener to detect when the mouse has been clicked

function clicked(event) {
    let rect = canvas_results.getBoundingClientRect();//Get the boundaries of the canvas 
    
    var x = event.clientX - rect.left;//Get the measurement from the left of canvas
    var y = event.clientY - rect.top;//Get the measurement from the top of canvas
    event.preventDefault();
    if (x < 160 && x > 32 && y > 110 && y < 292 && cardIsPicked == false) { //coordinates of the cards on the canvas 
        playerPick = "rock";//picked vairable changes 
        cardIsPicked = true;//Detects of a card has been picked 
    }

    if (x < 300 && x > 172 && y > 110 && y < 292 && cardIsPicked == false) {
        playerPick = "paper";
        cardIsPicked = true;
    }

    if (x < 440 && x > 312 && y > 110 && y < 292 && cardIsPicked == false) {
        playerPick = "scissors";
        cardIsPicked = true;
    }

}

function randomNum(){

if (cardIsPicked == false) {//picks a random number between 0 and 2  if a card hasn't been picked 
    var randCard = Math.floor((Math.random() * 3));
}


if (randCard == 0) {//setting up computer selection of card
    computer = "rock";
}

if (randCard == 1) {
    computer = "paper";
}

if (randCard == 2) {
    computer = "scissors";
}

}

function animate() {
    context.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
    context.drawImage(rock, framex * SPRITE_WDT, 0, 700, 700, 0, 100, 200, 200);//draws the images 
    context.drawImage(paper, framex * SPRITE_WDT, 0, 700, 700, 140, 100, 200, 200);
    context.drawImage(scissors, framex * SPRITE_WDT, 0, 700, 700, 280, 100, 200, 200);
    context.drawImage(load, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200);
    
    //Player points
    context.drawImage(star, 0, 0, 700, 700, 40, 50, 200, 200);
    context.drawImage(star, 0, 0, 700, 700, 90, 50, 200, 200);
    context.drawImage(star, 0, 0, 700, 700, 140, 50, 200, 200);
    //Enemy points
    context.drawImage(star, 0, 0, 700, 700, 720, 50, 200, 200);
    context.drawImage(star, 0, 0, 700, 700, 670, 50, 200, 200);
    context.drawImage(star, 0, 0, 700, 700, 620, 50, 200, 200);

     if(playScore == 1){
    context2.drawImage(starF, 0, 0, 700, 700, 40, 50, 200, 200);
     }

      if(rivalScore == 1){
    context2.drawImage(starF, 0, 0, 700, 700, 620, 50, 200, 200);
     }

    if (speed % SLOW_FRAME == 0) {//anaimation loop that continues to update
        if (framex < 10) framex++;
        else framex = 0;
    }
    speed++;

}

function whenCardisPicked() {
    if (computer == "rock" && cardIsPicked == true)//shows the card that the computer has picked depending on computer variable 
    { context2.drawImage(rock2, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200); }

    if (computer == "paper" && cardIsPicked == true) { context2.drawImage(paper2, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200); }

    if (computer == "scissors" && cardIsPicked == true) { context2.drawImage(scissors2, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200, 200); }

    context2.font = "24px Arial";
    
    if (cardIsPicked == true) {//message appears when a card is picked 
        context2.fillText(youPicked + playerPick, 230, 315);
    }


    if (playerPick == "rock" && computer == "scissors" ||
        playerPick == "scissors" && computer == "paper" ||
        playerPick == "paper" && computer == "rock")//Winning conditions 
    {
        context2.font = "40px Arial";
        context2.fillText(youWin, 400, 370);
        playerScore++;
    }

    if (playerPick == "scissors" && computer == "rock" ||
        playerPick == "paper" && computer == "scissors" ||
        playerPick == "rock" && computer == "paper")//losing conditions 
    {
        context2.font = "40px Arial";
        context2.fillText(youLose, 400, 370);
        rivalScore++;
    }

    if (playerPick == "scissors" && computer == "scissors" ||
        playerPick == "paper" && computer == "paper" ||
        playerPick == "rock" && computer == "rock")//draw conditions 
    {
        context2.font = "40px Arial";
        context2.fillText(youDraw, 400, 370);//Draws the result on the screen 
    }
}

function nextRound() {
    
    if (cardIsPicked == true){
    setInterval(function erase(){
        context2.clearRect(0, 0, CANVAS_WDT, CANVAS_HGT);
        cardIsPicked = false;
        playerPick = "";
        computerPick = "";
        rounds++;
      },
      3000);
  
    }    

    
    document.getElementById("round").innerHTML = "round " + rounds;
   }

   

    //Ideas:
    //Move loading card to a location off the canvas, make all the texts variables so you can replace them with ""



function gameloop() {
    animate();
    randomNum();
    whenCardisPicked();
    nextRound();
    window.requestAnimationFrame(gameloop);
}


window.requestAnimationFrame(gameloop);
