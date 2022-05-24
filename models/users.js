module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define("user", {
		FirstName: {
			type: Sequelize.STRING,
		},
		LastName: {
			type: Sequelize.STRING,
		},
		Branche: {
			type: Sequelize.STRING,
		},
		Password: {
			type: Sequelize.STRING,
		},
	});
	return user;
};
