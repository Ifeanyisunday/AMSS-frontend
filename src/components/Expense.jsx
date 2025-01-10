import { useExpenseMutation } from "../apis/Functions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Expense = ()=> {

    const navigate = useNavigate()

  const [expenseFormData, setExpenseFormData] = useState({ amount: '', expense_category: '', description:'', currency: ''});

  const handleExpenseRecord = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setExpenseFormData({...expenseFormData, [name]: value});
  };

  const [addexpense] = useExpenseMutation()

  const handleSubmit2 = async(e) => {
    e.preventDefault();
    try {
      const response = await addexpense(expenseFormData).unwrap()
          console.log(response);
          setExpenseFormData({
            amount: '',
            expense_category: '',
            description:'',
            currency: '',
          });
          navigate("/main")
    }catch (err) {
      if (err?.data?.error) {
        alert(`Error: ${err.data.error}`);
      } else {
        alert("An unexpected error occurred.");
        console.error(err);
      }
    }
  }


  return (
    <div>

    <div className="flex justify-center items-center min-h-screen">

    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
      <h1 className="text-xl font-semibold mb-4">Expenses</h1>

            <form onSubmit={handleSubmit2}>
              <h2>Expense Form</h2>

              <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="number"
                  name="amount"
                  value={expenseFormData.amount}
                  onChange={handleExpenseRecord}
                  placeholder='Amount'
                  required
                />
              <br />

                <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="expense_category"
                  value={expenseFormData.expense_category}
                  onChange={handleExpenseRecord}
                  placeholder='Expense category'
                  required
                />
              <br />
              <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="description"
                  value={expenseFormData.description}
                  onChange={handleExpenseRecord}
                  placeholder='Description'
                  required
                />
              <br />

              <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="currency"
                  value={expenseFormData.currency}
                  onChange={handleExpenseRecord}
                  placeholder='Currency'
                  required
                />
              <br />
              <br />
              <button className="w-full p-2 bg-blue-600 text-white rounded" type="submit">Submit Expense</button>
            </form>

      {/* <ul className="mt-4 space-y-2">
        {incomeRecords.map((record, index) => (
          <li key={index} className="flex justify-between bg-gray-100 p-2 rounded">
            <span>{record.date} - {record.description}</span>
            <span><button type="submit" className='bg-red-500 text-white p-3 rounded-lg'>Delete</button></span>
          </li>
        ))}
      </ul> */}
    </div>
    </div>
    </div>
  );
}

export default Expense;