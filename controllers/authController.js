const bcrypt = require("bcrypt");
const db = require("../models");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogin = async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res
			.status(400)
			.json({ message: "Username and password are required." });
	}
	const foundUser = await db.UsersAccount.findOne({
		where: {
			Username: username,
		},
	});
	//Unauthorized
	if (!foundUser) {
		return res.sendStatus(401);
	}
	// evaluate password
	const match = await bcrypt.compare(password, foundUser.Password);
	if (match) {
		const roles = foundUser.roles;
		console.log(roles);

		const accessToken = jwt.sign(
			{
				username: foundUser.Username,
				roles: roles,
			},

			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "10m" }
		);
		const refreshToken = jwt.sign(
			{ username: foundUser.Username },
			process.env.REFRESH_TOKEN_SECRET,
			{ expiresIn: "1d" }
		);

		// Saving refreshToken with current user
		foundUser.refreshToken = refreshToken;
		const result = await foundUser.save();

		// create JWTs
		console.log("done match");

		// Creates Secure Cookie with refresh token
		// // Send authorization access token to user
		// res.json({accessToken });
		res.cookie("jwt", refreshToken, {
			httpOnly: true,
			// secure: true,
			SameSite: "None",
			maxAge: 24 * 60 * 60 * 1000,
		});

		res.json({ roles, accessToken });
	} else {
		res.sendStatus(401);
	}
};

module.exports = { handleLogin };
