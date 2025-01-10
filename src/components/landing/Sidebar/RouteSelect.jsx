import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBusinessTime } from 'react-icons/fa'

export const RouteSelect = () => {

    const navigate = useNavigate()

  return (
    <div className='space-y-3'>
        <button
            onClick={() =>  navigate("/createbusiness")}
            className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm font-semibold hover:bg-white text-stone-500 bg-transparent shadow-none"
        >
            <FaBusinessTime className="mr-2 text-lg"/>
            Create Business
        </button>

        <button
            onClick={() =>  navigate("/income")}
            className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm font-semibold hover:bg-white text-stone-500 bg-transparent shadow-none"
        >
            <FaBusinessTime className="mr-2 text-lg"/>
            Add Income
        </button>

        <button
            onClick={() =>  navigate("/expense")}
            className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm font-semibold hover:bg-white text-stone-500 bg-transparent shadow-none"
        >
            <FaBusinessTime className="mr-2 text-lg"/>
            Add Expense
        </button>

        <button
            onClick={() => alert("E no gree work, calm down Mr chi!")}
            className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm font-semibold  hover:bg-white text-stone-500 bg-transparent shadow-none"
        >
            <FaBusinessTime className="mr-2 text-lg"/>
            Liability
        </button>

        <button
            onClick={() => navigate("/staff")}
            className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm font-semibold  hover:bg-white text-stone-500 bg-transparent shadow-none"
        >
            <FaBusinessTime className="mr-2 text-lg"/>
            Create staff
        </button>
    </div>
        
  )
}


