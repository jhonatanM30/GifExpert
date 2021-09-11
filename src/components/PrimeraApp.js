import React, { useReducer } from 'react';
import { AppRouter } from './router/AppRouter';
import { AuthContext } from './context/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged : false};
}

export const PrimeraApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter ></AppRouter>
    </AuthContext.Provider>
  );

};

