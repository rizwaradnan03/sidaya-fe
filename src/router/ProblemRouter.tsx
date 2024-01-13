import React from 'react'
import { Route, Routes } from 'react-router'
import Index from '../pages/admin/problem/Index'
import Create from '../pages/admin/problem/Create'


const ProblemRouter: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/create' element={<Create/>} />
    </Routes>
  )
}

export default ProblemRouter
