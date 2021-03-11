module.exports = (sequelize, DataTypes) => {
    const Names = sequelize.define('Names', {
        text: {
            name: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1,140],
            },
        },
        text: {
            email: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,140],
            },
        },
    });
    return Names;
};
