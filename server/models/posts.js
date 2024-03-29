'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts.belongsTo(models.Users, { foreignKey: { name: "user_id", allowNull: false }, onDelete: "CASCADE" });
      Posts.hasMany(models.Posts_comments, { foreignKey: "user_id" })
    }
  }
  Posts.init({
    user_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    message: DataTypes.TEXT,
    total_comments: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};