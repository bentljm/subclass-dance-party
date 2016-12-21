var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('border-color', '#008000');
  this.$node = $('<span class="santa"><img src=src/img/giphy-santa.gif></span>');
  this.move();


};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.makeNewPosition = function() {
  var newTop = ($(window).height() - 32) * Math.random() + 32;
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



//ideas: mosh pit, couples dancing together, swaying dancer (code below), jumping dancers

//SWAYING
// ({
//         "left": "+=300px"
// }, 2000)
// .animate({
//         "left": "-=200px"
// }, 2000);

//BOUNCING
   // var time = 500;
   //  var bounces = 20;

   //  function bounceDown(){
   //    $(".ball").animate({top: 200}, time, function(){
   //      bounceUp();
   //    });
   //  };

   //  function bounceUp() {
   //    $(".ball").animate({top: 100}, time);
   //  };


   //  $(".button").on("click", function(){
   //    for (var i = 0; i < bounces; i++){
   //      setTimeout(function(){
   //        bounceDown();
   //      }, time*2*i);

   //    };
   //  });

//    function AnimateRotate(angle) {
//     // caching the object for performance reasons
//     var $elem = $('#MyDiv2');

//     // we use a pseudo object for the animation
//     // (starts from `0` to `angle`), you can name it as you want
//     $({deg: 0}).animate({deg: angle}, {
//         duration: 2000,
//         step: function(now) {
//             // in the step-callback (that is fired each step of the animation),
//             // you can use the `now` paramter which contains the current
//             // animation-position (`0` up to `angle`)
//             $elem.css({
//                 transform: 'rotate(' + now + 'deg)'
//             });
//         }
//     });
// }


  //sherry?
  //kinda freaked me out haha
  //thanks
  //it works!
  //yes :D
  //great job!!
  //this looks awesome!! i found the same code snippet and was going to try implement it but youu btD i!m :te tout it! :D
  // please navigate again tomorrow and i will drive and see how these all come together!
  //thanks
  //ok sounds good
  //looking forward to it! What time is is there?
  //it is about 9:30pm, how about ur side? 12:20 am
  //wow! pretty late! sorry had to leave earlier today, but i should be able to stay and work on problems tmr now that i have food stocked up! :D
  //no worries!!! and cool. so what hours do you work for class? I work 9am - 8p
  //gonna pack it up for the night tho...this is fascinating technology!
  //have a good rest! I work from 6am -5pm... so
  //just 3 hours behind, not bad -> 1 day ahead as well! :p
  //ok gotta go. later
//bye~ good night!