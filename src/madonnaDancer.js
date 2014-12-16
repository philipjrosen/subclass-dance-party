var MadonnaDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="madonna"></div>');
  Dancer.apply(this, arguments);
  console.log(this);
};

MadonnaDancer.prototype = Object.create(Dancer.prototype);
MadonnaDancer.prototype.constructor = MadonnaDancer;
