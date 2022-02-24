const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  logging: dbConfig.logging //disable logging
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.polls = require("./polls.model.js")(sequelize, Sequelize)
db.users = require("./user.model.js")(sequelize, Sequelize)
db.votes = require("./vote.model.js")(sequelize, Sequelize)
db.is_votes = require("./is_vote.model.js")(sequelize, Sequelize)

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connection()

module.exports = db;