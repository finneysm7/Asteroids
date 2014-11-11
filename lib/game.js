(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Game = Asteroids.Game = function () {
    NUM_ASTEROIDS = 5;
    DIM_X = 800;
    DIM_Y = 800;
    this.dim_x = DIM_X;
    this.dim_y = DIM_Y;
    this.numAst = NUM_ASTEROIDS;
    this.asteroids = this.addAsteroids();
  }
  
  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for(var i = 0; i < this.numAst; i++){
      asteroids.push(new Asteroids.Asteroid({ pos: this.randomPosition(), game: this}));
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
  
  Game.prototype.wrap = function(pos) {
    if (pos[0] < 0){
      pos[0] = this.dim_x;
    } else if (pos[1] < 0) {
      pos[1] = this.dim_y;
    } else if (pos[0] > this.dim_x) {
      pos[0] = 0;
    } else if (pos[1] > this.dim_y) {
      pos[1] = 0;
    }
    return pos;
  }
  
  Game.prototype.checkCollisions = function(){
    for (var i = 0; i < this.asteroids.length - 1; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          console.log("COLLISION");
        }
      }
    }
  }
  
  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  }
})();

// Asteriods = { Game: function() {} }


// Asteriods = { Game: function() {}, Bullet: function () {} }