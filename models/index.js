const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Invoice = sequelize.define("Invoice", {
  code: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  service: { type: DataTypes.STRING, allowNull: false },
});

sequelize.sync({ alter: true });

module.exports = Invoice;
