module.exports = (sequelize, DataTypes) => {
    const Name = sequelize.define('Name', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
    });
    return Name;
};
