const fs = require('fs');
const path = require('path');
const sequelize = require('sequelize');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);

const env = process.env.NODE_ENV || 'development';
//ßconst config = require(`${__dirname}/../config/config.json`)[env];

/*if (config.use_env_variable){
    sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        process.env.DB_PASS,
        config
    );
}*/