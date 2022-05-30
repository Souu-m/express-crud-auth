const bcrypt = require("bcrypt");
const db = require("../models");

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
	if (!foundUser) {
		return res.sendStatus(401);
	}
	const match = await bcrypt.compare(password, foundUser.Password);
	if (match) {
		res.json({ success: `User ${username} is logged in` });
	} else {
		res.send("pwd faux");
	}
};

module.exports = { handleLogin };
