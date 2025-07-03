import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import MoodInput from './pages/MoodInput'
import Recommendation from './pages/Recommendation'
import History from './pages/History'

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Moodymusic</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Login</Link>
          <Link to="/mood" className="text-gray-700 hover:text-blue-500">Mood</Link>
          <Link to="/recommendation" className="text-gray-700 hover:text-blue-500">Recommendation</Link>
          <Link to="/history" className="text-gray-700 hover:text-blue-500">History</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mood" element={<MoodInput />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
