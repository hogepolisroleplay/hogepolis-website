import React from 'react'
export default function Politie(){
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Politie</h1>
      <p>Informatie over politie-rol: whitelist procedure, requirements en training.</p>
      <ul className="list-disc ml-6">
        <li>Minimum leeftijd: 18</li>
        <li>Voice-chat verplicht</li>
        <li>Training en tests</li>
      </ul>
    </div>
  )
}