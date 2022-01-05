import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";


const AdminRoute = ({ children }) => {
  const { user, admin } = useAuth();
  const location = useLocation();

  if (!admin) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!admin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default AdminRoute;
