// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const likes = sequelizeClient.define('likes', {
    LIKES_ID: {
      type: DataTypes.STRING(4),
      allowNull: false,
    },
    Number_Likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    USERS_ID: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    POSTS_ID: {
      type: DataTypes.STRING(4),
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  likes.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return likes;
};
