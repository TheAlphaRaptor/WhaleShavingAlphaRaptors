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
   // this.testentity = new Player(this.game, x, y);
   // this.testentity.anchor.setTo(0.5, 0.5);
    music = this.add.audio('gamesound');

    music.play();

    this.physics.startSystem(Phaser.Physics.ARCADE);

    image = this.add.sprite(0, 0, 'Enemy');

    this.physics.arcade.gravity.y=20;

    player = this.add.sprite(1, 1, 'testsprite');

    player.collideWorldBounds = true;

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

    image.body.bounce.set(1);
    //this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
    image.angle += 1;

  },
  startDrag: function() {
    sprite.body.moves = false;
  },
  stopDrag: function(){
  sprite.body.moves = true;
  },
 // onInputDown: function () {
 //   this.game.state.start('Menu');
 // }
};
