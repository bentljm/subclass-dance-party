describe('movingDancer', function() {

  var movingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingDancer = new MovingDancer(10, 20, timeBetweenSteps);
  });

  it('should not go over top bar height', function() {
    expect(movingDancer.topbarHeight).to.be.equal(32);
  });

  it('should produce an array with random values for new location', function() {
    expect(movingDancer.makeNewPosition()).to.be.an('Array');
  });

});
