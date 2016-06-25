var game = function () {
    this.testentity = null;
};

module.exports = game;

const textures = ["testsprite", "bananurai"];
var image;
var player;
game.prototype = {
    texture: 0,
    create: function () {
        this.game.world.setBounds(0, 0, 900, 900);
// Varibles
        var x = (this.game.width) - 100;
        var y = (this.game.height) - 50;
        sprite=this.add.sprite(0,0,"end");
    sprite.scale.setTo(0.55,0.55);}

};
