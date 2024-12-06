const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_ADAPTER || 'mysql', // Use MySQL by default
  }
);

// Define the Invoice model
const Invoice = sequelize.define('Invoice', {
  code: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  service: { type: DataTypes.STRING, allowNull: false },
});

// Sync model with the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();

module.exports = Invoice;
