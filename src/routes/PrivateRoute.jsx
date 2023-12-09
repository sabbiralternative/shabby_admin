import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem("adminToken");
  const loginName = localStorage.getItem("adminName");
  if (loginName && token) {
    return children;
  }
  return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
