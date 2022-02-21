module.exports = (sequelize, Sequelize) => {
    const Is_vote = sequelize.define("is_vote", {
        id_user: {
            type: Sequelize.INTEGER
        },
        id_vote: {
            type: Sequelize.INTEGER 
        },
        status: {
            type: Sequelize.INTEGER 
        }
    });
    return Is_vote;
};