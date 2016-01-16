var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

module.exports = Preloader;

Preloader.prototype = {

  preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('testsprite', 'assets/TR8R.png');
      this.game.load.spritesheet('shave','assets/shave.jpg',341,496);
      this.game.load.image('background', 'assets/636x460design_01.jpg');
      this.load.image('anythingyouwant','assets/picture.jpeg')
  },


  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Splash');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};
