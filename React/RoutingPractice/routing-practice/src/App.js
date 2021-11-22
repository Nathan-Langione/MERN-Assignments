import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import Landing from "./components/landing";
import Word from "./components/word";
import HBR from "./components/hbr";

function App() {
	return (
		<div className="App">
			<Router>
				<Landing path="/home" />
				<Word path="/:val" />
				<HBR path="/:word/:font/:color" />
			</Router>
		</div>
	);
}

export default App;
