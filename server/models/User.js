const db = require("../common/database");

const Sequelize = require("sequelize");

const User = db.define("c_user", {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true 
  },
  role:{
    type: Sequelize.String,
    default: "Basic",
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    minlength: 6
  },

  fullname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull:true,
    unique: true
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  avata: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  resetpasswordtoken: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createat:{
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull:false
  },
  updateat:{
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull:false
  }
});

module.exports = User