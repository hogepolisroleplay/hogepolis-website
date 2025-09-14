import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  {to:'/', label:'Home'},
  {to:'/solliciteren', label:'Solliciteren'},
  {to:'/politie', label:'Politie'},
  {to:'/ambulance', label:'Ambulance'},
  {to:'/regels', label:'Regels'},
  {to:'/doneren', label:'Doneren'},
  {to:'/news', label:'Nieuws'},
  {to:'/staff', label:'Staff'}
]

export default function Navbar(){
  const loc = useLocation()
  return (
    <header className="bg-gray-800/80 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold text-indigo-400">Hogepolis</div>
          <div className="text-sm text-gray-300 hidden sm:block">Roleplay Server</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          {links.map(l=> (
            <Link key={l.to} to={l.to} className={loc.pathname===l.to ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}>{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/#join" className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded">Join</a>
          <button id="mobile-menu" className="md:hidden text-gray-300">Menu</button>
        </div>
      </div>
    </header>
  )
}