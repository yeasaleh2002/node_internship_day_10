# day 10

## Instructions

- setup project
- clone to your github
- Create a page /code where we show a QR Code. The QR code goes to the route /api/v1/code/<code>?amount=1&service=software service. The code can be random
- When user scans the code, it will download pdf invoice with the amount specified in url. The service will also specified
- use this invoice template https://github.com/sparksuite/simple-html-invoice-template
- Use this library html-pdf-node

### API Endpoint
- To generate an invoice, call the endpoint: `/api/v1/code/<code>?amount=<amount>&service=<service>`

- Everything must be done by end of date

- Create an HTML and JS file to display a table of data with a download button for each entry. 
- When the download button is clicked, it should download an invoice for that data.
