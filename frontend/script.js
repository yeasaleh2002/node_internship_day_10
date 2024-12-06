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
  
  function downloadInvoice(code) {
    const url = `http://localhost:3000/api/v1/code/${code}`;
    window.location.href = url;
  }
  
  document.addEventListener('DOMContentLoaded', fetchInvoices);
  