// 7 KYU
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
	const numbersArray = numbers.split(' ').sort((a, z) => z - a);
	return `${numbersArray[0]} ${numbersArray[numbersArray.length - 1]}`;
}
