(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Game = Asteroids.Game = function () {

    NUM_ASTEROIDS = 10;
    DIM_X = 800;
    DIM_Y = 600;
    this.dim_x = DIM_X;
    this.dim_y = DIM_Y;
    this.numAst = NUM_ASTEROIDS;
	this.score = 0;
	this.lives = 10;
    this.asteroids = this.addAsteroids();
    this.ship = this.addShip();
	this.allObjects = this.allObjects();
  }
  
  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for(var i = 0; i < this.numAst; i++){
      asteroids.push(new Asteroids.Asteroid({ pos: this.randomPosition(), game: this}));
    }
    return asteroids;
  }

  Game.prototype.addShip = function() {
    var ship = new Asteroids.Ship({ pos: this.randomPosition(), game: this });
    return ship;
  };
  
  Game.prototype.randomPosition = function() {
    var ast_pos = [Math.random() * this.dim_x, Math.random() * this.dim_y];
    return ast_pos;
  }
  
  Game.prototype.moveObjects = function(ctx){
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].move(ctx);
	  this.checkCollisions();
    }
  }
  
  Game.prototype.draw = function(ctx, img) {
	  ctx.clearRect(0, 0, this.dim_x, this.dim_y);
    for (var i = 0; i < this.allObjects.length; i++) {
	  this.drawScore(ctx);
	  this.drawLives(ctx);
      this.allObjects[i].draw(ctx);
    }
  }
  
  Game.prototype.drawScore = function(ctx) {
	  ctx.font = "20px Verdana";
	  ctx.fillStyle = "yellow";
	  ctx.fillText("Score: ", 10, 25)
	  ctx.fillText(this.score, 100, 25);
  }
  
  Game.prototype.drawLives = function(ctx) {
	  ctx.font = "20px Verdana";
	  ctx.fillStyle = "yellow";
	  ctx.fillText("Lives: ", 650, 25)
	  ctx.fillText(this.lives, 710, 25);
  }
  
  Game.prototype.wrap = function(obj, pos) {
	if (obj.isWrappable){   
		if (pos[0] < 0){
	      pos[0] = this.dim_x;
	    } else if (pos[1] < 0) {
	      pos[1] = this.dim_y;
	    } else if (pos[0] > this.dim_x) {
	      pos[0] = 0;
	    } else if (pos[1] > this.dim_y) {
	      pos[1] = 0;
	    }
	} else{
		if (pos[0] < 0 || pos[1] < 0 || pos[0] > this.dim_x || pos[1] > this.dim_x) {
			this.remove(obj)
		}
	}
    return pos;
  }
  
  Game.prototype.checkCollisions = function(){
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = 0; j < this.allObjects.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.allObjects[j])) {
		  this.asteroids[i].collidedWith(this.allObjects[j]);
        }
      }
    }
  }
  
  
  Game.prototype.remove = function (object) {
  	// body...
	  if (object instanceof Asteroids.Asteroid || object instanceof Asteroids.Bullet) {
		  var index = this.allObjects.indexOf(object)
	  	  this.allObjects.splice(index,1)
			  if (object instanceof Asteroids.Asteroid){
				  var indexA = this.asteroids.indexOf(object)
			  	  this.asteroids.splice(indexA,1)
			  }
	  }
	 else if (object instanceof Asteroids.Ship) {
		  var index = this.allObjects.indexOf(object)
	  	  object.relocate(this)
	  }
  };
  
  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  }
  
  Game.prototype.allObjects = function() {
	  
		  return this.asteroids.concat(this.ship)

  }
  
  Game.prototype.drawEnd = function() {
  	ctx.clearRect(0, 0, this.dim_x, this.dim_y);
	  ctx.font = "40px Verdana";
	  ctx.fillStyle = "yellow";
	  ctx.fillText("Game Over", 300, 300);
	  ctx.fillText("Score: ", 300, 350);
	  ctx.fillText(this.score, 450, 350);
  }
})();
