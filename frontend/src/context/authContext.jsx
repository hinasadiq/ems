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
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const authContext = ({ children }) => {
  const [user, setUser] = useState(null);

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