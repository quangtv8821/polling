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

//set 1 polls has many votes
db.polls.hasMany(db.votes)
db.votes.belongsTo(db.polls)

//set 1 user has many is_votes
db.users.hasMany(db.is_votes)
db.is_votes.belongsTo(db.users)

//set 1 votes has many is_votes
db.votes.hasMany(db.is_votes)
db.is_votes.belongsTo(db.votes)

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