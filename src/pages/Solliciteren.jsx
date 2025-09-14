import React from 'react'
import ApplyForm from '../components/ApplyForm'

export default function Solliciteren(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Solliciteren</h1>
      <p>Vul onderstaand formulier in voor whitelist of staff aanvragen. Alle velden met * zijn verplicht.</p>
      <ApplyForm />
    </div>
  )
}