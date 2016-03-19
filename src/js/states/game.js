//var Player = require('../models/player.js');

var game = function () {
  this.testentity = null;
};

module.exports = game;

const textures = ["testsprite", "bananurai", "pupper"];

game.prototype = {
  texture: 0,
  create: function () {
    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;
    this.add.sprite(0,0,"Dan");
    var key1;
    var key2;
    var songkey=this.input.keyboard.addKey(Phaser.Keyboard.ZERO);
    var left = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var right = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var up = this.input.keyboard.addKey(Phaser.Keyboard.UP);
    var down = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    key2=this.input.keyboard.addKey(Phaser.Keyboard.ONE);
    key2.onDown.add(this.changeTexture, this);

    song = this.add.audio('gamesong');
    song.play ();
   // song.loop.true ();

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.startSystem(Phaser.Physics.P2JS);

    image = this.add.sprite(0, 0, 'Enemy');
    //this.physics.arcade.gravity.y=20;
    player = this.add.sprite(1, 1, 'testsprite');
    //player.collideWorldBounds = true;
    player.scale.setTo(.5,.5);
    player.inputEnabled = true;
    image.scale.setTo(.7,.7);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.physics.enable(image, Phaser.Physics.ARCADE);
    //this.physics.enable(player, Phaser.Physics.ARCADE);
    this.physics.enable(player, Phaser.Physics.P2JS);
    this.physics.enable(image, Phaser.Physics.P2JS);

    image.body.velocity.setTo(200,200);
    image.body.collideWorldBounds = true;
    player.body.collideWorldBounds = true;
    image.body.bounce.set(1);
   // this.game.world.setBounds(0,0,1000,10000);

    this.game.camera.follow(this.player);
    var playerCollisionGroup = this.physics.p2.createCollisionGroup();
    var narbrawlCollisionGroup = this.physics.p2.createCollisionGroup();
    this.physics.p2.updateBoundsCollisionGroup();

  },

  update: function () {
    var key1=this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    // image.angle += 100;
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    player.body.angularVelocity = 0;
    if (this.cursors.left.isDown)
    {
      player.body.velocity.x = -200;
    }
    if (this.cursors.right.isDown)
    {
      player.body.velocity.x = 200;
    }
    if (this.cursors.up.isDown)
    {
      player.body.velocity.y = -200;
    }
    if (this.cursors.down.isDown)
    {
      player.body.velocity.y = 200;
    }
    if (key1.isDown) {
      player.body.angularVelocity = -50;
    }
  },
 // startDrag: function() {
 //   player.body.moves = false;
//  },
 // stopDrag: function(){
 // player.body.moves = true;
 // },

  changeTexture: function() {
    this.texture++;
    if (this.texture >= textures.length) {
      this.texture = 0;
    }
    player.loadTexture(textures[this.texture], 0);
  }
 // onInputDown: function () {
  //  this.game.state.start('Menu');
 // }
};
