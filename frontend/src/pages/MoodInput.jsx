import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MoodInput() {
  const [mood, setMood] = useState('')
  const nav = useNavigate()

  async function analyze() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood })
    })
    const data = await res.json()
    window.sessionStorage.setItem('suggestion', JSON.stringify(data))
    nav('/recommendation')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">How are you feeling today?</h2>
        <textarea
          rows="4"
          className="w-full border border-gray-300 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Type your mood..."
          value={mood}
          onChange={e => setMood(e.target.value)}
        />
        <button
          onClick={analyze}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Get a song 🔥
        </button>
      </div>
    </div>
  )
}
