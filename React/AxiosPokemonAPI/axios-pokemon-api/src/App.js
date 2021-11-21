import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [pokemon, setpokemon] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=810")
			.then((response) => response.json())
			.then((response) => setpokemon(response.results));
	}, []);

	return (
		<div className="App">
			{pokemon.length > 0 &&
				pokemon.map((aPokemon, index) => {
					return <div key={index}>{aPokemon.name}</div>;
				})}
		</div>
	);
}
export default App;
