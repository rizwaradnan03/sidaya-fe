import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import AdminRouter from "./router/auth/AdminRouter";
import ClientRouter from "./router/auth/ClientRouter";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to={"/login"} />} />

          {/* admin routing */}
          <Route path="/admin/*" element={<AdminRouter />} />

          {/* client routing */}
          <Route path="/client/*" element={<ClientRouter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
