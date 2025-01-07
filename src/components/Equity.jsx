import React, { useState } from "react";

const Equity = () => {
  const [equityData, setEquityData] = useState({
    name: "",
    description: "",
    amount: "",
    date_issued: "",
    equity_type: "",
    dividend_rate: "",
    business: "",
    user: "",
  });

  const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

  const equityTypes = [
    { value: "Common Stock", label: "Common Stock" },
    { value: "Preferred Stock", label: "Preferred Stock" },
    { value: "Retained Earnings", label: "Retained Earnings" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEquityData({
      ...equityData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!equityData.name) errors.name = "Name is required.";
    if (!equityData.amount) errors.amount = "Amount is required.";
    if (!equityData.date_issued) errors.date_issued = "Date issued is required.";
    if (!equityData.equity_type) errors.equity_type = "Equity type is required.";
    if (!equityData.business) errors.business = "Business ID is required.";
    if (!equityData.user) errors.user = "User ID is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
    //   setSubmitted(true);
      // Submit form data to the backend here
    //   console.log("Equity Data Submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Equity</h2>

        {/* {submitted && <p className="text-green-600 text-center mb-4">Equity created successfully!</p>} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={equityData.name}
              onChange={handleInputChange}
              placeholder="Enter equity name"
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={equityData.description}
              onChange={handleInputChange}
              placeholder="Enter description (optional)"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={equityData.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              className={`w-full p-2 border rounded ${
                errors.amount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>

          {/* Date Issued */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Issued</label>
            <input
              type="date"
              name="date_issued"
              value={equityData.date_issued}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                errors.date_issued ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.date_issued && <p className="text-red-500 text-sm mt-1">{errors.date_issued}</p>}
          </div>

          {/* Equity Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Equity Type</label>
            <select
              name="equity_type"
              value={equityData.equity_type}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                errors.equity_type ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select equity type</option>
              {equityTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.equity_type && <p className="text-red-500 text-sm mt-1">{errors.equity_type}</p>}
          </div>

          {/* Dividend Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Dividend Rate (%)</label>
            <input
              type="number"
              name="dividend_rate"
              value={equityData.dividend_rate}
              onChange={handleInputChange}
              placeholder="Enter dividend rate (optional)"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Business ID */}
          {/* <div>
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
            Create Equity
          </button>
        </form>
      </div>
    </div>
  );
}

export default Equity;