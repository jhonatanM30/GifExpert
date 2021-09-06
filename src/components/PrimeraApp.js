import React, { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { UserContext } from './context/UserContext';


export const PrimeraApp = () => {

  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <AppRouter ></AppRouter>
    </UserContext.Provider>
  );

};

