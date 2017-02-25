console.log('HELLO MOM')
var canvas;
var ctx;
//hold some coorodinates
var x = 600;
var y = 300;
//holding the magnitude of our movement(speedz)
var mx = 2;
var my = 4;
//hold the width and height of the canvas
var width = 600;
var height = 300;

function init(){
	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');
	return setInterval(draw, 0);
}
//draw a circle function
function circle(x, y, r){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.closePath();
	ctx.fillStyle = "orange";
	ctx.fill();
}

//clear the canvas function
function clear(){
	ctx.clearRect(0, 0, width, height);
}

function draw(){
	clear();
	circle(x, y, 30);

	//move circle
	x += mx;
	y += my;

	// stay inside canvas
	if (x + mx > width || x + mx < 0){
		mx = -mx
	}

	if  (y + my > height || y + my < 0){
		my = -my
	}
}

init();