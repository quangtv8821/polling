module.exports = (sequelize, Sequelize) => {
  const Is_votes = sequelize.define("is_vote", {
    user_id: {
      type: Sequelize.INTEGER
    },
    vote_id: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    }
  });
  return Is_votes;
};