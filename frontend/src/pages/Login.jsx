// import axios from 'axios'
// import React, { useContext, useState } from 'react'
// import { useAuth } from '../context/authContext'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const[email,setEmail]= useState('');
//   const[Password,setPassword]=useState('');
//   const[error,setError]=useState(null);
//   const {login} = useAuth();
//   const navigate = useNavigate();


//   const handleSubmit = async (e) => {
//     // const {user}=useContext(userContext)
//     e.preventDefault();
    
//     try {
//   const response = await axios.post(
//     "http://localhost:5000/api/auth/login",
//     {email,Password}
//   );
//   //      console.log(response)
//   //       }catch(error){
//   //     console.log(error);
//   //   }
    
//   // };
//   if (response.data.success) {
//     login(response.data.user);
//     localStorage.setItem("token",response.data.token)
//     if(response.data.user.role==="admin"){
//       navigate('/admin-dashboard')
//     }
//   else {
//     navigate("/employee-dashboard")
//   }
//     // alert('Admin login successful');
//     // console.log(response);
//     // // Redirect to admin dashboard or perform other actions
//   // } else {
//   //   alert('Login failed. Please check your credentials.');
//   // }
// // } catch (error) {
// //   if(error.response && !error.response.data.success){
// //   setError(error.response.data.error);
// // } else{
// //   setError("server error")
// // }
// // }
// // };
// } else {
//   setError("Login failed. Please check your credentials.");
// }
// } catch (error) {
// if (error.response && !error.response.data.success) {
//   setError(error.response.data.error);
// } else {
//   setError("Server error");
// }
// }
// };


//   return (
//     <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
//       <h2 className="font-sevillane text-3xl text-white">EMPLOYE MANAGEMENT SYSTEM</h2>
       
//         <div className="boarder shadow p-6 w-80 bg-white">
//         <h2 className="text-2xl font-bold mb-4" >Login</h2>
//         {error && <p className='text-red-500'>{error}</p>}
//         <form onSubmit={handleSubmit}>

//             <div className="mb-4">
//             <label htmlFor='email' clasName="block text-gray-700">Email</label>
//             <input type='email'  className="w-full px-3 py-2 border"placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
//         </div>
//         <div className="mb-4"> 
//             <label htmlFor='password' className='block text-gray-700'>Password</label>
//             <input type='passsword'className='w-full px-3 py-2 border' placeholder='*******' onChange={(e)=>setpassword(e.target.value)}/>
//         </div>
        

//         <div className='mb-4 flex items-center justify-between'>
//           <label className='inline-flex items-center'>
//             <input type='checkbox' className='form-checkbox'/>
//             <span className='ml-2 text-gray-700'>Rember me</span>
//           </label>
//           <a href='#' className='text-teal-600'>
//             Forget password ?
//           </a>
          
//         </div>
//         <div className='mb-4'>
//           <button type='submit' className='w-full bg-teal-600 text-white py-2'> Login</button>
//         </div>
        
//       </form>
//     </div>
//     </div>
//   )
// }
// export default Login;
import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Corrected to 'password'
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password } // Updated to 'password'
      );

      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem('token', response.data.token);
        if (response.data.user.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/employee-dashboard');
        }
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError('Server error');
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-sevillane text-3xl text-white">EMPLOYEE MANAGEMENT SYSTEM</h2>

      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor='email' className="block text-gray-700">Email</label>
            <input
              type='email'
              className="w-full px-3 py-2 border"
              placeholder='Enter Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input
              type='password'
              className='w-full px-3 py-2 border'
              placeholder='*******'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
              <input type='checkbox' className='form-checkbox' />
              <span className='ml-2 text-gray-700'>Remember me</span>
            </label>
            <a href='#' className='text-teal-600'>
              Forgot password?
            </a>
          </div>
          <div className='mb-4'>
            <button type='submit' className='w-full bg-teal-600 text-white py-2'> Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


