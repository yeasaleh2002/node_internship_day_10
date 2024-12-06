// Function to fetch invoice data from the backend API
function fetchInvoices() {
    fetch('http://localhost:3000/api/v1/invoices')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#invoice-table tbody');
        data.forEach(invoice => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${invoice.code}</td>
            <td>${invoice.amount}</td>
            <td>${invoice.service}</td>
            <td><button onclick="downloadInvoice('${invoice.code}')">Download</button></td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching invoices:', error);
      });
  }
  
  // Function to download invoice by code
  function downloadInvoice(code) {
    const url = `http://localhost:3000/api/v1/code/${code}`;
    window.location.href = url; // Trigger the download by setting location to the URL
  }
  
  // Fetch invoices when the page loads
  document.addEventListener('DOMContentLoaded', fetchInvoices);
  