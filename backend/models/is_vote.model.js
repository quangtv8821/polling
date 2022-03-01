module.exports = (sequelize, Sequelize) => {
  const Is_votes = sequelize.define("is_vote", {
    userId: {
      type: Sequelize.INTEGER
    },
    voteId: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    }
  });
  return Is_votes;
};