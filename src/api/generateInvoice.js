const { createInvoice } = require('html-pdf-node');
const fs = require('fs');
const path = require('path');

const generateInvoice = async (req, res) => {
    const { code, amount, service } = req.query;

    // Create invoice data
    const invoiceData = {
        code,
        amount,
        service,
    };

    // Use the template to create the invoice
    const options = { format: 'A4' };
    const file = { content: `<h1>Invoice for ${service}</h1><p>Amount: ${amount}</p>` }; // Replace with actual template

    try {
        const pdfBuffer = await createInvoice(file, options);
        const filePath = path.join(__dirname, 'invoices', `${code}.pdf`);
        fs.writeFileSync(filePath, pdfBuffer);
        res.download(filePath);
    } catch (error) {
        res.status(500).send('Error generating invoice');
    }
};

module.exports = generateInvoice; 