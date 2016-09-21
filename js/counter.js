var Counter = function() {
	 this.currentValue = 0;
	 this.maxValue;
	 this.minValue;
};

Counter.prototype.getValue = function() {
	return this.currentValue;
};

Counter.prototype.increaseValue = function(){
	if(typeof this.maxValue === 'undefined' || this.maxValue > this.currentValue){
		this.currentValue += 1;
	}
};

Counter.prototype.decreaseValue = function(){
	if(typeof this.minValue === 'undefined' || this.minValue < this.currentValue){
		this.currentValue -= 1;
	}
};

Counter.prototype.setMaxValue = function(maxValue){
	this.maxValue = maxValue;
};

Counter.prototype.setMinValue = function(minValue) {
	this.minValue = minValue;
}
