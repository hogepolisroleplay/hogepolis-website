import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Solliciteren from './pages/Solliciteren'
import Politie from './pages/Politie'
import Ambulance from './pages/Ambulance'
import Regels from './pages/Regels'
import Doneren from './pages/Doneren'
import News from './pages/News'
import Staff from './pages/Staff'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/solliciteren' element={<Solliciteren/>} />
          <Route path='/politie' element={<Politie/>} />
          <Route path='/ambulance' element={<Ambulance/>} />
          <Route path='/regels' element={<Regels/>} />
          <Route path='/doneren' element={<Doneren/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/staff' element={<Staff/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}