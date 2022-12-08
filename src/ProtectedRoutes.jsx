import React, { useContext } from 'react';
import UserContext from './context/UserContext';
import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children ? children : <Outlet />}</div>;
};

export default ProtectedRoutes;
