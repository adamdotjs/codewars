//8 KYU
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
	const bmi = weight / Math.pow(height, 2);

	if (bmi <= 18.5) {
		return 'Underweight';
	} else if (bmi <= 25) {
		return 'Normal';
	} else if (bmi <= 30) {
		return 'Overweight';
	} else if (bmi > 30) {
		return 'Obese';
	}
}
