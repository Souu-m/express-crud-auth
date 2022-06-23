const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"WILAYA",
		{
			CODE_WILAYA: {
				type: DataTypes.STRING(20),
				allowNull: false,
				primaryKey: true,
			},
			NOM_WILAYA: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			REGION: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "WILAYA",
			schema: "dbo",
			timestamps: false,
			indexes: [
				{
					name: "PK_WILAYA",
					unique: true,
					fields: [{ name: "CODE_WILAYA" }],
				},
			],
		}
	);
};
