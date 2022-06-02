const db = require("../common/database");
const Sequelize = require('sequelize');

const Movies = db.define('movies', {
  movies_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type:Sequelize.TEXT,
    allowNull:false
  },
  release_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  poster: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  traiLers: {
    type: Sequelize.STRING,
    allowNull: false
  },
  running_time: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false
  },
  actor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  active:{
    type: Sequelize.BOOLEAN,
    allowNull:true
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

module.exports = Movies