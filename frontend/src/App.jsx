import { useState } from 'react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function App() {
  const [form, setForm] = useState({
    sale_price: 200000, sale_costs: 10000, monthly_rent: 900,
    annual_costs: 1500, years: 10, discount_rate: 0.04, final_value: 220000,
  })
  const [result, setResult] = useState(null)

  const set = (k) => (e) => setForm({ ...form, [k]: Number(e.target.value) })

  async function submit(e) {
    e.preventDefault()
    const r = await fetch(`${API}/api/analysis`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setResult(await r.json())
  }

  return (
    <main style={{ maxWidth: 560, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h1>REII</h1>
      <p>Vender ou arrendar? Simulação inicial.</p>
      <form onSubmit={submit}>
        {Object.keys(form).map((k) => (
          <label key={k} style={{ display: 'block', marginBottom: 8 }}>
            {k}
            <input type="number" step="any" value={form[k]} onChange={set(k)} style={{ marginLeft: 8 }} />
          </label>
        ))}
        <button type="submit">Analisar</button>
      </form>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </main>
  )
}
