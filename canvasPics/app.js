console.log("THIS PAGE HAS A REALLY BAD VIRUS OMG LOLOLOLOLOLOL GET TRIGGERD!");

//create an img
 var pika = new Image();
 var cha = new Image();
 var art = new Image();
 var zap = new Image();
//give img source
pika.src = "pika.png"
cha.src = "cha.png"
art.src = "art.png"
zap.src = "zap.png"
//draw img onto canvas
pika.onload = function(){
	ctxs.drawImage(pika, 150, 300, 60, 70);
}
cha.onload = function(){
	ctxs.drawImage(cha, 500, 200, 300, 160);
}
art.onload = function(){
	ctxs.drawImage(art, 100, 100, 200, 120);
}
zap.onload = function(){
	ctxs.drawImage(zap, 400, 100, 200, 120);
}

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