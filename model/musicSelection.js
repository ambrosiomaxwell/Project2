module.exports = (sequelize, DataTypes) => {
    const musicSelection = sequelize.define('Todo', {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
    });
    return musicSelection;
};