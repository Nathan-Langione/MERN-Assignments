import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
function App() {
	return (
		<div className="App">
			<Form
				firstName={"Jane"}
				lastName={"Doe"}
				age={45}
				hairColor={"Black"}
			/>
		</div>
	);
}

export default App;
