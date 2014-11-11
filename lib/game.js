(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Game = Asteroids.Game = function () {
    NUM_ASTEROIDS = 10;
    DIM_X = 2000;
    DIM_Y = 2000;
    this.dim_x = DIM_X;
    this.dim_y = DIM_Y;
    this.numAst = NUM_ASTEROIDS;
    this.asteroids = this.addAsteroids();
  }
  
  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for(var i = 0; i < this.numAst; i++){
      asteroids.push(new Asteroids.Asteroid({ pos: this.randomPosition() }));
    }
    return asteroids;
  }
  
  Game.prototype.randomPosition = function() {
    var ast_pos = [Math.random() * this.dim_x, Math.random() * this.dim_y];
    return ast_pos;
  }
  
  Game.prototype.moveObjects = function(){
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  }
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(ctx);
    }
  }
})();

// Asteriods = { Game: function() {} }


// Asteriods = { Game: function() {}, Bullet: function () {} }