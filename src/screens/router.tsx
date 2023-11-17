import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./private/Dashboard";

import Register from "./public/Register";
import PrivateRoute from "./privateRoute";
import SignIn from "./public/SignIn";

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
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
