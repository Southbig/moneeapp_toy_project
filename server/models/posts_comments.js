'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts_comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts_comments.belongsTo(models.Users, { foreignKey: { name: "user_id", allowNull: false }, onDelete: "CASCADE" });
      Posts_comments.belongsTo(models.Posts, { foreignKey: { name: "post_id", allowNull: false }, onDelete: "CASCADE" });
    }
  }
  Posts_comments.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Posts_comments',
  });
  return Posts_comments;
};