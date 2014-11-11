(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}; 
  }
  
  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };
  
  GameView.prototype.start = function() {
    setInterval(function () {
      this.game.draw(this.ctx);
    }, 10);
    //setInterval(this.game.moveObjects.bind(this.game), 10);
    setInterval(this.game.step.bind(this.game), 10);
  }
})();