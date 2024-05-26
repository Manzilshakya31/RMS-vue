import { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  // authentication,
  ...rest
}: any) => {
  const isLogin = localStorage.getItem("isLogin");
  // const [isAuthenticated, setIsAuthenticated] = useState(
  const [isAuthenticated] = useState(isLogin === "1" ? true : false);
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/landing" replace />
  );
};
export default PrivateRoute;
