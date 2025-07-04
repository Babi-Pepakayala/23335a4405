import React from 'react'

export default ({ urls, onClick }) => (
  <div className="mt-4">
    <h2 className="text-lg font-semibold">Links</h2>
    <ul className="space-y-2 mt-2">
      {urls.map(u => (
        <li key={u.c} className="border p-2">
          <div><b>Orig:</b> {u.o}</div>
          <div>
            <b>Short:</b>{' '}
            <button className="text-blue-600 underline" onClick={() => { onClick(u.c); window.open(`https://short.ly/${u.c}`, '_blank') }}>
              https://short.ly/{u.c}
            </button>
          </div>
          {u.e && <div><b>Exp:</b> {new Date(u.e).toLocaleString()}</div>}
        </li>
      ))}
    </ul>
  </div>
)
