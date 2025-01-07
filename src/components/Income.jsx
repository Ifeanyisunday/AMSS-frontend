import React, { useState } from 'react';


function IncomeExpense() {

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Add leading zero
    const day = String(now.getDate()).padStart(2, "0"); // Add leading zero
    // const hours = String(now.getHours()).padStart(2, "0"); // Add leading zero
    // const minutes = String(now.getMinutes()).padStart(2, "0"); // Add leading zero
    return `${year}-${month}-${day}`; // Format for datetime-local
  };

  
  const [type, setType] = useState("income")

  const [incomeRecords, setIncomeRecords] = useState([]);
  const [incomeFormData, setIncomeFormData] = useState({ date: getCurrentDateTime(), source: '', description: ''});

  

  const [expenseRecords, setExpenseRecords] = useState([]);
  const [expenseFormData, setExpenseFormData] = useState({ date: getCurrentDateTime(), amount: '', category:'', description: ''});

  const handleIncomeRecord = () => {
    setIncomeRecords([...incomeRecords, incomeFormData]);
    setIncomeFormData({ date: '', source: '', description: ''});
  };

  const handleExpenseRecord = () => {
    setExpenseRecords([...expenseRecords, expenseFormData]);
    setExpenseFormData({ date: '', amount: '', category: '', description: ''});
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "income") {
      console.log("Income Data Submitted:", incomeFormData);
      alert("Income Submitted!");
      setIncomeFormData({ amount: "", source: "", receivedDate: "" }); // Reset Income Form
    } else {
      console.log("Expense Data Submitted:", expenseFormData);
      alert("Expense Submitted!");
      setExpenseFormData({
        amount: "",
        description: "",
        expenseDate: "",
        category: "",
      }); // Reset Expense Form
    }
  };



  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Income & Expenses</h1>

      
      {/* <button className="bg-blue-700 w-10 h-10" onClick={() => setType("income")}>Income</button>
      <button onClick={() => setType("expense")}>Expense</button> */}

    <div className='space-x-5'>
      <span><button type="submit" className='bg-blue-500 text-white p-3 rounded-lg' onClick={() => setType("income")}>Income</button></span>
      <span><button type="submit" className='bg-blue-500 text-white p-3 rounded-lg' onClick={() => setType("expense")}>Expense</button></span>
    </div>
    
        { type === "income" ? (
            <form onSubmit={handleSubmit}>
              <h2>Income Form</h2>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  name="source"
                  value={incomeFormData.source}
                  onChange={handleIncomeRecord}
                  placeholder='Source'
                  required
                />
              <br />

                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  name="description"
                  value={incomeFormData.description}
                  onChange={handleIncomeRecord}
                  placeholder='Description'
                  required
                />
              <br />
              <button className="w-full p-2 bg-blue-600 text-white rounded" type="submit">Submit Income</button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Expense Form</h2>

                <input
                  className="w-full p-2 border rounded"
                  type="number"
                  name="amount"
                  value={expenseFormData.amount}
                  onChange={handleExpenseRecord}
                  placeholder='Amount'
                  required
                />

              <br />
              
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  name="category"
                  value={expenseFormData.category}
                  onChange={handleExpenseRecord}
                  placeholder='Category'
                  required
                />

              <br />
              
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  name="description"
                  value={expenseFormData.description}
                  onChange={handleExpenseRecord}
                  placeholder='Description'
                  required
                />
              
              <br />
              <button className="w-full p-2 bg-blue-600 text-white rounded" type="submit">Submit Expense</button>
            </form>
          )}


      <ul className="mt-4 space-y-2">
        {incomeRecords.map((record, index) => (
          <li key={index} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{record.date} - {record.description}</span>
            <span><button type="submit" className='bg-red-500 text-white p-3 rounded-lg'>Delete</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeExpense;