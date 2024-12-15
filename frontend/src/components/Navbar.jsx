import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-12 px-4 text-white bg-teal-600'>
      <p>WELCOME</p>
      <button className='h-full px-4 bg-teal-700 hover:bg-teal-800 rounded'>Logout</button>
    </div>
  )
}

export default Navbar
