import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NewDashboard from '../Dashboard/NewDashboard'

export const Maindashboard = () => {
  return (
    <main className='grid gap-4 p-4 grid-cols-[220px,_1fr] bg-gray-300'>
        <Sidebar/>
        <NewDashboard/>
    </main>
  )
}

export default Maindashboard