const db = require("../common/database");
const Sequelize = require("sequelize");

const Cineplexs = db.define("cineplexs", {
  cineplex_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image:{
    type: Sequelize.TEXT,
    allowNull:false
  },
  googlemapurl: {
    type: Sequelize.TEXT,
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

module.exports = Cineplexs