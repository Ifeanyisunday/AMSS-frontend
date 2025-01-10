import React from 'react'

export const StatisticsCard = () => {
  return (
    <>
        <Card/>
        <Card/>
        <Card/>
    </>
  )
}

const Card = () => {
    return <div className='p-4 bg-blue-500 col-span-4 h-20 rounded border'></div>
}
