(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Game = Asteroids.Game = function () {
<<<<<<< HEAD

    NUM_ASTEROIDS = 10;
=======
    NUM_ASTEROIDS = 100000;
>>>>>>> 7bb07dcfd5d2955824069aa024aa6c9949409aac
    DIM_X = 800;
    DIM_Y = 800;
    this.dim_x = DIM_X;
    this.dim_y = DIM_Y;
    this.numAst = NUM_ASTEROIDS;
    this.asteroids = this.addAsteroids();
<<<<<<< HEAD
    this.ship = this.addShip();
	this.allObjects = this.allObjects();
=======
>>>>>>> 7bb07dcfd5d2955824069aa024aa6c9949409aac
  }
  
  Game.prototype.addAsteroids = function () {
    var asteroids = [];
    for(var i = 0; i < this.numAst; i++){
      asteroids.push(new Asteroids.Asteroid({ pos: this.randomPosition(), game: this}));
    }
    return asteroids;
  }
<<<<<<< HEAD

  Game.prototype.addShip = function() {
    var ship = new Asteroids.Ship({ pos: this.randomPosition(), game: this });
    return ship;
  };
=======
>>>>>>> 7bb07dcfd5d2955824069aa024aa6c9949409aac
  
  Game.prototype.randomPosition = function() {
    var ast_pos = [Math.random() * this.dim_x, Math.random() * this.dim_y];
    return ast_pos;
  }
  
<<<<<<< HEAD
  Game.prototype.moveObjects = function(ctx){
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].move(ctx);
	  this.checkCollisions();
=======
  Game.prototype.moveObjects = function(){
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
>>>>>>> 7bb07dcfd5d2955824069aa024aa6c9949409aac
    }
  }
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
<<<<<<< HEAD
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].draw(ctx);
    }
  }
  
  Game.prototype.wrap = function(obj, pos) {
	  debugger;
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
	}
=======
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
>>>>>>> 7bb07dcfd5d2955824069aa024aa6c9949409aac
    return pos;
  }
  
  Game.prototype.checkCollisions = function(){
<<<<<<< HEAD
    for (var i = 0; i < this.allObjects.length - 1; i++) {
      for (var j = i + 1; j < this.allObjects.length; j++) {
		  debugger;
        if (this.allObjects[i].isCollidedWith(this.allObjects[j])) {
			if ((this.allObjects[i] === this.ship) || (this.allObjects[j] === this.ship) ) {
				this.ship.relocate(this);
			}else if ((this.allObjects[i].typeof == "bullet") || (this.allObjects[j].typeof == "bullet")){
				
	            this.allObjects.splice(i, 1);
	            this.allObjects.splice(j - 1, 1);
			}
		   
          // console.log("COllISION");
=======
    for (var i = 0; i < this.asteroids.length - 1; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.asteroids.splice(i, 1);
          this.asteroids.splice(j - 1, 1);
          console.log("COllISION");
>>>>>>> 7bb07dcfd5d2955824069aa024aa6c9949409aac
        }
      }
    }
  }
  
  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  }
  
<<<<<<< HEAD
  Game.prototype.allObjects = function() {
	  
		  return this.asteroids.concat(this.ship)

  }
  
  // Game.prototype.addBullets = function () {
 //      var bullet = new Asteroids.Bullet({ pos: this.randomPosition(), game: this, vel: this.ship.vel });
 //      return bullet;
 //  };

=======
  Game.prototype.remove = function(asteroid) {
   
  }
>>>>>>> 7bb07dcfd5d2955824069aa024aa6c9949409aac
})();

// Asteriods = { Game: function() {} }


// Asteriods = { Game: function() {}, Bullet: function () {} }