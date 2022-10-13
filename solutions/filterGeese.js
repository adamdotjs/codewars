// create a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the geese removed.
// the parameter will always be an array of strings, and will not be empty.

function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

	// return an array containing all of the strings in the input array except those that match strings in geese
	return birds.filter((bird) => !geese.includes(bird));
}
