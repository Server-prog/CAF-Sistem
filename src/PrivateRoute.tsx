import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // Simulando autenticação, substitua por lógica real
  return localStorage.getItem("authToken") !== null;
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
