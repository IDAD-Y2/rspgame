var canvas = document.getElementById("the_canvas");
var context = canvas.getContext("2d");

const CANVAS_WDT = canvas.width = 800;
const CANVAS_HGT = canvas.height = 400;
const SPRITE_WDT = 700; 
let framex = 0;
let speed = 0;
const SLOW_FRAME = 6;
var pickCardRand;

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

function animate() {
context.clearRect(0, 0, CANVAS_WDT ,CANVAS_HGT);
context.drawImage(rock, framex * SPRITE_WDT, 0, 700, 700, 0, 100, 200,200);
context.drawImage(paper, framex * SPRITE_WDT, 0, 700, 700, 140, 100, 200,200);
context.drawImage(scissors, framex * SPRITE_WDT, 0, 700, 700, 280, 100, 200,200);
context.drawImage(load, framex * SPRITE_WDT, 0, 700, 700, 600, 100, 200,200);
if (speed % SLOW_FRAME == 0){
if (framex < 10) framex++;
else framex = 0;
}
speed++;
}

function gameloop() { 
    animate();
    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);
