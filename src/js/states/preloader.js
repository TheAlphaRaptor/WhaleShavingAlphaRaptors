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
      this.load.image('splash', 'assets/Epic.jpg');
      this.load.image("Dan", "assets/Dan.png");
      this.load.image('Enemy', 'assets/Narbrawl2.png');
      this.load.image('pixwhale', 'assets/WSAR.jpg');
      this.load.audio('splashsong', ['assets/splashsound.mp3']);
      this.load.audio('gamesong', ['assets/ShepardTone.mp3']);
      this.load.image('bananurai', 'assets/banaurai.png');
      this.load.image('plot', 'assets/plot.png');
      this.load.image("pupper", 'assets/pupperparency.png');
      this.load.audio('flush', ['assets/toilet.mp3']);
      this.load.audio('WAKEMEUP', ['assets/WAKEMEUPINSIDE.mp3']);
      this.load.image('SKELLY', 'assets/skellychair.jpeg');
      this.load.image('sleep', 'assets/sleep.png');
      this.load.image('Scott', 'assets/Scott.png');
      this.load.image('Soccer', 'assets/soccer.png');
      this.load.audio('Sterling', ['assets/sterling.mp3']);
      this.load.image('net', 'assets/soccernet.jpeg');
      this.load.image('Messi', 'assets/Messi.gif');
      this.load.image('Blue Steel', 'assets/Blue Steel.jpeg');
      this.load.image('Derek', 'assets/Derek.png');
      this.load.image('Hansel', 'assets/Hansel.gif');
      this.load.image('Mugatu', 'assets/Mugatu.gif');
      this.load.audio('Relax', ['assets/Relax.mp3']);
      this.load.image('end', 'assets/ZeEnd.png');
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
