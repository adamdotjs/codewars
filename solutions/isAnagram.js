// 7 KYU
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

const isAnagram = (string, test) => {
	const format = (str) =>
		str
			.toLowerCase()
			.split("")
			.sort((a, b) => a.localeCompare(b))
			.join("");
	return format(string) === format(test);
};
