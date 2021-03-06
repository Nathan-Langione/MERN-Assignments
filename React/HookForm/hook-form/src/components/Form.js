import React, { useState } from "react";

const Form = (props) => {
	const [firstName, setFirstName] = useState("");
	const [firstNameError, setFirstNameError] = useState("");
	const [lastName, setLastName] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [confPasswordError, setConfPasswordError] = useState("");

	const handleFirstName = (e) => {
		setFirstName(e.target.value);
		if (e.target.value.length < 2) {
			setFirstNameError("First Name must be 2 characters or longer!");
		} else {
			// an empty string is considered a "falsy" value
			setFirstNameError("");
		}
	};

	const handleLastName = (e) => {
		setLastName(e.target.value);
		if (e.target.value.length < 2) {
			setLastNameError("Last name must be 2 characters or longer!");
		} else {
			// an empty string is considered a "falsy" value
			setLastNameError("");
		}
	};

	const handleEmail = (e) => {
		setEmail(e.target.value);
		if (e.target.value.length < 5) {
			setEmailError("Email must be 5 characters or longer!");
		} else {
			// an empty string is considered a "falsy" value
			setEmailError("");
		}
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		if (e.target.value.length < 8) {
			setPasswordError("Password must be 8 characters or longer!");
		} else if (e.target.value !== confPassword) {
			setPasswordError("Password must match confirmation password");
		} else {
			// an empty string is considered a "falsy" value
			setPasswordError("");
		}
	};

	const handleConfPassword = (e) => {
		setConfPassword(e.target.value);
		if (e.target.value.length < 8) {
			setConfPasswordError("Password must be 8 characters or longer!");
		} else {
			// an empty string is considered a "falsy" value
			setConfPasswordError("");
		}
	};

	const createUser = (e) => {
		// we must prevent the default refresh of the browser to keep our state from being reset
		e.preventDefault();
		// shorthand ES6 syntax for building an object - see notes above
		const newUser = { firstName, lastName, email, password, confPassword };
		console.log("Welcome", newUser);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setConfPassword("");
	};

	return (
		<div>
			{/* Form to take user input */}
			<form onSubmit={createUser}>
				<div>
					<label>First Name: </label>
					<input
						type="text"
						value={firstName}
						onChange={handleFirstName}
					/>
					{firstNameError ? <p>{firstNameError}</p> : ""}
				</div>
				<div>
					<label>Last Name: </label>
					<input
						type="text"
						value={lastName}
						onChange={handleLastName}
					/>
					{lastNameError ? <p>{lastNameError}</p> : ""}
				</div>
				<div>
					<label>Email Address: </label>
					<input type="text" value={email} onChange={handleEmail} />
					{emailError ? <p>{emailError}</p> : ""}
				</div>
				<div>
					<label>Confirm Password: </label>
					<input
						type="password"
						value={confPassword}
						onChange={handleConfPassword}
					/>
					{confPasswordError ? <p>{confPasswordError}</p> : ""}
				</div>
				<div>
					<label>Password: </label>
					<input
						type="password"
						value={password}
						onChange={handlePassword}
					/>
					{passwordError ? <p>{passwordError}</p> : ""}
				</div>

				{firstNameError ? (
					<input type="submit" value="Create User" disabled />
				) : lastNameError ? (
					<input type="submit" value="Create User" disabled />
				) : emailError ? (
					<input type="submit" value="Create User" disabled />
				) : passwordError ? (
					<input type="submit" value="Create User" disabled />
				) : confPasswordError ? (
					<input type="submit" value="Create User" disabled />
				) : (
					<input type="submit" value="Create User" />
				)}
			</form>

			{/* Display form data in real time */}
			<div>
				<h1>Your Form Data</h1>
				<p>First Name {firstName}</p>
				<p>Last Name {lastName}</p>
				<p>Email {email}</p>
				<p> Confirm Password {confPassword}</p>
				<p> Password {password}</p>
			</div>
		</div>
	);
};
export default Form;
