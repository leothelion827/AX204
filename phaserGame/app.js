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
	platforms.enableBody = true;
	//add the fround
	var ground = platforms.create(0,game.world.height-50,'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	//add the platforms
	var ledge = platforms.create(400,400,'ground');
	ledge = platforms.create(-150,250,'ground');
	ledge.body.immovable = true;
	ledge.body.immovable = true;
	//add the player
	player = game.add.sprite(32,game.world.height - 220,'dude')
	//adding player animations
	player.animations.add('left',[0,1,2,3],10,true);
	player.animations.add('right',[5,6,7,8],10,true);
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;
	//create keyboard events
	cursors = game.input.keyboard.createCursorKeys();
	//create the stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;
	//making 12 stars
	for (var i = 0; i < 12; i++){
		var star = stars.create(i * 70,0,'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}
	// Setting style for text
  	var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    //  The Text is positioned at these coordinates within textbound
    scorelabel = game.add.text(-60, 0, "Your score is: ", style);
    scoretext = game.add.text(70, 0, score, style);
    scorelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    scoretext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    //  We'll set the bounds to be from x0, y520 (top down) and be 800px wide by 100px high
    scorelabel.setTextBounds(0, 520, 800, 100);
    scoretext.setTextBounds(0, 520, 800, 100);
    //  Doing the same for lives count
    lifelabel = game.add.text(-300, 0, "Lives: ", style);
    lifetext = game.add.text(-240, 0, life, style);
    lifelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    lifetext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    //  We'll set the bounds to be from x0, y520 (top down) and be 800px wide by 100px high
    lifelabel.setTextBounds(0, 0, 800, 100);
    lifetext.setTextBounds(0, 0, 800, 100);
}

function update(){
	// player collides with the platforms
	game.physics.arcade.collide(player, platforms);
	//reset the player's movement if there are no events
	player.body.velocity.x = 0;
	//program the keyboard events
	if (cursors.left.isDown){
	player.body.velocity.x = -150;//moving sprite left
	player.animations.play('left');

	} else if (cursors.right.isDown){
		player.body.velocity.y = 150;//moving sprite right
		player.animations.play('right');
	} else{
		player.animations.stop();
		player.frame = 4;
	}
	//allow th player to jump if touching the ground
	if (cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;

	}

    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.overLap(player,stars,collectStar,null,this);

    function collectStar(player,star){
    	star.kill();
    	score = score + 1;
    	//reflect the score
    	scoretext.setText(score);
    	//create a new star
    	star = stars.create(i * 70,0,'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;

    }
}

