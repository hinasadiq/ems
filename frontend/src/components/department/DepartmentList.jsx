
import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../dashboard/AdminSidebar';
import Navbar from '../Navbar';

const DepartmentList = () => {
  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='w-64 fixed h-full bg-gray-200'>
        <AdminSidebar />
      </div>
      {/* Main Content */}
      <div className='flex-1 ml-64'>
        <Navbar />
        <div className='p-4'>
          <div className='text-left'>
            <h3 className='text-2xl text-center'>Manage Department</h3>
          </div>
          <div className='flex justify-between items-center mt-4'>
            <input
              type='text'
              placeholder='Search By Dep Name'
              className='px-4 py-1 border rounded'
            />
            <Link
              to='/admin-dashboard/add-department'
              className='px-4 py-1 bg-teal-600 text-white rounded'
            >
              Add New Department
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default DepartmentList;



