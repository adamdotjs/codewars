// 7 KYU
// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
	let newPop = p0;
	let years = 0;

	while (newPop < p) {
		newPop += Math.floor(newPop * (percent / 100) + aug);
		years++;
	}

	return years;
}
