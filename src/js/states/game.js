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

    this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {

  },

  onInputDown: function () {
    this.game.state.start('Menu');
  }
};
