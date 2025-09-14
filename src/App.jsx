import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Solliciteren from './pages/Solliciteren'
import Politie from './pages/Politie'
import Ambulance from './pages/Ambulance'
import Regels from './pages/Regels'
import Doneren from './pages/Doneren'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 flex gap-6 justify-center">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/solliciteren" className="hover:text-blue-400">Solliciteren</Link>
        <Link to="/politie" className="hover:text-blue-400">Politie</Link>
        <Link to="/ambulance" className="hover:text-blue-400">Ambulance</Link>
        <Link to="/regels" className="hover:text-blue-400">Regels</Link>
        <Link to="/doneren" className="hover:text-blue-400">Doneren</Link>
      </nav>

      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solliciteren" element={<Solliciteren />} />
          <Route path="/politie" element={<Politie />} />
          <Route path="/ambulance" element={<Ambulance />} />
          <Route path="/regels" element={<Regels />} />
          <Route path="/doneren" element={<Doneren />} />
        </Routes>
      </div>
    </div>
  )
}