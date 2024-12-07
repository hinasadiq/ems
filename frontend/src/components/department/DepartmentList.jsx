import React from 'react'
import { Link } from 'react-router-dom'

const DepartmentList = () => {
  return (
    <div>
     
     <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Department</h3>
     </div>
     <div className='flex justify-between iitems-center'>
        <input type='text' placeholder='Search By Dep Name'className='px-4 py-0.5'/>
        <Link to="/admin-dashboard/add-department"className='px-4 py-1 bg-teal-600'>Add New Department</Link>
     </div>
  </div>
  )
}

export default DepartmentList
