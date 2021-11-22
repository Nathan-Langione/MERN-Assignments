import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import Landing from "./components/landing";
import Number from "./components/number";
import Word from "./components/word";
import HBR from "./components/hbr";
function App() {
	return (
		<div className="App">
			<Router>
				<Landing path="/home" />
				<Number path="/:number" />
				<Word path="/:word" />
				<HBR path="/:word/blue/red" />
			</Router>
		</div>
	);
}

export default App;
