const db = require("../common/database");
const Sequelize = require("sequelize")

const Bookings = require('./Bookings')

const Tickets = db.define('tickets', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  booking_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  seat_code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  createat: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    allowNull:false
  }
})

Tickets.belongsTo(Bookings)
module.exports = Tickets
