var SwayingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.sway();


};

SwayingDancer.prototype = Object.create(Dancer.prototype);
SwayingDancer.prototype.constructor = SwayingDancer;


SwayingDancer.prototype.bounceUp = function() {
  var that = this;
  this.$node.animate({left: 500}, 900, function() {
    that.sway();
  });
};


SwayingDancer.prototype.sway = function() {

  Dancer.prototype.step.call(this);
  var that = this;


  this.$node.animate({left: $(window).width() - 80}, 1000, function() {
    that.bounceUp();
  });

};

