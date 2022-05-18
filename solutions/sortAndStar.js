// 8 KYU
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

function twoSort(s) {
	const firstWord = s.sort()[0];
	return firstWord.split('').join('***');
}
