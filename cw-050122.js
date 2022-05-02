///////////
// 8 KYU
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples:
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

function rps(p1, p2) {
	if (
		(p1 === 'rock' && p2 === 'scissors') ||
		(p1 === 'scissors' && p2 === 'paper') ||
		(p1 === 'paper' && p2 === 'rock')
	) {
		return 'Player 1 won!';
	} else if (p1 === p2) {
		return 'Draw!';
	} else {
		return 'Player 2 won!';
	}
}

///////////
// 8 KYU
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(arr) {
	return !arr.length ? 0 : arr.reduce((a, c) => a + c, 0) / arr.length;
}

///////////
// 6 KYU
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => a.filter((n) => !b.includes(n));

///////////
// 6 KYU
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
	const counts = {};
	string.split('').forEach((c) => (counts[c] ? (counts[c] += 1) : (counts[c] = 1)));
	return counts;
}

///////////
// 7 KYU
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

function number(array) {
	if (array.length) {
		return array.map((item, i) => `${i + 1}: ${item}`);
	} else {
		return [];
	}
}

///////////
// 8 KYU
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
	static getVolumeOfCuboid(length, width, height) {
		return length * width * height;
	}
}

///////////
// 8 KYU
// Write a function which converts the input string to uppercase.

const makeUpperCase = (str) => str.toUpperCase();

///////////
// 8 KYU
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) =>
	s
		.split('')
		.filter((c) => c !== '!')
		.join('');

///////////
// 7 KYU
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
	const sum = array.reduce((a, c) => a + c, 0);
	return sum % 2 === 0 ? 'even' : 'odd';
}

///////////
// 7 KYU
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
