import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Create from "../pages/admin/activity-detail/Create"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from "../pages/admin/activity-detail/Edit"
import Index from "../pages/admin/activity-detail/Index";

const ActivityDetailRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create/:activityTemplateId" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />

        <Route path="*" element={<Navigate to={"/admin/activity-detail/"} />} />
      </Routes>
      <ToastContainer/>

    </>
  )
}

export default ActivityDetailRouter
