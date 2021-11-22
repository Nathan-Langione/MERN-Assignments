import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import Landing from "./components/landing";
import Number from "./components/number";
import Word from "./components/word";

function App() {
	return (
		<div className="App">
			<Router>
				<Landing path="/home" />
				<Number path="/number" />
				<Word path="/word" />
			</Router>
		</div>
	);
}

export default App;
