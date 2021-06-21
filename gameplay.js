var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");

const CANVAS_WDT = canvas.width = 800;
const CANVAS_HGT = canvas.height = 400;
const SPRITE_WDT = 309; 
let framex = 0;
let speed = 0;
const SLOW_FRAME = 5;

const rock = new Image();
rock.src = "rock.png";

const paper = new Image();
paper.src = "paper.png";

const scissors = new Image();
scissors.src = "scissors.png";

function animate() {
context.clearRect(0, 0, CANVAS_WDT ,CANVAS_HGT);
context.drawImage(rock, framex * SPRITE_WDT, 0, 300, 300, 0, 100, 150,150);
context.drawImage(paper, framex * SPRITE_WDT, 0, 300, 300, 160, 100, 150,150);
context.drawImage(scissors, framex * SPRITE_WDT, 0, 300, 300, 310, 100, 150,150);
if (speed % SLOW_FRAME == 0){
if (framex < 3) framex++;
else framex = 0;
}
speed++;
}

function gameloop() { 
    animate();
    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);
