(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Asteroid = Asteroids.Asteroid = function(passedHash){
    var COLOR = 'orange';
    var RADIUS = 20;
    this.color = COLOR;
    this.radius = RADIUS;
    this.pos = passedHash['pos'];
    this.vel = [Asteroids.Util.prototype.randomVec(5), Asteroids.Util.prototype.randomVec(5)];
    this.game = passedHash['game'];
	this.isWrappable = true;
	this.asteroidImg = new Image();
	this.asteroidImg.src = './lib/blinkyghost.png';
  }

 Asteroids.Util.prototype.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
 
 Asteroid.prototype.draw = function (ctx) {
     ctx.save();
     ctx.translate(this.pos[0], this.pos[1]);
     ctx.rotate(this.angle);
     ctx.drawImage(this.asteroidImg, -20, -20, 40, 40);
     ctx.restore();
   }
 
})();