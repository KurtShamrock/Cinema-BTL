const db = require("../config/db");

const Sequelize = require("sequelize");

const Admin = db.define("admin", {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },

  fullname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    unique:true,
    allowNull: false
  },
  avata: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createat: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  updateat: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Admin