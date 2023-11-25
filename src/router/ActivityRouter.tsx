import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Index from "../pages/admin/activity/Index"
import Create from "../pages/admin/activity/Create"
import Detail from "../pages/admin/activity/Detail"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivityRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail" element={<Detail />} />

        <Route path="*" element={<Navigate to={"/admin/activity/"} />} />
      </Routes>
      <ToastContainer/>

    </>
  )
}

export default ActivityRouter
