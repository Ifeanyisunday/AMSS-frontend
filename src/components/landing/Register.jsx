import React, { useState } from "react";
// import { useAddUserMutation } from '../apis/UserRegister';
import { useNavigate } from 'react-router-dom';

export const Register = () => {

  const [user, setUser] = useState({fullName:"", phoneNumber:"", password:""});

  const navigate = useNavigate();

  // const [createUser, ] = 0

  const inputHandler = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUser({...user, [name]: value})
  }

  const submitRequest = async (event) => {
    event.preventDefault();

    try {
      // Send user data to the backend
      // const response = await createUser(user).unwrap();
      // alert(response.message); // "User registered successfully"
      // setUser({fullName:"", phoneNumber:"", password:""})
      // navigate("/")
      
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
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <form onSubmit={submitRequest}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName} onChange={inputHandler}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              value={user.phoneNumber} onChange={inputHandler}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={user.password} onChange={inputHandler}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>

          <p class="text-center mt-3">Already have an account?</p>
          <p className="mt-4 text-center text-red-500 text-sm"></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register