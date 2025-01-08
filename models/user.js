const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'Name cannot be empty' },
            is: {
                args: /^[a-zA-Z\s]+$/,
                msg: 'Name must contain only letters and spaces'
            }
        },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: { msg: 'Email must be a valid email address' }
        }
    }
}});

module.exports = User;
