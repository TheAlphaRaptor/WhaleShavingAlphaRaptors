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
      this.load.image('testsprite', 'assets/tr8r.png');
      this.game.load.spritesheet('razor', 'assets/trazorparent.png', 341, 496);
      this.game.load.image('background', 'assets/636x460design_01.jpg');
      this.load.image('anythingyouwant', 'assets/picture.jpeg');
      this.load.image("Dan", "assets/Dan.png");
      this.load.image('Enemy','assets/Narbrawl.png');
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
