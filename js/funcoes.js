// Fatorial

function fat(n) {
	if (n == 0 || n == 1)
		return 1;
	return n * fat(n - 1);
}

console.log(fat(5));