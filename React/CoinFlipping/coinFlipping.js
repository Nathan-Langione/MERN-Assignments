function tossCoin() {
	return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
	return new Promise((resolve, reject) => {
		let headsCount = 0;
		let attempts = 0;
		let max = 100;

		while (headsCount < 5 && attempts <= max) {
			attempts++;
			let result = tossCoin();
			if (result === "heads") {
				headsCount++;
			} else {
				headsCount = 0;
			}
		}
		if (attempts <= max) {
			resolve(`It took ${attempts} tries to flip five "heads"`);
		} else {
			reject(`Attempts have exceeded ${max} flips.`);
		}
	});
}
fiveHeads()
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
console.log("When does this run now?");
