var Splash = function () {

};

module.exports = Splash;

Splash.prototype = {
  create: function () {
    this.asset = this.add.sprite(160,60,'plot')
    this.asset.alpha = 0;
    this.faded_in = false;
    music =  this.add.audio('splashsong')
    music.play ();
  },
    update: function () {

    if (this.asset.alpha <1 && !this.faded_in) {
     this.asset.alpha+=0.01;
    } else if (this.asset.alpha >= 1) {
      this.faded_in = true;
    }
    if (this.faded_in) {
      this.asset.alpha -= 0.0019
    }
    if (this.asset.alpha < 0) {
      this.game.state.start('Menu');
      music.pause ();
    }
  }
};