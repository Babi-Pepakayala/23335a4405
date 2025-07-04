import React, { useState } from 'react'
import gen from './gen.js'

export default ({ onAdd }) => {
  const [url, setUrl] = useState('')
  const [val, setVal] = useState('')
  const [cod, setCod] = useState('')

  const sub = e => {
    e.preventDefault()
    try { new URL(url) } catch { alert('Invalid URL'); return }
    const c = cod || gen()
    const exp = val ? Date.now() + val * 60000 : null
    onAdd({ o: url, c, e: exp, n: 0, t: [] })
    setUrl('')
    setVal('')
    setCod('')
  }

  return (
    <form onSubmit={sub} className="space-y-2">
      <input type="url" placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} required className="border p-2 w-full" />
      <input type="number" placeholder="Valid (min)" value={val} onChange={e => setVal(e.target.value)} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Go</button>
    </form>
  )
}
