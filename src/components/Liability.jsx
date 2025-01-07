import React, { useState } from "react";

const Liability = ()=> {
  const [liabilityData, setLiabilityData] = useState({
    name: "",
    amount: "",
    description: "",
    date_incurred: "",
    liability_type: "Current",
    interest_rate: "",
    due_date: "",
    paid_amount: "",
    creditor: "",
    collateral: "",
    business: "",
  });

  const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLiabilityData({
      ...liabilityData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!liabilityData.name.trim()) {
      errors.name = "Liability name is required.";
    }
    if (!liabilityData.amount || isNaN(liabilityData.amount)) {
      errors.amount = "Amount is required and must be a valid number.";
    }
    if (!liabilityData.date_incurred) {
      errors.date_incurred = "Date incurred is required.";
    }
    if (!liabilityData.due_date) {
      errors.due_date = "Due date is required.";
    }
    if (!liabilityData.business) {
      errors.business = "Associated business is required.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
    //   setSubmitted(true);
      // Submit form data to the backend here
    //   console.log("Liability Data Submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Liability</h2>

        {/* {submitted && <p className="text-green-600 text-center mb-4">Liability created successfully!</p>} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={liabilityData.name}
              onChange={handleInputChange}
              placeholder="Enter liability name"
              className={`w-full p-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={liabilityData.amount}
              onChange={handleInputChange}
              placeholder="Enter liability amount"
              className={`w-full p-2 border rounded ${
                errors.amount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={liabilityData.description}
              onChange={handleInputChange}
              placeholder="Enter liability description"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Date Incurred */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Incurred</label>
            <input
              type="date"
              name="date_incurred"
              value={liabilityData.date_incurred}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                errors.date_incurred ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.date_incurred && <p className="text-red-500 text-sm mt-1">{errors.date_incurred}</p>}
          </div>

          {/* Liability Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Liability Type</label>
            <select
              name="liability_type"
              value={liabilityData.liability_type}
              onChange={handleInputChange}
              className="w-full p-2 border rounded border-gray-300"
            >
              <option value="Current">Current</option>
              <option value="Long-term">Long-term</option>
              <option value="Contingent">Contingent</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
            <input
              type="number"
              name="interest_rate"
              value={liabilityData.interest_rate}
              onChange={handleInputChange}
              placeholder="Enter interest rate"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input
              type="date"
              name="due_date"
              value={liabilityData.due_date}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded ${
                errors.due_date ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.due_date && <p className="text-red-500 text-sm mt-1">{errors.due_date}</p>}
          </div>

          {/* Paid Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Paid Amount</label>
            <input
              type="number"
              name="paid_amount"
              value={liabilityData.paid_amount}
              onChange={handleInputChange}
              placeholder="Enter paid amount"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Creditor */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Creditor ID</label>
            <input
              type="text"
              name="creditor"
              value={liabilityData.creditor}
              onChange={handleInputChange}
              placeholder="Enter creditor ID"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div> */}

          {/* Collateral */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Collateral ID</label>
            <input
              type="text"
              name="collateral"
              value={liabilityData.collateral}
              onChange={handleInputChange}
              placeholder="Enter collateral ID"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div> */}

          {/* Business */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business ID</label>
            <input
              type="text"
              name="business"
              value={liabilityData.business}
              onChange={handleInputChange}
              placeholder="Enter associated business ID"
              className={`w-full p-2 border rounded ${
                errors.business ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Liability
          </button>
        </form>
      </div>
    </div>
  );
}

export default Liability;