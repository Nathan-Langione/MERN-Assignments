import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	/* 	const [pokemon, setpokemon] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=810")
			.then((response) => response.json())
			.then((response) => setpokemon(response.results));
	}, []); */

	const [responseData, setResponseData] = useState(null);
	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon/?limit=810")
			.then((response) => {
				setResponseData(response.data);
			});
	}, []);

	return (
		<div className="App">
			{responseData.map((aPokemon, index) => {
				return <div key={index}>{aPokemon.name}</div>;
			})}

			{/* 	{pokemon.length > 0 &&
				pokemon.map((aPokemon, index) => {
					return <div key={index}>{aPokemon.name}</div>;
				})} */}
		</div>
	);
}
export default App;
