// 7 KYU
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

function number(array) {
	if (array.length) {
		return array.map((item, i) => `${i + 1}: ${item}`);
	} else {
		return [];
	}
}
