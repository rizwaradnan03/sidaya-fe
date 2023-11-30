import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Index from "../pages/admin/activity-template/Index"
import Create from "../pages/admin/activity-template/Create"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from "../pages/admin/activity-template/Edit"

const ActivityTemplateRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />

        <Route path="*" element={<Navigate to={"/admin/activity-template/"} />} />
      </Routes>
      <ToastContainer/>

    </>
  )
}

export default ActivityTemplateRouter
