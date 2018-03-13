var game = new Phaser.Game(480,360, Phaser.AUTO, null, "display");

  function create() {
  game.physicsstartSystem(Phaser.Physics.ARCADE);
  game.state.start("load");
  this.add.image(400, 300, "background");
}

  function preload() {
    game.load.image("background", "assets/background.png");
    
  }
  
  function update() {
    
  }

  
