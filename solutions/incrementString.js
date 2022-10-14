// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
	let numStart = string.match(/\d+$/) ? string.match(/\d+$/).index : 0;
	let num = string.slice(numStart);
	let temp = num;

	if (Number(string)) return String(++temp).padStart(num.length, "0");

	if (numStart > 1) {
		return string.slice(0, numStart) + String(++temp).padStart(num.length, "0");
	}

	return string + 1;
}
