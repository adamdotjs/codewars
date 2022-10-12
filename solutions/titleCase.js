// write a function that will convert a string into titlecase
// the second param (optional) contains words that should be excluded from being capitalized if other than the first word in the main string.
// the main and the exception words can be set to any case on argument input -- so we should normalize them in order to compare to main string.
// if no exception words are passed as an argument, assume all words in main string should be capitalized.
// arguments will always be passed as strings containing words only - Do not worry about handling other primitive types

function titleCase(title, exclusions = "") {
	let titleArray = title.toLowerCase().split(" ");
	let exclusionsArray = exclusions.toLowerCase().split(" ");

	return titleArray
		.map((word, idx) => {
			if (exclusionsArray.indexOf(word) > -1 && idx !== 0) {
				return word;
			} else {
				return word.charAt(0).toUpperCase() + word.slice(1);
			}
		})
		.join(" ");
}
