const { db, DataTypes } = require('../utils/dataBase.util');

const Client = db.define('client', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  telephone: {
    type: DataTypes.FLOAT(),
    allowNull: false,
    validate: {
      min: 1,
      max: 999999999999,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(12),
    allowNull: false,
    // validate: {
    //     min: 1,
    //     max: 999999999999,
    //   },
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  identificationDocument: {
    type: DataTypes.INTEGER(12),
    allowNull: false,
    unique: true,
    validate: {
        min: 1,
        max: 999999999999,
      },
  },
  idDocumentPdf: {
    type: DataTypes.STRING(12),
    allowNull: true,
   
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active',
  },

});

module.exports = { Client };
