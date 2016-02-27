//var Player = require('../models/player.js');

var game = function () {
  this.testentity = null;
};

module.exports = game;

game.prototype = {

  create: function () {
    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;
    this.add.sprite(0,0,"Dan");
    var key1;
    var key2;
    key1=this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    key1.onDown.add(this.playerSpin, this);
   // key2=this.input.keyboard.addKey(Phaser.Keyboard.ONE);
    //key2.onDown.add(this.banana, this);
    music = this.add.audio('gamesound');

    music.play();

    this.physics.startSystem(Phaser.Physics.ARCADE);

    image = this.add.sprite(0, 0, 'Enemy');

    this.physics.arcade.gravity.y=20;

    player = this.add.sprite(1, 1, 'testsprite');

    //player.collideWorldBounds = true;

    //player.body.bounce.set(0.9);
    player.scale.setTo(.5,.5);
    player.inputEnabled = true;
    player.input.enableDrag();
    image.scale.setTo(.7,.7);
    player.events.onDragStart.add(this.startDrag, this);
    player.events.onDragStop.add(this.stopDrag, this);

    this.physics.enable(image, Phaser.Physics.ARCADE);

    image.body.velocity.setTo(200,200);

    image.body.collideWorldBounds = true;
   // player.body.collodeWorldBounds = true;
    image.body.bounce.set(1);
    //this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
   image.angle += 100;

  },
  startDrag: function() {
    player.body.moves = false;
  },
  stopDrag: function(){
  player.body.moves = true;
  },
  playerSpin: function(){
  player.angle += 20;
  },
  //banana: function(){
  //  player.loadTexture(bananurai, 0);
 // },
 // onInputDown: function () {
 //   this.game.state.start('Menu');
 // }
};
