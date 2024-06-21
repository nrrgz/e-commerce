import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userData } from '../helpers';

const ProtectedRoutes = () => {
  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      alert('You need to log in to access this page.');
    }
  }, [jwt]);

  return jwt ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
