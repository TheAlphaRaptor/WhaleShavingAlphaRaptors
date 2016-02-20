var Player = require('../models/player.js');

var Game = function () {
  this.testentity = null;
};

module.exports = Game;

Game.prototype = {

  create: function () {
    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;
    this.add.sprite(0,0,"Dan");
    this.testentity = new Player(this.game, x, y);
    this.testentity.anchor.setTo(0.5, 0.5);

    this.physics.startSystem(Phaser.Physics.ARCADE);

    image = this.add.sprite(0, 0, 'Enemy');

    this.physics.arcade.gravity.y=20;

    player = this.add.sprite(1, 1, 'testsprite');

    player.collideWorldBounds = true;

    //player.body.bounce.set(0.9);

    player.inputEnabled = true;
    player.input.enableDrag();

    player.events.onDragStart.add(startDrag, this);
    player.events.onDragStop.add(stopDrag, this);

    this.physics.enable(image, player, Phaser.Physics.ARCADE);

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
  onInputDown: function () {
    this.game.state.start('Menu');
  }
};
