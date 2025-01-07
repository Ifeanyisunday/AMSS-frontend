import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate()

const handleIncome = () => {
  navigate("/income")
}

const handleBusiness = () => {
  navigate("/createbusiness")
}

const handleAssets = () => {
  navigate("/assets")
}

  return (

    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">My Dashboard</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500">Log Out</button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-lg font-bold text-gray-600">Balance</h2>
            <p className="text-2xl font-bold text-indigo-600">$0</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-lg font-bold text-gray-600">Income</h2>
            <p className="text-2xl font-bold text-green-600">$0</p>
          </div>
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-lg font-bold text-gray-600">Expenses</h2>
            <p className="text-2xl font-bold text-red-600">$0</p>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white shadow rounded p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500" onClick={handleBusiness}>Add Business</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500" onClick={handleIncome}>Add Income or Expense</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500" onClick={handleAssets}>Add assets</button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500">View Reports</button>
          </div>
        </section>

        {/* Recent Activity */}
        {/* <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-200 text-gray-600">
              <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2">2023-12-29</td>
                  <td className="px-4 py-2">Freelance Work</td>
                  <td className="px-4 py-2">Income</td>
                  <td className="px-4 py-2 text-green-600">+ $1,200</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2">2023-12-28</td>
                  <td className="px-4 py-2">Dinner</td>
                  <td className="px-4 py-2">Food</td>
                  <td className="px-4 py-2 text-red-600">- $45</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-2">2023-12-27</td>
                  <td className="px-4 py-2">Gym Membership</td>
                  <td className="px-4 py-2">Health</td>
                  <td className="px-4 py-2 text-red-600">- $60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-600 text-center py-4 shadow">
        <p>&copy; {new Date().getFullYear()} My Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Dashboard;
