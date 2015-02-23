(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
	this.img = new Image();
	this.img.src = 'lib/ocean_sea_stars_pirate_ship.jpg'
  };
  
  GameView.prototype.start = function() {
	this.ctx.drawImage(this.img, 0, 0, 800, 600)
	  var that = this;
	  var ship = this.game.ship;
	  var asteroidIntervalId = setInterval(function(){
 	        var asteroid = new Asteroids.Asteroid({
 	          pos: that.game.randomPosition(),
 	          game: that.game
 	        })
 	        that.game.allObjects.push(asteroid);
			that.game.asteroids.push(asteroid);
 	      }, 3000)
	      var gameIntervalId = setInterval(function(){
	        that.bindKeyHandlers(ship)
	        that.game.step();
	        that.game.draw(that.ctx, that.img);
	        if (that.checkForLoss()) {
				that.game.drawEnd(that.ctx);
	          clearInterval(asteroidIntervalId);
	          clearInterval(gameIntervalId);
	        }
	      }, 20);
  }
  
  GameView.prototype.bindKeyHandlers = function (ship) {
	  var game = this.game;
	  var keys = key.getPressedKeyCodes();
	  if (keys.indexOf(37) != -1) {
	        ship.left();
	      }
	      if (keys.indexOf(38) != -1) {
	        ship.down();
	      } 
	      if (keys.indexOf(39) != -1) {
	        ship.right();
	      }
	      if (keys.indexOf(40) != -1) {
	        ship.up();
	      }
	      if (keys.indexOf(32) != -1) {
	        ship.fireBullet();
	      }
	    };
		
	GameView.prototype.checkForLoss = function(){
		if (this.game.lives < 1){
			return true;
		} else {
			return false;
		}
	};
})();