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
	var mul = newExpression.reduce((a,b)=>a*b);
	var counter = 0;
	while (mul % 10 == 0) {
		mul = mul/10;
		++counter;
	}
	return counter;
}
