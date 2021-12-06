const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, "setup is required"],
			minlength: [6, "setup must be at least 6 characters long"],
		},
		punch_line: {
			type: String,
			required: [true, "punch line is required"],
			minlength: [1, "punch line must be at least 6 characters long"],
		},
	},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
