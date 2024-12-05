const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Invoice = sequelize.define('Invoice', {
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    service: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true, // This will add createdAt and updatedAt fields
});

module.exports = Invoice; 