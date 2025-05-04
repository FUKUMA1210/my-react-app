import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/login/RegisterPage'
import Dashboard from './pages/Dashboard/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}



