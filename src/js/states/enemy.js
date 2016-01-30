var Enemy = function (game, x, y) {
    Phaser.Sprite.call(this, game, rand, rand, 'Enemy');

    game.add.existing(this);
    this.scale.setTo(.125, .125);
}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

/**
 * Automatically called by World.update
 */
Enemy.prototype.update = function() {
};

module.exports = Enemy;
