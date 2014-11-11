// var asteroids = window.Asteroids || {}
(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var MovingObject = Asteroids.MovingObject = function(passedHash) {
    this.pos = passedHash['pos'];
    this.vel = passedHash['vel'];
    this.radius = passedHash['radius'];
    this.color = passedHash['color']
  };

  MovingObject.prototype.draw = function(ctx){
    ctx.fillStyle = '#000000'; //this.color;
    ctx.beginPath();
    
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius + 100,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
  };

  MovingObject.prototype.move = function(ctx) {
    this.pos[0] += this.vel[0]
    this.pos[1] += this.vel[1]
  }
})();