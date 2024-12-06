const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const invoiceRoutes = require('./routes/invoice'); 

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/invoices', invoiceRoutes);
app.use('/api/v1/code', invoiceRoutes);

app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
