// Create a method to check whether a string is all caps

String.prototype.isUpperCase = function () {
	return this === this.toUpperCase();
};
