// import React, { createContext, useContext, useState } from 'react'

// const userContext = createContext()

// const authContext = (children) => {
//     const [user,setUser] = useState(null)

//     const login = (user)=>{
//           setUser(user)


//  }
//  const logout = () => {
//     setUser(null)
//     localStorage.removeItem("token")
//  }
//  return (
    

//       <userContext.Provider value={{user, login, logout }}>
//         {children}
  
//     </userContext.Provider>
//   )
// }
//  export const useAuth = () => useContext(userContext)
// export default authContext
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

const authContext = ({ children }) => {
  const [user, setUser] = useState(null);
  
   useEffect (()=>{
    const verifyUser = async () =>{
      try{
        const token = localStorage.getItem("token")
        if(token){
       const response = await axios.get('http://localhost:5000/api/auth/verify',{
      headers:{
        "Authorization" : `Bearer ${token}`
              }
            })
            
    if(response.data.success){
      setUser(response.data.user)
    }
    }else {
      navigate('/login')
    }
  }
  catch(error){
    if(error.response && !error.response.data.error){
      navigate('/login')
    }
  }
    }
    
    verifyUser()
},[])
  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
export default authContext