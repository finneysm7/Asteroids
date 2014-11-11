(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Asteroid = Asteroids.Asteroid = function(passedHash){
    var COLOR = '#000000';
    var RADIUS = 20;
    this.color = COLOR;
    this.radius = RADIUS;
    this.pos = passedHash['pos'];
    this.vel = [Asteroids.Util.prototype.randomVec(1000), Asteroids.Util.prototype.randomVec(1000)];
    this.game = passedHash['game'];
  }

 Asteroids.Util.prototype.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();