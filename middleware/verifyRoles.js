const verifyRoles = (...allowedRoles) => {
	return (req, res, next) => {
		if (!req?.roles) return res.sendStatus(401);
		const rolesArray = [...allowedRoles];
		console.log("TESTSTSTTSTS", rolesArray);

		const result = req.roles
			.map((role) => rolesArray.includes(role))
			.find((val) => val === true);
		console.log("TESTSTSTTSTS", result);
		if (!result) return res.sendStatus(401);
		next();
	};
};

module.exports = verifyRoles;
