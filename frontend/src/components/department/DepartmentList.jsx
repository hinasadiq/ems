//   import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import AdminSidebar from '../dashboard/AdminSidebar';
// // import Navbar from '../Navbar';
// // import DataTable from 'react-data-table-component';
// // import { columns } from "../../utils/DepartmentHelper.jsx";
// // import { DepartmentButton } from '../../pages/utils/DepartmentHelper.jsx';
// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import AdminSidebar from '../dashboard/AdminSidebar';
// import Navbar from '../Navbar';
// import DataTable from 'react-data-table-component';
// import { columns } from "../../pages/utils/DepartmentHelper.jsx";
// import { DepartmentButton } from "../../pages/utils/DepartmentHelper.jsx";
// import axios from 'axios';

// const DepartmentList = () => {
//   const [departments, setDepartments] = useState([]);
//   const [depLoading, setDepLoading] = useState(false);
//   const[filteredDepartments,setFilteredDepartments]=useState([]);
  
// const onDepartmentDelete = async(id) =>{
//   const data = departments.filter(dep => dep._id !== id)
//   setDepartments(data);
// }
//   useEffect(() => {
//     const fetchDepartments = async (req,res) => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/department', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });

//         if (response.data.success) {
//           let sno = 1;
//           console.log(response.data);
//           const data = response.data.departments.map((dep) => ({
//             _id: dep._id,
//             sno: sno++,
//             dep_name: dep.dep_name,
//             description:dep.description,
//             action: (<DepartmentButton _id={dep._id} onDepartmentDelete={onDepartmentDelete} />)
//           }));

//           setDepartments(data);
//           setFilteredDepartments(data);
//         }
//       } catch (error) {
//         if (error.response) {
//           alert(error.response.data.error);
//         }
//       } finally {
//         setDepLoading(false);
//       }
//     };

//     fetchDepartments();
//   }, []);
//     const filterDepartments = (e) =>{
//     const records = departments.filter((dep)=>
//       dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase())
//   );
//     setFilteredDepartments(records);


//     };
  

//   return (
//     <>
//       {depLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className='flex'>
//           <div className='w-64 fixed h-full bg-gray-200'>
//             <AdminSidebar />
//           </div>
//           <div className='flex-1 ml-64'>
//             <Navbar />
//             <div className='p-4'>
//               <h3 className='text-2xl text-center'>Manage Department</h3>
//               <div className='flex justify-between items-center mt-4'>
//                 <input
//                   type='text'
//                   placeholder='Search By Dep Name'
//                   className='px-4 py-1 border rounded'
//                   onChange={filterDepartments}
//                 />
//                 <Link
//                   to='/admin-dashboard/add-department'
//                   className='px-4 py-1 bg-teal-600 text-white rounded'
//                 >
//                   Add New Department
//                 </Link>
//               </div>
//               <div className='mt-5'> 
//               <DataTable columns={columns} data={filterDepartments} />
//             </div>
//           </div>
//         </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default DepartmentList;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../dashboard/AdminSidebar';
import Navbar from '../Navbar';
import DataTable from 'react-data-table-component';
import { columns } from "../../pages/utils/DepartmentHelper.jsx";
import { DepartmentButton } from "../../pages/utils/DepartmentHelper.jsx";
import axios from 'axios';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [depLoading, setDepLoading] = useState(false);
  const [filteredDepartments, setFilteredDepartments] = useState([]);

  const onDepartmentDelete = async (id) => {
    const data = departments.filter(dep => dep._id !== id);
    setDepartments(data);
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      setDepLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/department', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.data.success) {
          let sno = 1;
          const data = response.data.departments.map((dep) => ({
            _id: dep._id,
            sno: sno++,
            dep_name: dep.dep_name,
            description: dep.description,
            action: (<DepartmentButton _id={dep._id} onDepartmentDelete={onDepartmentDelete} />)
          }));

          setDepartments(data);
          setFilteredDepartments(data); // Initialize filteredDepartments with all departments
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  const filterDepartments = (e) => {
    const records = departments.filter((dep) =>
      dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredDepartments(records);
  };

  return (
    <>
      {depLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex'>
          <div className='w-64 fixed h-full bg-gray-200'>
            <AdminSidebar />
          </div>
          <div className='flex-1 ml-64'>
            <Navbar />
            <div className='p-4'>
              <h3 className='text-2xl text-center'>Manage Department</h3>
              <div className='flex justify-between items-center mt-4'>
                <input
                  type='text'
                  placeholder='Search By Dep Name'
                  className='px-4 py-1 border rounded'
                  onChange={filterDepartments}
                />
                <Link
                  to='/admin-dashboard/add-department'
                  className='px-4 py-1 bg-teal-600 text-white rounded'
                >
                  Add New Department
                </Link>
              </div>
              <div className='mt-5'>
                <DataTable columns={columns} data={filteredDepartments} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DepartmentList;