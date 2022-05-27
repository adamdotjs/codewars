//8 KYU
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

const digitize = (n) => {
	const numString = String(n);
	return numString
		.split('')
		.map((n) => parseInt(n))
		.reverse();
};
