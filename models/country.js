'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('countries', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    }, {
        indexes: [{
            fields: ['name']
        }]
    });
};
