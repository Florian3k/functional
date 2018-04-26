module.exports = function curry(func) {
	if ( func.length === 0 ) {
		return func;
	}
	if (func.length === 1) {
		return x => func(x);
	}
	return x => curry(func.bind(null, x));
}