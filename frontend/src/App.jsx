
// import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
// import Login from "./pages/Login";
// import AdminDashboard from './pages/AdminDashboard';
// import DepartmentList from './components/department/DepartmentList';
// import AddDepartment from './components/department/AddDepartment';
// import EmployeeDashboard from './pages/EmployeeDashboard';


// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//      <Route path="/" element ={<Navigate to ="/admin-dashboard"/>}></Route>
//      <Route path="/login" element ={<Login/>}></Route>
//      <Route path="/admin-dashboard" element ={<AdminDashboard/>}></Route>
//      <Route path="/admin-dashboard/department" element ={<DepartmentList/>}></Route>
//      <Route path="/admin-dashboard/add-department" element ={<AddDepartment/>}></Route>
//      <Route path="/employee-dashboard" element ={<EmployeeDashboard/>}></Route>

//     </Routes>
    
//     </BrowserRouter>
//   )
// }
// export default App;
// import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import AdminDashboard from './pages/AdminDashboard';
import DepartmentList from './components/department/DepartmentList';
import EditDepartment from './components/department/EditDepartment';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AddDepartment from './components/department/AddDepartment'; // Import AddDepartment component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-dashboard/department" element={<DepartmentList />} />
        <Route path="/admin-dashboard/add-department" element={<AddDepartment />} /> {/* Add this line */}
        <Route path="/admin-dashboard/department/:id" element={<EditDepartment />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        {/* <Route path="*" element={<h1>404: Page Not Found</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
