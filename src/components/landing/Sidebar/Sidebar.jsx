import React from 'react'
import { Usertoggle } from './Usertoggle'
import { Search } from './Search'
import { RouteSelect } from './RouteSelect'

export const Sidebar = () => {
  return (
    <div>
        <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] bg-gray-300'>
          <Usertoggle/>
          <Search/>
          <RouteSelect/>
        </div>
    </div>
  )
}

export default Sidebar
