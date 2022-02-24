module.exports = (sequelize, Sequelize) => {
  const Votes = sequelize.define("votes", {
    title: {
      type: Sequelize.STRING
    },
    total: {
      type: Sequelize.INTEGER
    },
    poll_id: {
      type: Sequelize.INTEGER
    }
  });
  return Votes;
};