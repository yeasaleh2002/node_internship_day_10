const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const invoiceRoutes = require('./routes/invoice'); // Import invoice routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/v1/invoices', invoiceRoutes); // Attach invoice routes to /api/v1/invoices
app.use('/api/v1/code', invoiceRoutes); // Route for downloading PDF invoices

// Default route for testing
app.get('/', (req, res) => {
  res.send('API is working!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
