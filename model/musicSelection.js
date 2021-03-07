module.exports = (sequelize, DataTypes) => {
    const musicSelection = sequelize.define('musicSelection', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      // considering adding complete datatypes.BOOLEAN to see if music selection is complete.
    });
    return musicSelection;
};