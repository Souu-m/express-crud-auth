const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DATE', {
    DATE_ACTIVATION: {
      type: DataTypes.DATE,
      allowNull: false
    },
    DATE_EXPIRATION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RMRQ: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ID_DATE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'DATE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DATE",
        unique: true,
        fields: [
          { name: "ID_DATE" },
        ]
      },
    ]
  });
};
