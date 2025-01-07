import React from 'react'
import { useState } from 'react';

const Businessform = () => {

    const [businessInput, setBusinessInput] = useState({
        business_name: "",
        business_address: "",
        business_type: "",
        bank_account_details: "",
        preferred_currency: "",
        industry: "",
        annual_revenue: "",
        business_email: "",
      });

      const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessInput({ ...businessInput, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!businessInput.business_name.trim()) {
      errors.business_name = "Business name is required.";
    }
    if (!businessInput.business_address.trim()) {
      errors.business_address = "Business address is required.";
    }
    if (!businessInput.business_type.trim()) {
      errors.business_type = "Business type is required.";
    }
    if (businessInput.annual_revenue && isNaN(businessInput.annual_revenue)) {
      errors.annual_revenue = "Annual revenue must be a valid number.";
    }
    if (!businessInput.business_email.trim()) {
      errors.business_email = "Business email is required.";
    } else if (!/\S+@\S+\.\S+/.test(businessInput.business_email)) {
      errors.business_email = "Email is invalid.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      // Submit form data to the backend here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Business</h2>

        {/* {submitted && <p className="text-green-600 text-center mb-4">Business created successfully!</p>} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              name="business_name"
              value={businessInput.business_name}
              onChange={handleInputChange}
              placeholder="Enter business name"
              className={`w-full p-2 border rounded ${
                errors.business_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.business_name && <p className="text-red-500 text-sm mt-1">{errors.business_name}</p>}
          </div>

          {/* Business Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
            <input
              type="text"
              name="business_address"
              value={businessInput.business_address}
              onChange={handleInputChange}
              placeholder="Enter business address"
              className={`w-full p-2 border rounded ${
                errors.business_address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.business_address && <p className="text-red-500 text-sm mt-1">{errors.business_address}</p>}
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
            <input
              type="text"
              name="business_type"
              value={businessInput.business_type}
              onChange={handleInputChange}
              placeholder="Enter business type"
              className={`w-full p-2 border rounded ${
                errors.business_type ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.business_type && <p className="text-red-500 text-sm mt-1">{errors.business_type}</p>}
          </div>

          {/* Bank Account Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Details (Optional)</label>
            <input
              type="text"
              name="bank_account_details"
              value={businessInput.bank_account_details}
              onChange={handleInputChange}
              placeholder="Enter bank account details"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Preferred Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Currency (Optional)</label>
            <input
              type="text"
              name="preferred_currency"
              value={businessInput.preferred_currency}
              onChange={handleInputChange}
              placeholder="Enter preferred currency (e.g., USD, EUR)"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Industry (Optional)</label>
            <input
              type="text"
              name="industry"
              value={businessInput.industry}
              onChange={handleInputChange}
              placeholder="Enter industry"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Annual Revenue */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Revenue (Optional)</label>
            <input
              type="text"
              name="annual_revenue"
              value={businessInput.annual_revenue}
              onChange={handleInputChange}
              placeholder="Enter annual revenue"
              className={`w-full p-2 border rounded ${
                errors.annual_revenue ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.annual_revenue && <p className="text-red-500 text-sm mt-1">{errors.annual_revenue}</p>}
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
            <input
              type="email"
              name="business_email"
              value={businessInput.business_email}
              onChange={handleInputChange}
              placeholder="Enter business email"
              className={`w-full p-2 border rounded ${
                errors.business_email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.business_email && <p className="text-red-500 text-sm mt-1">{errors.business_email}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Business
          </button>
        </form>
      </div>
    </div>
  )
}

export default Businessform