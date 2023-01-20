const squareDigits = (num) => {
	return +String(num)
		.split("")
		.map((n) => Math.pow(n, 2))
		.join("");
};
