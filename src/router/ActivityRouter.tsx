import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Index from "../pages/admin/activity/Index"
import Create from "../pages/admin/activity/create"

const ActivityRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Create />} />

        <Route path="*" element={<Navigate to={"/admin/activity/"} />} />
      </Routes>
    </>
  )
}

export default ActivityRouter
