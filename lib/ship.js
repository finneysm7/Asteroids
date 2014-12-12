(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }


  var Ship = Asteroids.Ship = function(passedHash){
  	var COLOR = 'green';
  	var RADIUS = 20;
  	this.color = COLOR;
  	this.radius = RADIUS;
  	this.pos = passedHash['pos'];
  	this.vel = [0,0];
  	this.game = passedHash['game'];
	this.isWrappable = true;
  }
  
  
  // Ship.prototype.relocate = function (game) {
 // 	  debugger;
 // 	  this.pos = game.randomPosition();
 // 	  this.vel = [0,0]
 //  };
  
  Asteroids.Util.prototype.inherits(Ship, Asteroids.MovingObject);

 })();