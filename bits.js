const UNSIGNED = (n) => n>>>0;

function rotateLeft(n, b){
	n = UNSIGNED(n);
	return ((n<<b|(n>>>(32-b))));
}

function rotateRight(n, b){
	n = UNSIGNED(n);
	return UNSIGNED((n>>>b)|(n<<(32-b)));
}

module.exports = { rotateLeft, rotateRight, UNSIGNED };
