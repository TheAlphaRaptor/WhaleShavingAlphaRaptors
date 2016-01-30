var Player = function (game, x, y) {
    Phaser.Sprite.call(this, game, 75, 450, 'testsprite');

    game.add.existing(this);
    this.scale.setTo(.5, .5);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

/**
 * Automatically called by World.update
 */
Player.prototype.update = function() {
};

module.exports = Player;
