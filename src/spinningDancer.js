var SpinningDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="spinning-dancer"></span>');
  this.$node.addClass('rotating');
  Dancer.apply(this, arguments);
};

SpinningDancer.prototype = Object.create(Dancer.prototype);

SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  var color1, color2, color3;
  color1 = Math.floor(Math.random() * 255);
  color2 = Math.floor(Math.random() * 255);
  color3 = Math.floor(Math.random() * 255);
  this.$node.css("background-color", "rgb("+ color1 + "," + color2 + "," + color3 + ")");
};
