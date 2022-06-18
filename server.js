const express = require("express");
const cors = require("cors");
const app = express();
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const corsOptions = require("./config/corsOptions");
const db = require("./models");
const PORT = process.env.PORT || 8080;

//----------call db sync----------------------------
//----(make sure that "force" is set to false)----------
db.sequelize.sync({ force: false });
//---------middlware---------------
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
//for cookies
app.use(cookieParser());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
//-------------------
app.use(cookieParser());
const auth = require("./routes/auth.routes");
app.use("/api", auth);
const refresh = require("./routes/refresh");
app.use("/api", refresh);
const logout = require("./routes/logOut");
app.use("/api", logout);
const LiaisonRouter = require("./routes/liaison.routes");
app.use("/api", LiaisonRouter);
app.use(verifyJWT);
const UsersRouter = require("./routes/users.routes");
app.use("/api", UsersRouter);

// set port, listen for requests

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
