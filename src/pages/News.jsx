import React from 'react'
import news from '../data/news.json'
export default function News(){
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Nieuws</h1>
      <div className="grid gap-4">
        {news.map(n=>(
          <article key={n.id} className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold">{n.title} <span className="text-sm text-gray-400">({n.date})</span></h3>
            <p className="text-gray-300">{n.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}