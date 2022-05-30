const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INTERCONNECTION', {
    CODE_SITE: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SITE',
        key: 'CODE_SITE'
      }
    },
    NUM_LIGNE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'LIAISON',
        key: 'NUM_LIGNE'
      }
    },
    ID_DATE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'DATE',
        key: 'ID_DATE'
      }
    },
    DEBIT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUM_INTERNE: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INTERCONNECTION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "CONNECTER_FK",
        fields: [
          { name: "ID_DATE" },
        ]
      },
      {
        name: "CONNECTER2_FK",
        fields: [
          { name: "CODE_SITE" },
        ]
      },
      {
        name: "CONNECTER3_FK",
        fields: [
          { name: "NUM_LIGNE" },
        ]
      },
      {
        name: "PK_INTERCONNECTION",
        unique: true,
        fields: [
          { name: "CODE_SITE" },
          { name: "NUM_LIGNE" },
          { name: "ID_DATE" },
        ]
      },
    ]
  });
};
