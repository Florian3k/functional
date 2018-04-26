module.exports = function compose(...funcs) {
	return funcs.reduce( (prev, curr) => (x) => curr(prev(x)) )
}