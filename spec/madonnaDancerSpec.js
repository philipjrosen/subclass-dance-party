describe("MadonnaDancer", function() {

  var madonnaDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    madonnaDancer = new MadonnaDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(madonnaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(madonnaDancer.$node, 'toggle');
    madonnaDancer.step();
    expect(madonnaDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(madonnaDancer, "step");
      expect(madonnaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(madonnaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(madonnaDancer.step.callCount).to.be.equal(2);
    });
  });
});
