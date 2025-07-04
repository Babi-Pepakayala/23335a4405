import React, { useState } from 'react'
import Frm from './frm.jsx'
import Dis from './dis.jsx'

export default () => {
  const [urls, setUrls] = useState([])
  const addUrl = (x) => setUrls(p => [...p, x])
  const clkUrl = (code) => setUrls(p =>
    p.map(u =>
      u.c === code
        ? { ...u, n: (u.n || 0) + 1, t: [...(u.t || []), new Date().toISOString()] }
        : u
    )
  )
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">URL Shortener</h1>
      <Frm onAdd={addUrl} />
      <Dis urls={urls} onClick={clkUrl} />
    </div>
  )
}