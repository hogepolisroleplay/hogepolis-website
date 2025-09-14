import React from 'react'
import ServerStatus from '../components/ServerStatus'
import ApplyForm from '../components/ApplyForm'

export default function Home(){
  const fivemIp = import.meta.env.VITE_FIVEM_IP || '127.0.0.1:30120'
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 p-8 rounded-lg shadow">
        <h1 className="text-4xl font-extrabold">Welkom bij Hogepolis Roleplay</h1>
        <p className="mt-2 text-gray-100 max-w-2xl">Nederlandse FiveM server: realisme, drama en community.</p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-3">Server Status</h2>
          <ServerStatus ip={fivemIp} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Solliciteer direct</h2>
          <ApplyForm />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Community Events</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded">Kerstinvasie — 24 Dec 2025</div>
          <div className="p-4 bg-gray-800 rounded">Wekelijkse Police Training — 20 Sep 2025</div>
        </div>
      </section>
    </div>
  )
}