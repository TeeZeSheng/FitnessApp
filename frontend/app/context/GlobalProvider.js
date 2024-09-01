import React, { createContext, useContext, useEffect, useState } from "react";
import apiClient from "../component/axiosInstance";


const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   console.log(token)
  //   apiClient.get('tours/loginDeets', { 
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     } 
  //   })
  //     .then((res) => {
  //       if (res) {
  //         setIsLogged(true);
  //         setToken(res.data.token);
  //         setUser(res.data.user)
          
  //       } else {
  //         setIsLogged(false);
  //         setToken('');
  //       }
  //     })
  //     .catch((error) => {
  //       setIsLogged(false);
  //       setToken('');
  //       console.log(error.response.data);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        setIsLogged,
        token,
        setToken,
        loading,
        setLoading,
        user,
        setUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;