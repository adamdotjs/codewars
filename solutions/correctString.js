// 8 KYU
// https://www.codewars.com/kata/577bd026df78c19bca0002c0

function correct(string) {
	return string
		.split('')
		.map((char) => {
			switch (char) {
				case '5':
					return 'S';
				case '0':
					return 'O';
				case '1':
					return 'I';
				default:
					return char;
			}
		})
		.join('');
}
