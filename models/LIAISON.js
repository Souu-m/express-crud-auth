const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LIAISON', {
    NUM_LIGNE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MISE_SERVICE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OPERATEUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    REMARQUE: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LIAISON',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LIAISON",
        unique: true,
        fields: [
          { name: "NUM_LIGNE" },
        ]
      },
    ]
  });
};
