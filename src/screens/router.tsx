import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./private/Dashboard";

import PrivateRoute from "./privateRoute";
import SignIn from "./public/SignIn";
import SignUp from "./public/SignUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
