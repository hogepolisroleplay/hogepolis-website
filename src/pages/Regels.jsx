import React from 'react'
export default function Regels(){
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Regels</h1>
      <section className="bg-gray-800 p-4 rounded">
        <h2 className="font-semibold">Algemene regels</h2>
        <ul className="list-disc ml-6 text-gray-200">
          <li>Respecteer elkaar.</li>
          <li>Geen hacks of exploits.</li>
          <li>Geen discrimination.</li>
        </ul>
      </section>

      <section className="bg-gray-800 p-4 rounded">
        <h2 className="font-semibold">Roleplay regels</h2>
        <ul className="list-disc ml-6 text-gray-200">
          <li>Geen RDM/VDM.</li>
          <li>Value of Life toepassen.</li>
        </ul>
      </section>
    </div>
  )
}