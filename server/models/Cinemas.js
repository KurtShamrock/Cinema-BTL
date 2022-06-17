const db = require("../config/db");
const Sequelize = require('sequelize')
const Cineplexs = require('./Cineplexs');
const sequelize = require("sequelize");
const Cinemas = db.define("Cinemas", {
  cinema_id:{
    type: sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cineplex_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  //MaCum
  vertical_size: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  horizontal_size: {
    type: Sequelize.INTEGER,
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

})
Cinemas.belongsTo(Cineplexs)
module.exports = Cinemas
