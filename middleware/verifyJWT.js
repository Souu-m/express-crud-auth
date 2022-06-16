const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
	const authHeader = req.headers.authorization || req.headers.Authorization;
	if (!authHeader?.startsWith("Bearer")) return res.sendStatus(401);
	console.log("bearer token BEFORE", authHeader); //bearer token
	const token = authHeader && authHeader.split(" ")[1];
	console.log("U stoping here VERJWT", token);

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		console.log("U HERE decoced?", decoded);
		if (err) {
			return res.sendStatus(403);
		}
		req.user = decoded.username;
		req.roles = decoded.roles;
		console.log(
			"THIS IS USERNAME: ",
			decoded.username,
			"THIS IS ROLES: ",
			decoded.roles
		);
		console.log("THIS IS REQ DOT USER", req.user);
		next();
	});
};

module.exports = verifyJWT;
