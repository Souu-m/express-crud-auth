const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ABONNEMENT', {
    ID_AB: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_ACTIVATION: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    DATE_EXPIRATION: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RMRQ: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ABONNEMENT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ABONNEMENT",
        unique: true,
        fields: [
          { name: "ID_AB" },
        ]
      },
    ]
  });
};
