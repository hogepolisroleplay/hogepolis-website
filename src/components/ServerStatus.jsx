import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function ServerStatus({ip}){
  const [status, setStatus] = useState({loading:true, online:false, players:0, maxPlayers:0})
  useEffect(()=>{
    if(!ip) return
    const url = `https://servers-live.fivem.net/api/servers?search=${encodeURIComponent(ip)}`
    axios.get(url).then(res=>{
      // API returns array; find exact match
      const found = Array.isArray(res.data) && res.data[0] ? res.data[0] : null
      if(found){
        setStatus({loading:false, online:true, players: found.Data?.clients || found.clients || 0, maxPlayers: found.Data?.sv_maxclients || found.sv_maxclients || 0})
      } else {
        setStatus({loading:false, online:false, players:0, maxPlayers:0})
      }
    }).catch(()=> setStatus({loading:false, online:false, players:0, maxPlayers:0}))
  },[ip])
  if(status.loading) return <div className="p-4 bg-gray-800 rounded">Laden...</div>
  return (
    <div className={"p-4 rounded "+(status.online ? 'bg-green-800/40' : 'bg-red-800/40')}>
      <div className="font-semibold">{status.online ? 'Server is ONLINE' : 'Server is OFFLINE'}</div>
      {status.online && <div className="text-sm">Spelers: {status.players} / {status.maxPlayers}</div>}
    </div>
  )
}