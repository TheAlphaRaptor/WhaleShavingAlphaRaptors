'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game-game');

window.Utils = require('./utils');

window.playerState = {
    currentLevel: 'Game'
};

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));
game.state.add('Level2', require('./states/Level2'));
game.state.add('Level3', require('./states/Level3'));
game.state.add('Level4', require('./states/Level4'));
game.state.add('end', require('./states/end'));

game.state.start('Boot');
