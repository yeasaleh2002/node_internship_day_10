const express = require("express");
const path = require("path");
const fs = require("fs");
const htmlToPdf = require("html-pdf-node");
const Invoice = require("../models/Invoice");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const invoices = await Invoice.findAll(); 
    res.json(invoices); 
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;
    const invoice = await Invoice.findOne({ where: { code } });

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    const templatePath = path.join(__dirname, "../templates/invoice.html");
    const htmlTemplate = fs.readFileSync(templatePath, "utf8");

    const invoiceHtml = htmlTemplate
      .replace("{{code}}", invoice.code)
      .replace("{{amount}}", invoice.amount)
      .replace("{{service}}", invoice.service);

    const options = { format: "A4" };
    const file = { content: invoiceHtml };

    htmlToPdf.generatePdf(file, options).then((pdfBuffer) => {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=invoice_${invoice.code}.pdf`
      );
      res.send(pdfBuffer); 
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating invoice" });
  }
});

module.exports = router;
