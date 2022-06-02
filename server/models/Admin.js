const db = require("../common/database");

const Sequelize = require("sequelize");

const Admin = db.define("admin", {
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
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