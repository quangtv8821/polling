module.exports = (sequelize, Sequelize) => {
    const Vote = sequelize.define("vote", {
        title: {
            type: Sequelize.STRING
        },
        total: {
            type: Sequelize.INTEGER 
        },
        id_poll: {
            type: Sequelize.INTEGER 
        }
    });
    return Vote;
};