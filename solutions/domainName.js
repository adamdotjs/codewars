function domainName(url) {
	const prefixes = ["http://", "https://", "www."];
	let domain = url;

	// create a helper function to remove prefix from url string
	const removeUrlData = (str, part) => (domain = str.replace(part, ""));

	// loop over each prefix and execute the helper function
	prefixes.forEach((prefix) => removeUrlData(domain, prefix));

	return domain.split(".")[0];
}
