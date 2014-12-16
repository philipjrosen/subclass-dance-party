var SpinningDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="spinning-dancer"></span>');
  Dancer.apply(this, arguments);
};

SpinningDancer.prototype = Object.create(Dancer.prototype);

SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);

  this.$node.toggle();
};
