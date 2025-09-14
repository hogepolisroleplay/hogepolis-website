import React from 'react'
export default function Doneren(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Doneren</h1>
      <p>Steun de server — we raden Ko-fi, PayPal of Stripe aan. Voeg hier jouw shop link toe.</p>
      <div className="flex gap-4">
        <a className="px-4 py-2 bg-yellow-500 rounded text-black" href="#">Ko-fi</a>
        <a className="px-4 py-2 bg-blue-600 rounded" href="#">PayPal</a>
      </div>
    </div>
  )
}