import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import TemplateAdmin from "../layouts/admin/TemplateAdmin";
import ActivityRouter from "./ActivityRouter";

const AdminRouter: React.FC = () => {
  return (
    <>
      <TemplateAdmin>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* activity routing */}
          <Route path="/activity/*" element={<ActivityRouter />} />

          <Route path="*" element={<Navigate to={"/admin/dashboard"} />} />
        </Routes>
      </TemplateAdmin>
    </>
  );
};

export default AdminRouter;
