const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
	origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//-------------------

//--call sync-
const db = require("./models");
db.sequelize.sync({ force: false });

// simple route
app.get("/", (req, res) => {
	res.json({ message: "Welcome " });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./routes/users.routes")(app);
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
