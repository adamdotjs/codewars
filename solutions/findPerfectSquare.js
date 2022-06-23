// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
	if (Number.isInteger(Math.sqrt(sq))) {
		let nextSq = Math.sqrt(sq) + 1;
		return nextSq * nextSq;
	}
	// Return the next square if sq is a perfect square, -1 otherwise
	return -1;
}
