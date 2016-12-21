var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('border-color', '#008000');
  this.$node = $('<span class="santa"><img src=src/img/giphy-santa.gif></span>');
  this.move();
  this.topbarHeight = 32;

};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.makeNewPosition = function() {
  var newTop = ($(window).height() - this.topbarHeight) * Math.random() + this.topbarHeight;
  var newLeft = $(window).width() * Math.random();

  return [newTop, newLeft];

};

MovingDancer.prototype.move = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this); //this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var that = this;
  var newq = this.makeNewPosition();
  this.$node.animate({ top: newq[0], left: newq[1]}, 1300, function() {
    that.move();
  });

};

