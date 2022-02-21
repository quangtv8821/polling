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
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.poll= require("./polls.model.js")(sequelize, Sequelize)
db.user= require("./user.model.js")(sequelize, Sequelize)
db.vote= require("./vote.model.js")(sequelize, Sequelize)
db.is_vote= require("./is_vote.model.js")(sequelize, Sequelize);
module.exports = db;