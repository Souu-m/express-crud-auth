const db = require("../models");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
	const cookies = req.cookies;
	console.log(cookies);
	//if we have cookies and if we do this cookies we check jwt if not exist we return 400
	if (!cookies?.jwt) {
		return res.sendStatus(401); //unauhorized
	}

	const refreshToken = cookies.jwt;

	const foundUser = await db.UsersAccount.findOne({
		where: { refreshToken: refreshToken },
	});
	console.log(foundUser.Username);
	// evaluate jwt
	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
		if (err || foundUser.Username !== decoded.username)
			return res.sendStatus(403);
		const roles = foundUser.roles;
		const accessToken = jwt.sign(
			{
				username: foundUser.Username,
				roles: roles,
			},
			process.env.ACCESS_TOKEN_SECRET,
			{ expiresIn: "10m" }
		);

		res.json({ accessToken });
	});
};

module.exports = { handleRefreshToken };
