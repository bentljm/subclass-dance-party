$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('body').on('mouseover', '.dancer', function() {
    $(this).css({
      'border-width': '10px',
      'border-radius': '10px'
    });
  });


  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('body').on('click', '.santa', function() {
    var parentLoc = $(this).offset();
    for (var i = 0; i < window.dancers.length; i++) {
      if ($(this) !== window.dancers[i].$node) {
        var childLoc = window.dancers[i].$node.offset();
        if (((parentLoc.left - childLoc.left) < 400) && ((parentLoc.left - childLoc.left) > 0) &&
          ((parentLoc.top - childLoc.top) < 400) && (parentLoc.left - childLoc.left) > 0) {

          $(this).hide();
          window.dancers[i].$node.hide();
        }
      }
    }
  });

// The .position() method allows us to retrieve the current position of an element relative to the offset parent. Contrast this with .offset(), which retrieves the current position relative to the document. When positioning a new element near another one and within the same containing DOM element, .position() is the more useful.

// Returns an object containing the properties top and left.



  /*if 2 dots too close, they fall to bottom */
  // var node1, node2, dist;
  // for (var i = 0; i< window.dancer.length; i++){
  //   node1 = window.dancer.$node[i];
  //   for (var j=0; j<window.dancer.length; j++){
  //     if (i!==j){
  //       node2 = window.dancer.$node[j];
  //       dist =
  //     }
  //   }




});

// Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in src/init.js) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.





// Make at least two new kinds of dancers. This will require creating a new factory function for each one (and making sure that your new JavaScript files are included in dancefloor.html).

// Add a link in the top bar of dancefloor.html to create a dancer of each new type you create
// Write tests for new types. Use spec/blinkyDancerSpec.js as a template for new test files, and make sure to include them in SpecRunner.html.

