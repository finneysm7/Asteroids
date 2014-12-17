(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }


  var Ship = Asteroids.Ship = function(passedHash){
  	var COLOR = 'green';
  	var RADIUS = 40;
  	this.color = COLOR;
  	this.radius = RADIUS;
  	this.pos = passedHash['pos'];
  	this.vel = [0,0];
  	this.game = passedHash['game'];
	this.isWrappable = true;
	this.angle = 0;
	this.shipImg = new Image();
	this.shipImg.src = './lib/pirate-ship.png';
  }
  
  Asteroids.Util.prototype.inherits(Ship, Asteroids.MovingObject);
  
  Ship.prototype.draw = function (ctx) {
      ctx.save();
      ctx.translate(this.pos[0], this.pos[1]);
      ctx.rotate(this.angle);
      ctx.drawImage(this.shipImg, -40, -40, 80, 80);
      ctx.restore();
    }
	
    Ship.prototype.fireBullet = function (game) {
		if (!this.firing) {
		      this.firing = true;
		      setTimeout(function(){
		        this.firing = false;        
		      }.bind(this), 200);
  		  var direction = Asteroids.Util.unitVector(-this.angle)
  			  var pos = this.game.ship.pos;
  	      var bullet = new Asteroids.Bullet({ 
  			  pos: [pos[0], pos[1] +1], 
  			  game: this.game, 
  			  vel: [direction[0]*10, direction[1]*10] 
  		  });
  		  this.game.allObjects.push(bullet);
	  	}
    };

 })();