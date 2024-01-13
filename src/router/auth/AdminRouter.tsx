import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";
import TemplateAdmin from "../../layouts/admin/TemplateAdmin";
import ActivityRouter from "../ActivityTemplateRouter";
import AreaRouter from "../AreaRouter";
import ProblemRouter from "../ProblemRouter";

const AdminRouter: React.FC = () => {

  const navigate = useNavigate()
  
  const handleCheckToken = async () => {
    const token = localStorage.getItem("AccessToken")

    if(token?.length == 0 || token == null){
      localStorage.clear()
      navigate('/login')
    }
  }

  //without interval
  useEffect(() => {
    handleCheckToken()
  }, [])

  useEffect(() => {
    const checkTokenInterval = setInterval(handleCheckToken, 2000)

    return () => clearInterval(checkTokenInterval)
  }, [])

  return (
    <>
      <TemplateAdmin>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* activity routing */}
          <Route path="/activity-template/*" element={<ActivityRouter />} />
          <Route path="/problem/*" element={<ProblemRouter/>} />
          <Route path="/area/*" element={<AreaRouter />} />

          <Route path="*" element={<Navigate to={"/admin/dashboard"} />} />
        </Routes>
      </TemplateAdmin>
    </>
  );
};

export default AdminRouter;
