import React, { useState } from "react";

const Budget = () => {
  const [budgetData, setBudgetData] = useState({
    budget_name: "",
    amount: "",
    start_date: "",
    end_date: "",
    business: "",
    user: "",
  });

  const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudgetData({
      ...budgetData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!budgetData.budget_name) errors.budget_name = "Budget name is required.";
    if (!budgetData.amount) errors.amount = "Amount is required.";
    if (!budgetData.start_date) errors.start_date = "Start date is required.";
    if (!budgetData.end_date) errors.end_date = "End date is required.";
    if (budgetData.start_date && budgetData.end_date && budgetData.start_date > budgetData.end_date) {
      errors.date_range = "Start date cannot be after end date.";
    }
    if (!budgetData.business) errors.business = "Business ID is required.";
    if (!budgetData.user) errors.user = "User ID is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
    //   setSubmitted(true);
      // Submit form data to the backend here
    //   console.log("Budget Data Submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Budget</h2>

        {/* {submitted && <p className="text-green-600 text-center mb-4">Budget created successfully!</p>} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Budget Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Budget Name</label>
            <input
              type="text"
              name="budget_name"
              value={budgetData.budget_name}
              onChange={handleInputChange}
              placeholder="Enter budget name"
              className={`w-full p-2 border rounded ${
                errors.budget_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.budget_name && <p className="text-red-500 text-sm mt-1">{errors.budget_name}</p>}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={budgetData.amount}
              onChange={handleInputChange}
              placeholder="Enter budget amount"
              className={`w-full p-2 border rounded ${
                errors.amount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
            <input
              type="date"
              name="start_date"
              value={budgetData.start_date}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                errors.start_date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.start_date && <p className="text-red-500 text-sm mt-1">{errors.start_date}</p>}
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
            <input
              type="date"
              name="end_date"
              value={budgetData.end_date}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                errors.end_date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.end_date && <p className="text-red-500 text-sm mt-1">{errors.end_date}</p>}
            {errors.date_range && <p className="text-red-500 text-sm mt-1">{errors.date_range}</p>}
          </div>

          {/* Business ID
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business ID</label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleInputChange}
              placeholder="Enter associated business ID"
              className={`w-full p-2 border rounded ${
                errors.business ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
          </div> */}

          {/* User ID */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User ID</label>
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handleInputChange}
              placeholder="Enter associated user ID"
              className={`w-full p-2 border rounded ${
                errors.user ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.user && <p className="text-red-500 text-sm mt-1">{errors.user}</p>}
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Budget
          </button>
        </form>
      </div>
    </div>
  );
}

export default Budget;