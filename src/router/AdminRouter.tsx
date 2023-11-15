import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import TemplateAdmin from "../layouts/admin/TemplateAdmin";

const AdminRouter: React.FC = () => {
  return (
    <>
      <TemplateAdmin>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to={"/admin/dashboard"} />} />
        </Routes>
      </TemplateAdmin>
    </>
  );
};

export default AdminRouter;
