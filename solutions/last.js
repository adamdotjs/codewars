// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.

// solution a -- more verbose
function last(str) {
	return str.split(" ").sort((a, z) => {
		if (a[a.length - 1] > z[z.length - 1]) {
			return 1;
		} else if (a[a.length - 1] < z[z.length - 1]) {
			return -1;
		} else {
			return 0;
		}
	});
}

// solution b -- more terse
const last = (str) => str.split(" ").sort((a, z) => a.slice(-1).localeCompare(z.slice(-1)));
