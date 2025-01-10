import React from 'react'
import { useState } from 'react';
import { useBusinessMutation, useUpdateBusinessMutation } from '../apis/Functions';


const Businessform = () => {

  const [isUpdate, setIsUpdate] = useState(false)

  const [addbusiness] = useBusinessMutation()
  const [updateBusiness] = useUpdateBusinessMutation()

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBusinessInput({ ...businessInput, [name]: value });
  };



  const handleUpdate = async(e) => {
    e.preventDefault();
    const id = localStorage.getItem('id')
    try {
      const response = await updateBusiness({id, businessInput}).unwrap()
      console.log(response)
      setBusinessInput({
        business_name: "",
        business_address: "",
        business_type: "",
        bank_account_details: "",
        preferred_currency: "",
        industry: "",
        annual_revenue: "",
        business_email: "",
      })

      setIsUpdate(false)
      // navigate("/loginPage")   
    } catch (err) {
      if (err?.data?.error) {
        alert(`Error: ${err.data.error}`);
      } else {
        alert("An unexpected error occurred.");
        console.error(err);
      }
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await addbusiness(businessInput).unwrap()
      localStorage.setItem("id", response.id);
      console.log(response)
      setBusinessInput({
        business_name: "",
        business_address: "",
        business_type: "",
        bank_account_details: "",
        preferred_currency: "",
        industry: "",
        annual_revenue: "",
        business_email: "",
      })
      // navigate("/loginPage")   
    } catch (err) {
      if (err?.data?.error) {
        alert(`Error: ${err.data.error}`);
      } else {
        alert("An unexpected error occurred.");
        console.error(err);
      }
    }
  }
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Business</h2>

        {/* {submitted && <p className="text-green-600 text-center mb-4">Business created successfully!</p>} */}

        <form onSubmit={isUpdate ? handleUpdate : handleSubmit} className="space-y-4">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              name="business_name"
              value={businessInput.business_name}
              onChange={handleInputChange}
              placeholder="Enter business name"
              className={`w-full p-2 border rounded`}
            />
            {/* {errors.business_name && <p className="text-red-500 text-sm mt-1">{errors.business_name}</p>} */}
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
              className={`w-full p-2 border rounded`}
            />
            {/* {errors.business_address && <p className="text-red-500 text-sm mt-1">{errors.business_address}</p>} */}
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
              className={`w-full p-2 border rounded`}
            />
            {/* {errors.business_type && <p className="text-red-500 text-sm mt-1">{errors.business_type}</p>} */}
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
              className={`w-full p-2 border rounded`}
            />
            {/* {errors.annual_revenue && <p className="text-red-500 text-sm mt-1">{errors.annual_revenue}</p>} */}
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
              className={`w-full p-2 border rounded`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-700"
          >
            {isUpdate ? "Update" : "Create"}
          </button>
        </form>
        <button
            className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-700 mt-4" onClick={() => setIsUpdate(true)}>
            Update Business
          </button>
      </div>
    </div>
  )
}

export default Businessform