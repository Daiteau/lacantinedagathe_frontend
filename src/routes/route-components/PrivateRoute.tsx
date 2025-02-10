import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isSignedIn } = useAuth();
  console.log("isSigned",isSignedIn);
  return isSignedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;