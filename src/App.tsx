  import React from 'react'
  import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
  import LoginPage from './pages/auth/LoginPage'

  const App: React.FC = () => {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<Navigate to={'/login'} />} />
        </Routes>
      </BrowserRouter>
    </>
    )
  }

  export default App