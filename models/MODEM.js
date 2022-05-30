const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MODEM', {
    IP_MODEM: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    NS_MODEM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IMEI_MODEM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADR_WAN_: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NS_SIM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADR_WAN_CLIENT: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IP_SIM: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REMARQUE_MODEM: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MODEM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MODEM",
        unique: true,
        fields: [
          { name: "IP_MODEM" },
        ]
      },
    ]
  });
};
