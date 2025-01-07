import React, { useState } from "react";

const Collateral = ()=> {
  const [collateralData, setCollateralData] = useState({
    liability: "",
    description: "",
    value: "",
    business: "",
    user: "",
  });

  const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollateralData({
      ...collateralData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!collateralData.liability) {
      errors.liability = "Liability ID is required.";
    }
    if (!collateralData.business) {
      errors.business = "Associated business ID is required.";
    }
    if (!collateralData.user) {
      errors.user = "User ID is required.";
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
    //   console.log("Collateral Data Submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Collateral</h2>

        {/* {submitted && <p className="text-green-600 text-center mb-4">Collateral created successfully!</p>} */}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Liability ID */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Liability ID</label>
            <input
              type="text"
              name="liability"
              value={formData.liability}
              onChange={handleInputChange}
              placeholder="Enter associated liability ID"
              className={`w-full p-2 border rounded ${
                errors.liability ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.liability && <p className="text-red-500 text-sm mt-1">{errors.liability}</p>}
          </div> */}

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={collateralData.description}
              onChange={handleInputChange}
              placeholder="Enter collateral description"
              className="w-full p-2 border rounded border-gray-300"
            />
          </div>

          {/* Value */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Value</label>
            <input
              type="number"
              name="value"
              value={collateralData.value}
              onChange={handleInputChange}
              placeholder="Enter collateral value"
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
            Create Collateral
          </button>
        </form>
      </div>
    </div>
  );
}

export default Collateral;