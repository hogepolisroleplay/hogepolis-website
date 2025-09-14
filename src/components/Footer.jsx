import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-8">
      <div className="container mx-auto px-4 py-8 text-center text-gray-400">
        <div>© {new Date().getFullYear()} Hogepolis Roleplay — Alle rechten voorbehouden</div>
        <div className="mt-2 text-sm">Contact: <a className="text-indigo-400" href="https://discord.gg/">Discord</a></div>
      </div>
    </footer>
  )
}