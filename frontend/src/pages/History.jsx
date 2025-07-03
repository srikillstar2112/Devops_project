import React from 'react'

export default function History() {
  const data = JSON.parse(window.sessionStorage.getItem('suggestion'))
  return (
    <div className="py-20">
      <h2 className="text-2xl mb-4">Your latest suggestion</h2>
      {data ? (
        <div className="flex flex-col items-center space-y-4">
          <img src={data.albumArt} alt="" className="w-48 h-48 object-cover rounded" />
          <h3 className="text-xl">{data.title}</h3>
          <p className="text-gray-600">{data.artist}</p>
        </div>
      ) : (
        <p>No history yet—go get a suggestion! 😊</p>
      )}
    </div>
  )
}
