module.exports = (sequelize, DataTypes) => {
    const Names = sequelize.define('Names', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1,140],
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,140],
            },
        },
    });
    return Names;
};
