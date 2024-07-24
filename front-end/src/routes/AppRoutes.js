import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import StudentRoutes from "./StudentRoutes";
import ResponsibleRoutes from "./ResponsibleRoutes";
import AccompagnateurRoutes from "./AccompagnateurRoutes";

const AppRoutes = ({ userType }) => (
  <Routes>
    {/* Routes d'authentification accessibles à tout utilisateur non connecté */}
    <Route path="/*" element={<AuthRoutes />} />

    {/* Routes accessibles après authentification */}
    {userType === "student" && <Route path="/*" element={<StudentRoutes />} />}
    {userType === "responsable" && <Route path="/*" element={<ResponsibleRoutes />} />}
    {userType === "accompagnateur" && <Route path="/*" element={<AccompagnateurRoutes />} />}
  </Routes>
);

export default AppRoutes;
