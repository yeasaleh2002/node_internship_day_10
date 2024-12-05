const express = require('express');
const QRCode = require('qrcode');
const router = express.Router();

router.get('/code', async (req, res) => {
    const randomCode = Math.random().toString(36).substring(2, 15);
    const amount = 1; // You can modify this as needed
    const service = 'software service'; // You can modify this as needed
    const qrCodeUrl = `/api/v1/code/${randomCode}?amount=${amount}&service=${service}`;

    try {
        const qrCodeImage = await QRCode.toDataURL(qrCodeUrl);
        res.send(`
            <h1>QR Code for Invoice</h1>
            <img src="${qrCodeImage}" alt="QR Code" />
            <p>Scan the QR code to download your invoice.</p>
        `);
    } catch (error) {
        res.status(500).send('Error generating QR code');
    }
});

module.exports = router; 