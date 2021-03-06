module.exports = (sequelize, DataTypes) => {
    const musicSelection = sequelize.define('musicSelection', {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN,
    });
    return musicSelection;
};