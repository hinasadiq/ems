
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from "./pages/Login";
import AdminDashboard from './pages/AdminDashboard';
import DepartmentList from './components/department/DepartmentList';
import AddDepartment from './components/department/AddDepartment';
import EmployeeDashboard from './pages/EmployeeDashboard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element ={<Navigate to ="/admin-dashboard"/>}></Route>
     <Route path="/login" element ={<Login/>}></Route>
     <Route path="/admin-dashboard" element ={<AdminDashboard/>}></Route>
     <Route path="/admin-dashboard/department" element ={<DepartmentList/>}></Route>
     <Route path="/admin-dashboard/add-department" element ={<AddDepartment/>}></Route>
     <Route path="/employee-dashboard" element ={<EmployeeDashboard/>}></Route>

    </Routes>
    
    </BrowserRouter>
  )
}
export default App;