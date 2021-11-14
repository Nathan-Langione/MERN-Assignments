import React, { useState } from "react";
import "./App.css";

function App() {
	const [newTodo, setNewTodo] = useState("");
	const [todoList, setTodoList] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();

		if (newTodo.length === 0) {
			return;
		}

		const todoObj = {
			text: newTodo,
			complete: false,
		};

		setTodoList([...todoList, todoObj]);
		setNewTodo("");
	};

	const handleDelete = (deleteInd) => {
		const filteredList = todoList.filter((todo, index) => {
			return index !== deleteInd;
		});

		setTodoList(filteredList);
	};

	const handleChangeComplete = (completeInd) => {
		const updated = todoList.map((todo, index) => {
			if (completeInd === index) {
				todo.complete = !todo.complete;
			}
			return todo;
		});
		setTodoList(updated);
	};

	return (
		<div className="App">
			<h1>Todo List</h1>
			<hr />
			<h2> Add a new item to your list </h2>
			<form
				onSubmit={(event) => {
					handleSubmit(event);
				}}
			>
				<input
					onChange={(event) => {
						setNewTodo(event.target.value);
					}}
					type="text"
					value={newTodo}
				/>
				<div>
					<button>Add</button>
				</div>
			</form>

			<br />

			<h2> List </h2>
			<div>
				{todoList.map((todo, index) => {
					return (
						<div>
							{todo.text}{" "}
							<input
								onChange={(event) => {
									handleChangeComplete(index);
								}}
								checked={todo.complete}
								type="checkbox"
							/>
							<button
								onClick={(event) => {
									handleDelete(index);
								}}
							>
								Delete
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
