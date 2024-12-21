import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if the user has an auth token in localStorage
  const token = localStorage.getItem("authToken");

  if (!token) {
    // If no token is found, redirect to login page
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Render the child route (Dashboard) if authenticated
};

export default ProtectedRoute;
