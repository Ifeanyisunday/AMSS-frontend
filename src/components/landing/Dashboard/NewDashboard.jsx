import React from 'react'
import { TopNav } from './TopNav'
import { Grid } from './Grid'

export const NewDashboard = () => {
  return (
    <div className='bg-white rounded-lg pb-4 shadow h-[200h]'>
      <TopNav/>
      <Grid/>
    </div>
  )
}

export default NewDashboard