const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BRANCHEMENT', {
    IP_MODEM: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'MODEM',
        key: 'IP_MODEM'
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
    IP_ROUTER: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ROUTER',
        key: 'IP_ROUTER'
      }
    },
    KIT_CODE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOM_OFFRE: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BRANCHEMENT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "BRANCHER_FK",
        fields: [
          { name: "IP_ROUTER" },
        ]
      },
      {
        name: "BRANCHER2_FK",
        fields: [
          { name: "IP_MODEM" },
        ]
      },
      {
        name: "BRANCHER3_FK",
        fields: [
          { name: "NUM_LIGNE" },
        ]
      },
      {
        name: "PK_BRANCHEMENT",
        unique: true,
        fields: [
          { name: "IP_MODEM" },
          { name: "NUM_LIGNE" },
          { name: "IP_ROUTER" },
        ]
      },
    ]
  });
};
