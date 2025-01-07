import React, { useState } from 'react';

function InvoiceManager() {
  const [invoices, setInvoices] = useState([]);
  const [formData, setFormData] = useState({ client: '', amount: '', dueDate: '' });

  const handleAddInvoice = () => {
    setInvoices([...invoices, formData]);
    setFormData({ client: '', amount: '', dueDate: '' });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Invoice Manager</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Client Name"
          className="w-full p-2 border rounded"
          value={formData.client}
          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full p-2 border rounded"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
        <input
          type="date"
          className="w-full p-2 border rounded"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
        />
        <button
          type="button"
          onClick={handleAddInvoice}
          className="w-full p-2 bg-green-600 text-white rounded"
        >
          Add Invoice
        </button>
      </form>

      <ul className="mt-4 space-y-2">
        {invoices.map((invoice, index) => (
          <li key={index} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{invoice.client}</span>
            <span>${invoice.amount} (Due: {invoice.dueDate})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceManager;