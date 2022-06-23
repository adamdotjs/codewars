// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

const findMultiples = (int, limit) =>
	new Array(Math.floor(limit / int)).fill('').map((_, i) => int * (i + 1));
