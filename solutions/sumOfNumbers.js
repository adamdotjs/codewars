//7 KYU
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
	const startingNum = Math.min(a, b);
	const endingNum = Math.max(a, b);

	if (a === b) {
		return a;
	} else {
		let sum = 0;
		for (let i = startingNum; i <= endingNum; i++) {
			sum += i;
		}
		return sum;
	}
}
