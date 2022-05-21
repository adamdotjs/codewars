// 8 KYU
// https://www.codewars.com/kata/5865918c6b569962950002a1

function strCount(str, letter) {
	return str.split('').filter((c) => c === letter).length;
}
