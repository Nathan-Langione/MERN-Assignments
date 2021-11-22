const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
	return {
		_id: faker.datatype.uuid(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		phoneNumber: faker.phone.phoneNumber(),
		email: faker.internet.email(),
		passsword: faker.internet.password(),
	};
	return newFake;
};

const createCompany = () => {
	return {
		_id: faker.datatype.uuid(),
		name: faker.company.companyName(),
		address: {
			streetAddress: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.state(),
			zip: faker.address.zipCode(),
			country: faker.address.country(),
		},
	};
};

app.get("/api/users/new", (req, res) => {
	const newUser = createUser();
	res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
	const newCompany = createCompany();
	res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
	const newUser = createUser();
	const newCompany = createCompany();
	res.json({ user: newUser, company: newCompany });
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
