console.log("THIS PAGE HAS A REALLY BAD VIRUS OMG LOLOLOLOLOLOL GET TRIGGERD!");

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
// set up pen
ctx.beginPath();
//change color of line
ctx.strokeStyle = "green";
ctx.moveTo(75, 0);
ctx.lineTo(150,100);
ctx.lineTo(75, 200);
ctx.lineTo(0, 100);
ctx.closePath();
//telling canvas to draw
ctx.stroke();
ctx.fillStyle = "gold";
ctx.fill();

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.arc(150, 150, 50, 0, 6.28);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "red";
ctx2.fill();

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.strokeStyle = "green";
ctx3.moveTo(0, 0);
ctx3.lineTo(300, 300);
ctx3.lineTo(300, 0);
ctx3.lineTo(0, 300);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle = "blue";
ctx3.fill();

//draw scene
var cs = document.getElementById("scene");
ctxs = cs.getContext('2d');
//sky and land
ctxs.fillStyle = "green";
ctxs.fillRect(0,350, 800, 150);
ctxs.fillStyle = "cyan";
ctxs.fillRect(0, 0, 800, 350);
//sun
ctxs.beginPath();
ctxs.arc(150, 150, 50, 0, 6.28);
ctxs.closePath();
ctxs.stroke();
ctxs.fillStyle = "yellow";
ctxs.fill();
//road
ctxs.beginPath();
ctxs.moveTo(350, 350);
ctxs.lineTo(300, 500);
ctxs.lineTo(430, 500);
ctxs.lineTo(400, 350);
ctxs.strokeStyle = "green";
ctxs.stroke();
ctxs.fillStyle = "grey";
ctxs.fill();
ctxs.moveTo(375, 350);
ctxs.lineTo(375, 500);
ctxs.stroke();
//building
ctxs.fillRect(100, 250, 200, 100);
ctxs.clearRect(130, 310, 20 ,20);