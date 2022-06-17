const db = require("../config/db");
const Sequelize = require('sequelize');
const Movies = require('./Movies');
const Cinemas = require('./Cinemas');

const Showtimes = db.define('showtime', {
  showtime_id:{
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  movie_id:{
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  cinema_id:{
    type:Sequelize.INTEGER,
    allowNull: false
  },
  start_time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull:false
  },
  end_time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull:false
  },
  price: {
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
});

Showtimes.belongsTo(Movies)
Showtimes.belongsTo(Cinemas)

module.exports = Showtimes