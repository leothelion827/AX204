console.log("wht")
var canvas;
var ctx;
var x = 300;
var y = 300;
var r = 20;
//keep track of speed in x and y directions
var mx = 0;
var my = 0;
var goodX;
var goodY;
var badX;
var badY;
var fruitwidth = 50;
var fruitheight = 50;
var goodCollision = false;
var WIDTH = 600;
var HEIGHT = 600;
var score = 0;

function circle(x, y, r){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.closePath();
	ctx.fillStyle = "tomato";
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

	function init(){
		canvas = document.getElementById('myCanvas');
			ctx = canvas.getContext('2d');
		goodX = Math.floor(Math.random() * 550);
		goodY = Math.floor(Math.random() * 550);
		badX = Math.floor(Math.random() * 550);
		badY = Math.floor(Math.random() * 550);
		window.onkeydown = keydownControl;
		return setInterval(draw, 10);
	}

function draw(){
 	clear();
	circle(x, y, r);
	drawGood();
	drawBad();
	// tells our sprite to bounce off the walls and go in the opposite direction
	if (x + mx > WIDTH - r || x + mx < 0 + r){
		mx = -mx
	} else if (y + my > WIDTH - r || y + my < 0 + r) {
		my = -my
	}
	// moves our sprite
	x += mx;  //means the same as x = x + mx
	y += my;
	collisionHandle();
	collisionCheck();
}

fucntion collisionHandle(){

}

function collisionCheck(){

}

function keydownControl(e){
	if(e.keyCode == 37){
		mx = -4
		my = 0;

	} else if(e.keyCode == 38){
		mx = 0;
		my = -4;
		
	} else if(e.keyCode == 39){
		mx = 4;
		my = 0;
		
	} else if(e.keyCode == 40){
		mx = 0;
		my = 4;
		
	}
}

function drawGood(){

}

function drawBad(){

}