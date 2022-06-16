const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"UsersAccount",
		{
			UserID: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			Username: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
			LastName: {
				type: DataTypes.STRING(10),
				allowNull: true,
			},
			FirstName: {
				type: DataTypes.STRING(10),
				allowNull: true,
			},
			Branch: {
				type: DataTypes.STRING(10),
				allowNull: true,
			},
			Password: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			roles: {
				type: DataTypes.INTEGER,
				default: 2000,
			},
			refreshToken: { type: DataTypes.STRING },
		},

		{
			sequelize,
			freezeTableName: true,
			tableName: "UsersAccount",
			schema: "dbo",
			timestamps: false,
			indexes: [
				{
					name: "PK__UsersAcc__1788CCAC610DF403",
					unique: true,
					fields: [{ name: "UserID" }],
				},
			],
		}
	);
};
