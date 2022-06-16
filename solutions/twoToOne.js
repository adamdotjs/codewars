// 7 KYU
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// steps
// - combine the strings
// - dedupe the strings
// - sort ascending

const longest = (s1, s2) => {
	return [...new Set(s1 + s2)].sort().join('');
};
