import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaBuilding, FaCalendarAlt, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUser} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className='bg-green-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='bg-teal-600 h-12 flex item-center justify-center'>
        <h3>Employee ms</h3>
      </div>
      <div> 
      <NavLink to="/admin-dashboard"className={({isActive})=>`${isActive ? "bg-teal-500":" "}  items-center space-x-4 block py-2.5 px-4 rounded`} >

      <FaTachometerAlt /> 
      <span>Dashboard</span>
    </NavLink>
    <NavLink to="/admin-dashboard"className="flex items-center space-x-4 block py-2.5 px-4 rounded">

      <FaUser />
      <span>Employees</span>
    </NavLink>
    <NavLink to="/admin-dashboard/department"className={({isActive})=>`${isActive ? "bg-teal-500":" "}  items-center space-x-4 block py-2.5 px-4 rounded`}>

      <FaBuilding />
      <span>Departments</span>
    </NavLink>
    <NavLink to="/admin-dashboard"className="flex items-center space-x-4 block py-2.5 px-4 rounded">
      <FaCalendarAlt />
      <span>Leave</span>
    </NavLink>
    <NavLink to="/admin-dashboard"className="flex items-center space-x-4 block py-2.5 px-4 rounded">
      <FaMoneyBillWave/>
      <span>Sallary</span>
    </NavLink>
    <NavLink to="/admin-dashboard"className="flex items-center space-x-4 block py-2.5 px-4 rounded">
      <FaCogs/>
      <span>Setting</span>
    </NavLink>

      </div>
    </div>
  )
}

export default AdminSidebar
