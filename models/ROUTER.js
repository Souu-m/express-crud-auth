const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ROUTER', {
    IP_ROUTER: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    LOOP_BACK: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REFERENCE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RMQ_ROUTER: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ROUTER',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ROUTER",
        unique: true,
        fields: [
          { name: "IP_ROUTER" },
        ]
      },
    ]
  });
};
