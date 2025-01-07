// import { useState } from "react";
// import Login from "../Login";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const registerUser = () => {
        navigate("/registerPage")
    }

    const LoginUser = () => {
        navigate("/loginPage")
    }

    // const [loginForm, setLoginForm] = useState(false)

    // const toggleLoginForm = () => {
    //     setLoginForm(!loginForm);
    //   };

    return (
        <>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-900">LetScale</h1>
                <nav className="flex space-x-4">
                    <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
                    <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
                    <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-indigo-500" onClick={LoginUser}>Sign In</button>
                    <button className="bg-blue-900 px-4 py-2 text-white rounded-lg hover:bg-blue-800" onClick={registerUser}>Create Account</button>
                </nav>
                </div>
            </header>
            {/* <nav className="bg-white-600 text-dark-blue p-4 flex justify-between items-center">
                <ul className="flex space-x-4">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
                </ul>
                <div className="flex space-x-4">
                <button className="bg-white text-dark-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 border border-blue-950" onClick={toggleLoginForm}>Login</button>
                <button className="bg-blue-950 px-4 py-2 text-white rounded-lg hover:bg-blue-800">Create Account</button>
                </div>
            </nav>


            {loginForm && <Login toggleForm={toggleLoginForm}/>} */}
        </>
    );
  };

  export default Navbar;