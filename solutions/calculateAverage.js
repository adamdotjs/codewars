// 8 KYU
// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(arr) {
	return !arr.length ? 0 : arr.reduce((a, c) => a + c, 0) / arr.length;
}
