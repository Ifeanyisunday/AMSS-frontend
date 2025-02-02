import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useIncomeMutation } from '../apis/Functions';


const Income = () => {

  const navigate = useNavigate()
  const [incomeFormData, setIncomeFormData] = useState({ amount: '', source: '', description: '', currency:''});

  const handleIncomeRecord = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setIncomeFormData({...incomeFormData, [name]: value});
  };

  const [addincome] = useIncomeMutation()

  const handleSubmit1 = async(e) => {
    e.preventDefault();
    try {
          const response = await addincome(incomeFormData).unwrap()
          console.log(response);
          setIncomeFormData({ amount: '', source: '', description: '', currency:'' });
          navigate("/main")
      } catch (err) {
        if (err?.data?.error) {
          alert(`Error: ${err.data.error}`);
        } else {
          alert("An unexpected error occurred.");
          console.error(err);
        }
      }
  };



  return (
    <div>

    <div className="flex justify-center items-center min-h-screen">

    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
      <h1 className="text-xl font-semibold mb-4">Income</h1>

            <form onSubmit={handleSubmit1}>
              <h2>Income Form</h2>
                <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="number"
                  name="amount"
                  value={incomeFormData.amount}
                  onChange={handleIncomeRecord}
                  placeholder='Amount'
                  required
                />
              <br />

                <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="source"
                  value={incomeFormData.source}
                  onChange={handleIncomeRecord}
                  placeholder='Source'
                  required
                />
              <br />
              <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="description"
                  value={incomeFormData.description}
                  onChange={handleIncomeRecord}
                  placeholder='Description'
                  required
                />
              <br />

              <input
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="text"
                  name="currency"
                  value={incomeFormData.currency}
                  onChange={handleIncomeRecord}
                  placeholder='Currency'
                  required
                />
              <br />
              <br />
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Submit Income</button>
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

export default Income;