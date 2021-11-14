import "./App.css";
import { useState } from "react";

function App() {
	const [color, setColor] = useState("");
	const [colorArr, setColorArr] = useState([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setColorArr([...colorArr, color]);
	};
	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				Color:
				<input
					type="text"
					onChange={(e) => setColor(e.target.value)}
					value={color}
				/>
					Width:
				<input
					type="text"
					onChange={(e) => setColor(e.target.value)}
					value={width}
				/>
				<button type="submit">Submit Color</button>
			</form>
			<h2>Color Boxes</h2>
			{colorArr.map((color, index) =>(
				<div style={{...boxStyle, backgroundColor: color}}>
			)}
		</div>
	);
}

export default App;
