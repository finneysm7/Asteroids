(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Game = Asteroids.Game = function () {

    NUM_ASTEROIDS = 10;
    DIM_X = 800;
    DIM_Y = 800;
    this.dim_x = DIM_X;
    this.dim_y = DIM_Y;
    this.numAst = NUM_ASTEROIDS;
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
  
  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.dim_x, this.dim_y);
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
    return pos;
  }
  
  Game.prototype.checkCollisions = function(){
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
        }
      }
    }
  }
  
  Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
  }
  
  Game.prototype.allObjects = function() {
	  
		  return this.asteroids.concat(this.ship)

  }
  
  // Game.prototype.addBullets = function () {
 //      var bullet = new Asteroids.Bullet({ pos: this.randomPosition(), game: this, vel: this.ship.vel });
 //      return bullet;
 //  };

})();

// Asteriods = { Game: function() {} }


// Asteriods = { Game: function() {}, Bullet: function () {} }