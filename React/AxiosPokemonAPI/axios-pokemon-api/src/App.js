import "./App.css";
import React, { useState } from "react";

function App() {
	function tossCoin() {
		return Math.random() > 0.5 ? "heads" : "tails";
	}

	function fiveHeads() {
		return new Promise((resolve, reject) => {
			let headsCount = 0;
			let attempts = 0;
			attempts++;
			let result = tossCoin();
			if (result === "heads") {
				headsCount++;
			} else {
				headsCount = 0;
			}
			let val = attempts;
			if ((headsCount = 5)) {
				resolve(val);
			} else {
				reject("Unable to flip 5 heads in 100 tosses");
			}
		});
	}
	fiveHeads()
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
	console.log("When does this run now?");

	return <div className="App"></div>;
}

export default App;
