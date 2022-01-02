import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivatRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div  className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivatRoute;
