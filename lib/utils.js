(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var Util = Asteroids.Util = function () {};
  
Util.prototype.inherits = function (child, base) {
	var Surrogate = function () {};
 Surrogate.prototype = base.prototype;
 
 child.prototype = new Surrogate();
}

Util.prototype.randomVec = function(length){
  
  return (Math.random(length) * 2 - Math.random(length));
}

Util.unitVector = function(angle){
	return [Math.sin(angle), Math.cos(angle)]
}
})();
