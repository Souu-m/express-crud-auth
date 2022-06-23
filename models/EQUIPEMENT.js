const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"EQUIPEMENT",
		{
			NS_MODEM: {
				type: DataTypes.STRING(50),
				allowNull: false,
				primaryKey: true,
			},
			NS_SIM: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			IMEI_MODEM: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			ADR_IP: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			ADR_WAN_RSM: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			ADR_WAN_CLIENT: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "EQUIPEMENT",
			schema: "dbo",
			timestamps: false,
			indexes: [
				{
					name: "PK_EQUIPEMENT",
					unique: true,
					fields: [{ name: "NS_MODEM" }],
				},
			],
		}
	);
};
