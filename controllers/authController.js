const bcrypt = require("bcrypt");
const db = require("../models");

// const jwt = require("jsonwebtoken");
// require("dotenv").config();

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
		const roles = Object.values(foundUser.roles).filter(Boolean);

		// create JWTs
		console.log("done match");
		// const accessToken =jwt.sign(
		// 	{"username": foundUser.username},
		// 	process.env.ACCESS_TOKEN_SECRET,
		//     { expiresIn: '30s' }
		// );
		// const refreshToken =jwt.sign(
		// 	{"username": foundUser.username},
		// 	process.env.REFRESH_TOKEN_SECRET,
		//     { expiresIn: '1d' }
		// );

		// // Saving refreshToken with current user
		// foundUser.refreshToken = refreshToken;
		// const result = await foundUser.save();
		// console.log(result);

		// Creates Secure Cookie with refresh token
		// res.cookie('jwt', refreshToken, {httpOnly : true, maxAge: 24*60*60*1000 });
		// // Send authorization access token to user
		// res.json({accessToken });

		res.json({ success: `User ${username} is logged in` });
	} else {
		res.send("pwd faux");
	}
};

module.exports = { handleLogin };
