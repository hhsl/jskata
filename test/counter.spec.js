describe('Counter test', function() {
	var counter1;

	beforeEach(function(){
		counter1 = new Counter();
	});

	describe('getValue function', function() {
		it('should return 0 as default', function() {
			expect(counter1.getValue()).toBe(0);
		});
	});
	describe('increaseValue function', function() {
		it('should return incremented value by one', function() {
			counter1.increaseValue();
			expect(counter1.getValue()).toBe(1);
		});
		it('should not increase more than max value', function() {
			counter1.setMaxValue(2);
			counter1.increaseValue();
			counter1.increaseValue();
			counter1.increaseValue();
			expect(counter1.getValue()).toBe(2);
		})
	});
	describe('decreaseValue function', function() {
		it('should return decremented value by one', function() {
			counter1.decreaseValue();
			expect(counter1.getValue()).toBe(-1);
		});
		it('should not decrease less then min value', function() {
			counter1.setMinValue(0);
			counter1.decreaseValue();
			expect(counter1.getValue()).toBe(0);
		});
	});

	describe('multiple counter', function() {
		
	});
});
