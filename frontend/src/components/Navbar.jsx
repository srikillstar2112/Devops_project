import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/mood', label: 'Mood' },
  { to: '/history', label: 'History' },
]

export default function Navbar() {
  const loc = useLocation()
  return (
    <nav className="bg-indigo-600 text-white py-3">
      <div className="max-w-xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">MoodMusic</Link>
        <div className="space-x-4">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`hover:underline ${loc.pathname === l.to ? 'underline' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
