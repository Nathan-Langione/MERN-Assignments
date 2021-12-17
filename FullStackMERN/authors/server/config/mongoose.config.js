const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/authors", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to the database authors"))
    .catch((err) =>
        console.log("Something went wrong when connecting to the database authors", err)
    );