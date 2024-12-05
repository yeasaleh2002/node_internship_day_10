const express = require('express');
const generateInvoice = require('./api/generateInvoice');
const CodePage = require('./components/CodePage');
const sequelize = require('./db');
const Invoice = require('./models/Invoice');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', CodePage);
app.get('/api/v1/code/:code', generateInvoice);

// Sync database and create sample data
sequelize.sync({ force: true }).then(async () => {
    console.log('Database & tables created!');

    // Create sample data
    const sampleInvoices = [
        { code: 'INV001', amount: 100.00, service: 'Software Development' },
        { code: 'INV002', amount: 200.00, service: 'Web Design' },
        { code: 'INV003', amount: 150.00, service: 'SEO Services' },
        { code: 'INV004', amount: 300.00, service: 'Consulting' },
        { code: 'INV005', amount: 250.00, service: 'Marketing' },
        { code: 'INV006', amount: 400.00, service: 'Content Creation' },
        { code: 'INV007', amount: 350.00, service: 'Graphic Design' },
        { code: 'INV008', amount: 450.00, service: 'App Development' },
        { code: 'INV009', amount: 500.00, service: 'Data Analysis' },
        { code: 'INV010', amount: 600.00, service: 'Cloud Services' },
    ];

    await Invoice.bulkCreate(sampleInvoices);
    console.log('Sample data created!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 