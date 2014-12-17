$(document).ready(function(){
  window.dancers = [];

  $('body').on('click', '.madonna', function(event) {
    $(this).toggleClass('madonna bart');
    $('.lineUp').on('click', function(event) {
      $.each(window.dancers, function(index, dancer) {
        if (dancer.hasClass('rotating')) {
          dancer.toggleClass('rotating');
        }
        console.log(dancer);
        dancer.css({left: window.innerWidth/2});
      });
    });
  });

  $('body').on('click', '.dancer', function(event) {
    $(this).addClass('friend');
    var $position = $(this).position();
    var y1 = $position.top;
    var x1  = $position.left;
    var $dancerPosition, dist, x2, y2;
    var clickedDancer = $(this)[0];

    $.each(window.dancers, function(index, dancer) {
      var currentDancer = dancer[0];
      if (currentDancer !== clickedDancer) {

        $dancerPosition = dancer.position();
        y2 = $dancerPosition.top;
        x2 = $dancerPosition.left;

        dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

        if (dist <= 100) {

          dancer.addClass('friend');

          console.log(dist);
          console.log(currentDancer);
        }

      }
    });

  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000 + 500
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });
});
