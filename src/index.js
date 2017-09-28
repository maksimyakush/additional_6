module.exports = function zeros(expression) {
	var expression = expression.split(/\*/);
	var newExpression=expression.map(a=>{
		if(a.match(/!/g).length==2) {
			return even(parseInt(a));
		} else if(a.match(/!/g).length==1) {
			return odd(parseInt(a));
		}
	})
	function odd(exp) {
		var counter=1;
		while(exp>=1) {
			counter = counter * exp;
			exp -=1;
		}
		return counter;
	}
	function even(exp) {
		var counter = 1;
		while(exp >= 1) {
			counter *= exp;
			exp -=2;
		}
		return counter;
	}	
	var arr = [];
	var accumulator = 1;
	for(var i=0; i < newExpression.length; i++) {
		while (newExpression[i] % 10 == 0) {
			newExpression[i] = newExpression[i] / 10;
			arr.push('x');
		}
		accumulator = accumulator * newExpression[i];
		while (accumulator % 10 == 0) {
			accumulator = accumulator / 10;
			arr.push('x');
		}	
	}
	return arr.length;
}
