import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);

  const loggedIn = auth.isLoggedIn();

  return loggedIn ? <>{children}</> : <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
