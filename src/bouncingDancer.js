var BouncingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('border-color', 'aqua');
  this.top = top;
  this.bounce();

};

BouncingDancer.prototype = Object.create(Dancer.prototype);
BouncingDancer.prototype.constructor = BouncingDancer;


BouncingDancer.prototype.makeNewPosition = function(top) {
  var topbarString = $('.topbar').css('height');
  var topbar = topbarString.substring(0, 2);

  var newTop;
  if (top <= topbar) {
    newTop = $(window).height() - 80;
  } else {
    newTop = topbar;
  }
  return newTop;

};

BouncingDancer.prototype.bounce = function(top) {
  var top = top || this.top;

  Dancer.prototype.step.call(this);

  var newTop = this.makeNewPosition(top);
  var that = this;

  this.$node.animate({
    top: newTop
  }, 500, function() {
    that.bounce(newTop);
  });


};



