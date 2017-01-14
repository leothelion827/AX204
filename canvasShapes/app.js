console.log("JS LINKED");

// Grab my canvas as a DOM element
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

// Making shape no.1
ctx.fillStyle = "rgb(0,100,100)";
// x and y of top left corner and then width and height
ctx.fillRect(100, 100, 100, 100);
ctx.strokeStyle = "rbg(0,100,100)";
ctx.strokeRect(80, 80, 140, 140);
ctx.clearRect(120, 120, 60, 60);

// Making shape no.2
var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.fillStyle = "rgb(0,100,100)";
ctx2.fillRect(0,0,150,150);
ctx2.fillRect(150,150,150,150);

// Making shape no.3
var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.fillStyle = "rgb(0,100,100)";
var x = 0;
var y = 0;
var width = 300;
var height = 300;
ctx3.fillRect(x, y, width, height);
while (width > 0) {
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx3.clearRect(x, y, width, height);
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx3.fillRect(x, y, width, height);
}
// Making shape no.4
var c4 = document.getElementById('myCanvas4')
var ctx4 = c4.getContext('2d')
ctx4.fillStyle = "brown"
ctx4.fillRect(0,0,300,300);
ctx4.clearRect(20,20,120,120);
ctx4.clearRect(20,160,120,120);
ctx4.clearRect(160,20,120,120);
ctx4.clearRect(160,160,120,120);
// Making shape no.5
var c5 = document.getElementById('myCanvas5')
var ctx5 = c5.getContext('2d')
ctx5.fillStyle = "rgb(0,100,100)";''
ctx5.fillRect(0,0,100,100);
ctx5.fillRect(200,0,100,100);
ctx5.fillRect(100,100,100,100);
ctx5.fillRect(200,200,100,100);
ctx5.fillRect(0,200,100,100);