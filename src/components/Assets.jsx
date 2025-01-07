import React, { useState } from "react";

const Asset = () => {
  const [assetInput, setAssetInput] = useState({
    name: "",
    description: "",
    amount: "",
    date_acquired: "",
    asset_types: "Current",
    depreciation_rate: "",
    appreciation_rate: "",
    current_value: "",
    useful_life: "",
    residual_value: "",
    valuation_method: "Straight-Line",
    is_appreciating: false,
    business: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAssetInput({
      ...assetInput,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!assetInput.name.trim()) {
      errors.name = "Asset name is required.";
    }
    if (!assetInput.amount || isNaN(assetInput.amount)) {
      errors.amount = "Amount is required and must be a valid number.";
    }
    if (!assetInput.date_acquired || isNaN(assetInput.date_acquired)) {
      errors.date_acquired = "Date acquired is required and must be a valid year.";
    }
    if (!assetInput.useful_life || isNaN(assetInput.useful_life)) {
      errors.useful_life = "Useful life is required and must be a valid number.";
    }
    if (!assetInput.residual_value || isNaN(assetInput.residual_value)) {
      errors.residual_value = "Residual value is required and must be a valid number.";
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
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Asset</h2>

        {/* {submitted && <p className="text-green-600 text-center mb-4">Asset created successfully!</p>} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={assetInput.name}
              onChange={handleInputChange}
              placeholder="Enter asset name"
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
              value={assetInput.description}
              onChange={handleInputChange}
              placeholder="Enter asset description"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={assetInput.amount}
              onChange={handleInputChange}
              placeholder="Enter asset amount"
              className={`w-full p-2 border rounded ${
                errors.amount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount}</p>}
          </div>

          {/* Date Acquired */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date Acquired (Year)</label>
            <input
              type="number"
              name="date_acquired"
              value={assetInput.date_acquired}
              onChange={handleInputChange}
              placeholder="Enter year acquired"
              className={`w-full p-2 border rounded ${
                errors.date_acquired ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.date_acquired && <p className="text-red-500 text-sm mt-1">{errors.date_acquired}</p>}
          </div>

          {/* Asset Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Asset Type</label>
            <select
              name="asset_types"
              value={assetInput.asset_types}
              onChange={handleInputChange}
              className="w-full p-2 border rounded border-gray-300"
            >
              <option value="Current">Current</option>
              <option value="Fixed">Fixed</option>
              <option value="Intangible">Intangible</option>
              <option value="Investment">Investment</option>
              <option value="Other">Other</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Land">Land</option>
            </select>
          </div>

          {/* Valuation Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valuation Method</label>
            <select
              name="valuation_method"
              value={assetInput.valuation_method}
              onChange={handleInputChange}
              className="w-full p-2 border rounded border-gray-300"
            >
              <option value="Straight-Line">Straight-Line</option>
              <option value="Declining-Balance">Declining-Balance</option>
              <option value="Appreciation">Appreciation</option>
            </select>
          </div>

          {/* Useful Life */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Useful Life (Years)</label>
            <input
              type="number"
              name="useful_life"
              value={assetInput.useful_life}
              onChange={handleInputChange}
              placeholder="Enter useful life in years"
              className={`w-full p-2 border rounded ${
                errors.useful_life ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.useful_life && <p className="text-red-500 text-sm mt-1">{errors.useful_life}</p>}
          </div>

          {/* Residual Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Residual Value</label>
            <input
              type="number"
              name="residual_value"
              value={assetInput.residual_value}
              onChange={handleInputChange}
              placeholder="Enter residual value"
              className={`w-full p-2 border rounded ${
                errors.residual_value ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.residual_value && <p className="text-red-500 text-sm mt-1">{errors.residual_value}</p>}
          </div>

          {/* Is Appreciating */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="is_appreciating"
              checked={assetInput.is_appreciating}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="text-sm font-medium text-gray-700">Is Appreciating</label>
          </div>

          {/* Business */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business ID</label>
            <input
              type="text"
              name="business"
              value={assetInput.business}
              onChange={handleInputChange}
              placeholder="Enter associated business ID"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Asset
          </button>
        </form>
      </div>
    </div>
  );
}

export default Asset;