const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost/example_proj_db", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Established a connection to the database"))
	.catch((err) =>
		console.log(
			"Something went wrong when connecting to the database ",
			err
		)
	);