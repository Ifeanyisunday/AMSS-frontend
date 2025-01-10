import React from 'react'
import { useNavigate } from 'react-router-dom';

export const TopNav = () => {

    const storedUsername = localStorage.getItem("username");
    const navigate = useNavigate()

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/loginPage");
      }

  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
        <div className='flex items-center justify-between p-0.5'>
            <div>
                <span className='text-sm font-bold block'>Good morning, {storedUsername}</span>
                <span className='text-xs block text-stone-500'>Tuesday, Aug 8th 2025</span>
            </div>
            <button className='flex text-sm items-center gap-2 bg-blue-600 transition-colors px-3 py-1.5 rounded text-white' onClick={handleLogout}> Logout </button>
        </div>
    </div>
  )
}
