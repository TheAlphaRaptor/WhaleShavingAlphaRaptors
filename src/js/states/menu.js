var Menu = function () {
  this.text = null;
};
module.exports = Menu;
var button;
var background;

Menu.prototype = {
  create: function () {

   // var x = this.game.width / 2;
   // var y = this.game.height / 2;

    var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
    background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
    button = this.game.add.button(200,100,"razor",  function() {
    //  sprite.scale.setTo(50, 12.5);
    }, this, 0,1,2 )
    this.input.onDown.add(this.onDown, this);
  },

  update: function () {
  },

  onDown: function () {
    this.game.state.start(playerState.currentLevel);
  }
};