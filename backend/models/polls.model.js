module.exports = (sequelize, Sequelize) => {
    const Poll = sequelize.define("poll", {
        title: {
            type: Sequelize.STRING
        },
        total_vote: {
            type: Sequelize.INTEGER 
        },
        start: {
            type: Sequelize.DATE 
        },
        end: {
            type: Sequelize.DATE 
        },
        status: {
            type: Sequelize.INTEGER 
        }
    });
    return Poll;
};