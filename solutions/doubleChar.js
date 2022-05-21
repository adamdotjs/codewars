// 8 KYU
// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
	return str
		.split('')
		.map((c) => c + c)
		.join('');
}
