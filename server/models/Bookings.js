const db = require("../common/database");
const Sequelize = require('sequelize')

const User = require('./User')
const Showtimes = require('./Showtimes')

const Bookings = db.define('bookings', {
  booking_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  showtime_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  total:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  b_number:{
    type: Sequelize.STRING,
    allowNull: false
  },
  createat: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull:false
  }

})
Bookings.belongsTo(User)
Bookings.belongsTo(Showtimes)
module.exports = Bookings