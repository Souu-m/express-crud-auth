const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
	origin: "http://localhost:3000",
};

//---------middlware---------------
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//-------------------

//----------call db sync----------------------------
//----(make sure that "force" is set to false)----------
const db = require("./models");
db.sequelize.sync({ force: false });

//---calling routes----
//(test with http://localhost:8080/api/allUsers)
const UsersRouter = require("./routes/users.routes");
app.use("/api", UsersRouter);
const LiaisonRouter = require("./routes/liaison.routes");
app.use("/api", LiaisonRouter);
const auth = require("./routes/auth.routes");
app.use("/api", auth);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
