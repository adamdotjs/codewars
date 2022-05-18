// 6 KYU
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
	const counts = {};

	string.split('').forEach((c) => (counts[c] ? (counts[c] += 1) : (counts[c] = 1)));

	return counts;
}
