// 8 KYu
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

const countPositivesSumNegatives = (input) => {
	if (!input || !input.length) {
		return [];
	}
	const positiveCount = input.filter((num) => num > 0).length;
	const negativesSum = input.filter((num) => num < 0).reduce((a, c) => a + c, 0);

	return [positiveCount, negativesSum];
};
