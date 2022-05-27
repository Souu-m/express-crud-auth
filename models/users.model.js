module.exports = (sequelize, Sequelize, DataTypes) => {
	const users = sequelize.define(
		"UsersAccount",
		{
			UserID: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},

			FirstName: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			LastName: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			Branch: {
				type: DataTypes.STRING(10),
			},
			Password: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
			timestamps: false,

			// If don't want createdAt
			createdAt: false,

			// If don't want updatedAt
			updatedAt: false,
		}
	);

	return users;
};
