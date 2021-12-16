const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/product_manager", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to the database product_manager"))
    .catch((err) =>
        console.log("Something went wrong when connecting to the database product_manager", err)
    );
