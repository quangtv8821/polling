module.exports = (sequelize, Sequelize) => {
  const Votes = sequelize.define("votes", {
    title: {
      type: Sequelize.STRING
    },
    total: {
      type: Sequelize.INTEGER
    },
    pollId: {
      type: Sequelize.INTEGER
    },
  });
  Votes.associate = (models) => {
    Votes.belongsTo(models.Polls)
  }
  return Votes;
};