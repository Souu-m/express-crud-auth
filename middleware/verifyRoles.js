const verifyRoles = (...allowedRoles) => {
	return (req, res, next) => {
		console.log("SOO U HERE BEGIN ROLES?", req.roles);
		if (!req?.roles) return res.sendStatus(401);
		const rolesArray = [...allowedRoles];
		const userRole = req.roles;
		if (rolesArray.includes(userRole)) {
			next();
		} else {
			return res.sendStatus(401);
		}
	};
};

module.exports = verifyRoles;
