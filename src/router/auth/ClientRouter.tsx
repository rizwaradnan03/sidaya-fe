import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/client/Dashboard";
import TemplateClient from "../../layouts/client/TemplateClient";

const ClientRouter: React.FC = () => {
  return (
    <>
      <TemplateClient>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to={"/client/dashboard"} />} />
        </Routes>
      </TemplateClient>
    </>
  );
};

export default ClientRouter;
