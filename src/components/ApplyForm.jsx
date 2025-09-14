import React, {useState} from 'react'
import axios from 'axios'

export default function ApplyForm(){
  const [form, setForm] = useState({name:'', discord:'', age:'', role:''})
  const [status, setStatus] = useState(null)

  function update(e){ setForm({...form, [e.target.name]: e.target.value}) }

  async function submit(e){
    e.preventDefault()
    // basic validation
    if(!form.name || !form.discord || !form.role){
      setStatus({type:'error', msg:'Vul alle verplichte velden in.'}); return
    }
    setStatus({type:'loading', msg:'Verzenden...'})
    const webhook = import.meta.env.VITE_WEBHOOK_URL || ''
    const payload = {content:`Nieuwe sollicitatie:\nNaam: ${form.name} - Discord: ${form.discord} - Leeftijd: ${form.age} - Rol: ${form.role}`}
    try {
      if(webhook){
        await axios.post(webhook, payload)
        setStatus({type:'success', msg:'Sollicitatie verzonden!'})
        setForm({name:'', discord:'', age:'', role:''})
      } else {
        // fallback: save to localStorage as draft
        const drafts = JSON.parse(localStorage.getItem('hp_drafts')||'[]')
        drafts.push({...form, date: new Date().toISOString()})
        localStorage.setItem('hp_drafts', JSON.stringify(drafts))
        setStatus({type:'warning', msg:'Geen webhook ingesteld — formulier lokaal opgeslagen.'})
      }
    } catch(err){
      setStatus({type:'error', msg:'Verzenden mislukt.'})
    }
  }

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto space-y-4 bg-gray-800 p-6 rounded">
      <div>
        <label className="block text-sm text-gray-300">Volledige naam *</label>
        <input name="name" value={form.name} onChange={update} className="w-full mt-1 p-2 rounded bg-gray-900" />
      </div>
      <div>
        <label className="block text-sm text-gray-300">Discord tag (naam#0000) *</label>
        <input name="discord" value={form.discord} onChange={update} className="w-full mt-1 p-2 rounded bg-gray-900" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-300">Leeftijd</label>
          <input name="age" value={form.age} onChange={update} className="w-full mt-1 p-2 rounded bg-gray-900" />
        </div>
        <div>
          <label className="block text-sm text-gray-300">Gewenste rol *</label>
          <select name="role" value={form.role} onChange={update} className="w-full mt-1 p-2 rounded bg-gray-900">
            <option value="">Kies een rol</option>
            <option value="politie">Politie (Whitelist)</option>
            <option value="ambulance">Ambulance (Whitelist)</option>
            <option value="crimineel">Crimineel</option>
            <option value="burger">Burger</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-indigo-600 px-4 py-2 rounded">Verstuur</button>
        {status && <div className={'text-sm '+(status.type==='error'?'text-red-400':status.type==='success'?'text-green-400':'text-yellow-300')}>{status.msg}</div>}
      </div>
    </form>
  )
}