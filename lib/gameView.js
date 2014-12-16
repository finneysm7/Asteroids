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
    setInterval(function () {
      this.game.draw(this.ctx, this.img);
    }.bind(this), 10);
    //setInterval(this.game.moveObjects.bind(this.game), 10);
    setInterval(this.game.step.bind(this.game), 10);
	this.bindKeyHandlers();
  }
  
  GameView.prototype.bindKeyHandlers = function () {
	  var game = this.game;
	  key('up',function (event) {
		  event.preventDefault();
		  game.ship.accelerate();
	  });

	  	key('down', function (event) {
			event.preventDefault();
			game.ship.brake();
		});

	  	key('left', function (event) {
			event.preventDefault();
			game.ship.left();
		});

	  	key('right', function (event) {
			event.preventDefault();
			game.ship.right();
		});
		
	  	key('space', function (event) {
			event.preventDefault();
			game.ship.fireBullet(game);
		});
  };

})();