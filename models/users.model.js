module.exports = (sequelize, Sequelize) => {
	const users = sequelize.define(
		"UsersAccount",
		{
			UserID: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},

			FirstName: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			LastName: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			Branch: {
				type: Sequelize.STRING(10),
			},
			Password: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
		}
	);
	return users;
};
