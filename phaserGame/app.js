console.log("OMG NO U CLEARED VIRUS NO ME TRIGGERED!")

var game = new Phaser.Game(800,600,Phaser.AUTO,'',{preload: preload, create: create, update: update})
var score = 0;
var life = 0;

function preload(){
game.load.image('sky','assets/sky.png');
game.load.image('ground','assets/platform.png');
game.load.image('star','assets/star.png');
game.load.spritesheet('dude','assets/dude.png',32,48);
game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create(){
game.physics.startSystem(Phaser.Physics.ARCADE);
//add the sky
game.add.sprite(0,0,'sky');
platforms = game.add.physicsGroup();
platform.enableBoy = true;
//add the fround
var ground = platforms.create(0,game.world.height-50,'ground');
ground.scale.setTo(2,2);
ground.body,inmovable = true;
//add the platforms
var ledge = platforms.create(400,400,'ground');
ledge.body.inmovable = true;
ledge = platforms.create(-150,250,'ground');
ledge.body.inmovable = true;
}

function update(){

}

