const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"SITE",
		{
			ID: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
			},
			CODE_WILAYA: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "WILAYA",
					key: "CODE_WILAYA",
				},
			},
			CODE_BR: {
				type: DataTypes.STRING(3),
				allowNull: false,
				references: {
					model: "BRANCHE",
					key: "CODE_BR",
				},
			},
			CODE_SITE: {
				type: DataTypes.STRING(11),
				allowNull: false,
				primaryKey: true,
			},
			DESIGNATION_STRUCTURE: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			LONGITUDE: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
			LATITUDE_: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
			REMARQUE: {
				type: DataTypes.STRING(250),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "SITE",
			schema: "dbo",
			timestamps: false,
		}
	);
};
