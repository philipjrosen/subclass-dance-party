var MadonnaDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="madonna"></div>');
  Dancer.apply(this, arguments);
  console.log(this);
  this.animate();
};

MadonnaDancer.prototype = Object.create(Dancer.prototype);
MadonnaDancer.prototype.constructor = MadonnaDancer;


MadonnaDancer.prototype.animate = function() {
  return this.$node.animate({
    opacity: '50%',
    border: '30px solid transparent',
    'border-image': 'url(http://demo.tutorialzine.com/2013/10/css3-features-you-can-finally-use/assets/img/border.png) 30 30 round'
  }, 5000, 'swing', function() {
    console.log(this);
    $(this).toggleClass('madonna bart');
  });
};
