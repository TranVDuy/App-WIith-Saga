import React from 'react';
import {Navigate} from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}