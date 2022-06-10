const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LIAISON', {
    NUM_LIGNE: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    CODE_SITE: {
      type: DataTypes.STRING(11),
      allowNull: false,
      references: {
        model: 'SITE',
        key: 'CODE_SITE'
      }
    },
    NS_MODEM: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'EQUIPEMENT',
        key: 'NS_MODEM'
      }
    },
    ID_AB: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ABONNEMENT',
        key: 'ID_AB'
      }
    },
    TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    MISE_SERVICE: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    OPERATEUR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DEBIT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RMRQ: {
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
        name: "AVOIR_FK",
        fields: [
          { name: "ID_AB" },
        ]
      },
      {
        name: "BRANCHER_FK",
        fields: [
          { name: "NS_MODEM" },
        ]
      },
      {
        name: "CONNECTER_FK",
        fields: [
          { name: "CODE_SITE" },
        ]
      },
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
