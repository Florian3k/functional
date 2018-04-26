module.exports = function groupBy(collection, groupingFunc) {
	return collection.reduce((result, item) => {
		const key = groupingFunc(item);
		if ( ! result[key] ) {
			result[key] = [];
		}
		result[key].push(item);
		return result
	}, {})
}