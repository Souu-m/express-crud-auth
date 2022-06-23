const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"BRANCHE",
		{
			CODE_BR: {
				type: DataTypes.STRING(3),
				allowNull: false,
				primaryKey: true,
			},
			NOM_BR: {
				type: DataTypes.STRING(30),
				allowNull: true,
			},
			SECTEUR_DACTIVITE: {
				type: DataTypes.STRING(30),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "BRANCHE",
			schema: "dbo",
			timestamps: false,
			indexes: [
				{
					name: "PK_BRANCHE",
					unique: true,
					fields: [{ name: "CODE_BR" }],
				},
			],
		}
	);
};
