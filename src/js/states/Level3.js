var game = function () {
    this.testentity = null;
};

module.exports = game;

const textures = ["Scott", "Messi"];
var image;
var player;
game.prototype = {
    texture: 0,
    create: function () {
        this.game.world.setBounds(0, 0, 800, 800);

        var x = (this.game.width) - 100;
        var y = (this.game.height) - 50;
        Scott=this.add.sprite(0, 0, "net");
        Scott.scale.setTo(3, 3);
        var key1;
        var key2;
        var songkey=this.input.keyboard.addKey(Phaser.Keyboard.ZERO);
        var left = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        var right = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        var up = this.input.keyboard.addKey(Phaser.Keyboard.UP);
        var down = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        key2=this.input.keyboard.addKey(Phaser.Keyboard.W);
        key2.onDown.add(this.changeTexture, this);

       song = this.add.audio('Sterling');
        song.play();
        //sterling.volume=.5
        //flush = this.add.audio('flush');
        // song.loop.true ();
        // this.world.setBounds(0,0,WORLD_WIDTH,WORLD_HEIGHT);
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.restitution = 0.8;
        image = this.add.sprite(100, 100, 'Soccer');
        //this.physics.arcade.gravity.y=20;
        player = this.add.sprite(this.world.centerX, this.world.centerY, 'Scott');
        this.physics.enable(player, Phaser.Physics.P2JS);
        //player.collideWorldBounds = true;
        player.scale.setTo(.5, .5);
        player.inputEnabled = true;
        image.scale.setTo(.2, .2);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.physics.enable(image, Phaser.Physics.ARCADE);
        this.physics.enable(player, Phaser.Physics.ARCADE);
        // this.physics.enable(image, Phaser.Physics.P2JS);
        player.body.enable = true;

        image.body.velocity.setTo(200, 200);
        image.body.collideWorldBounds = true;
        player.body.collideWorldBounds = true;
        this.game.world.setBounds(0, 0, 800, 800);
        // this.physics.p2.restitution = 0.8;
        // image.smoothed=false;
        // player.smoothed=false;
        image.body.bounce.set(1);
        //this.world.setBounds(0,0,500,500);

        this.game.camera.follow(this.player);
        //   var playerCollisionGroup = this.physics.p2.createCollisionGroup();
        //  var narbrawlCollisionGroup = this.physics.p2.createCollisionGroup();
        //  this.physics.p2.updateBoundsCollisionGroup();

    },

    update: function () {

        var key1 = this.input.keyboard.addKey(Phaser.Keyboard.A);
        image.angularVelocity += 100;
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        player.body.angularVelocity = 0;
        if (this.cursors.left.isDown) {
            player.body.velocity.x = -200;
        }
        if (this.cursors.right.isDown) {
            player.body.velocity.x = 200;
        }
        if (this.cursors.up.isDown) {
            player.body.velocity.y = -200;
        }
        if (this.cursors.down.isDown) {
            player.body.velocity.y = 200;
        }
        if (key1.isDown) {
            player.body.angularVelocity = -25;
            //     flush.play ();
        }
    },

    changeTexture: function () {
        this.texture++;
        if (this.texture >= textures.length) {
            this.texture = 0;
        }
        player.loadTexture(textures[this.texture], 0);
    },
    Win: function (obj1, obj2) {
        this.game.state.start("Level4");
        song.pause();
    }
};