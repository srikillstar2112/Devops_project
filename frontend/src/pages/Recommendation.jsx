import React from 'react'

export default function Recommendation() {
  const data = JSON.parse(window.sessionStorage.getItem('suggestion'))
  if (!data) return <div>No recommendation found.</div>

  return (
    <div className="py-20 text-center space-y-4">
      <h2 className="text-2xl">Here's a song for you:</h2>
      <img src={data.albumArt} alt="Album art"
        className="mx-auto rounded shadow-lg w-64 h-64 object-cover" />
      <h3 className="text-xl font-semibold">{data.title}</h3>
      <p className="text-gray-600">{data.artist}</p>

      {data.previewUrl ?
        <audio controls src={data.previewUrl} className="mt-4" /> :
        <a href={data.spotifyUrl} target="_blank" rel="noopener noreferrer"
           className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
           Listen on Spotify
        </a>
      }

      <button onClick={() => window.location = '/mood'}
        className="block mx-auto mt-6 text-sm text-indigo-600 hover:underline">
        Try another
      </button>
    </div>
  )
}
