import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon/?limit=810")
			.then((response) => response.json())
			.then((response) => setPeople(response.results));
	}, []);

	return (
		<div>
			{people.length > 0 &&
				people.map((person, index) => {
					return <div key={index}>{person.name}</div>;
				})}
		</div>
	);
}
export default App;
