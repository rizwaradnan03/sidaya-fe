import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Index from "../pages/admin/area/Index"
import Create from "../pages/admin/area/Create"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Edit from "../pages/admin/area/Edit"

const AreaRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />

        <Route path="*" element={<Navigate to={"/admin/area/"} />} />
      </Routes>
      <ToastContainer/>

    </>
  )
}

export default AreaRouter
