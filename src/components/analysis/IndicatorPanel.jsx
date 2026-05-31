import { useMemo } from 'react'
import { calcRSI, calcMACD, calcStochastic, calcATR, lastVal } from '../../utils/indicators'

// ─── helpers ────────────────────────────────────────────────────────────────

function normalizeSeries(values, min, max) {
  const range = max - min || 1
  return values.map(v => (v === null || v === undefined) ? null : (v - min) / range)
}

function polylinePts(normalized, width, height, padding = 6) {
  const innerW = width - padding * 2
  const innerH = height - padding * 2
  const step = innerW / (normalized.length - 1)
  return normalized
    .map((v, i) => v === null ? null : `${padding + i * step},${padding + (1 - v) * innerH}`)
    .filter(Boolean)
    .join(' ')
}

function yPos(normalized, height, padding = 6) {
  return padding + (1 - normalized) * (height - padding * 2)
}

// ─── SVG mini-charts ─────────────────────────────────────────────────────────

const W = '100%'
const H = 100
const PAD = 6

function RSIChart({ values }) {
  const slice = values.slice(-80).map(v => (v === null ? null : +v.toFixed(2)))
  const pts = polylinePts(normalizeSeries(slice, 0, 100), 600, H, PAD)
  const refY70 = yPos(70 / 100, H, PAD)
  const refY30 = yPos(30 / 100, H, PAD)

  return (
    <svg viewBox={`0 0 600 ${H}`} width={W} height={H} preserveAspectRatio="none" className="w-full">
      {/* shaded zone 30-70 */}
      <rect x={PAD} y={refY70} width={600 - PAD * 2} height={refY30 - refY70} fill="rgba(99,102,241,0.1)" />
      {/* reference line 70 */}
      <line x1={PAD} y1={refY70} x2={600 - PAD} y2={refY70} stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
      {/* reference line 30 */}
      <line x1={PAD} y1={refY30} x2={600 - PAD} y2={refY30} stroke="#22c55e" strokeWidth="1" strokeDasharray="4,4" />
      {/* RSI line */}
      <polyline points={pts} fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function MACDChart({ macdArr, signalArr, histArr }) {
  const len = 80
  const mSlice = macdArr.slice(-len)
  const sSlice = signalArr.slice(-len)
  const hSlice = histArr.slice(-len)

  const allVals = [...mSlice, ...sSlice, ...hSlice].filter(v => v !== null)
  const min = Math.min(...allVals)
  const max = Math.max(...allVals)
  const range = max - min || 1

  const norm = v => (v === null ? null : (v - min) / range)
  const mNorm = mSlice.map(norm)
  const sNorm = sSlice.map(norm)
  const hNorm = hSlice.map(norm)

  const innerW = 600 - PAD * 2
  const innerH = H - PAD * 2
  const step = innerW / (len - 1)
  const zeroNorm = norm(0)
  const zeroY = yPos(zeroNorm ?? 0.5, H, PAD)

  const macdPts = polylinePts(mNorm, 600, H, PAD)
  const signalPts = polylinePts(sNorm, 600, H, PAD)

  const bars = hNorm.map((v, i) => {
    if (v === null) return null
    const x = PAD + i * step
    const barTop = yPos(v, H, PAD)
    const barBottom = zeroY
    const y = Math.min(barTop, barBottom)
    const bh = Math.abs(barTop - barBottom)
    const fill = hSlice[i] >= 0 ? '#22c55e' : '#ef4444'
    return <rect key={i} x={x - step * 0.35} y={y} width={step * 0.7} height={bh || 1} fill={fill} opacity="0.75" />
  })

  return (
    <svg viewBox={`0 0 600 ${H}`} width={W} height={H} preserveAspectRatio="none" className="w-full">
      <line x1={PAD} y1={zeroY} x2={600 - PAD} y2={zeroY} stroke="#475569" strokeWidth="0.8" />
      {bars}
      <polyline points={macdPts} fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round" />
      <polyline points={signalPts} fill="none" stroke="#fb923c" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function StochChart({ kArr, dArr }) {
  const kSlice = kArr.slice(-80)
  const dSlice = dArr.slice(-80)
  const kNorm = normalizeSeries(kSlice, 0, 100)
  const dNorm = normalizeSeries(dSlice, 0, 100)
  const kPts = polylinePts(kNorm, 600, H, PAD)
  const dPts = polylinePts(dNorm, 600, H, PAD)
  const ref80Y = yPos(80 / 100, H, PAD)
  const ref20Y = yPos(20 / 100, H, PAD)

  return (
    <svg viewBox={`0 0 600 ${H}`} width={W} height={H} preserveAspectRatio="none" className="w-full">
      <line x1={PAD} y1={ref80Y} x2={600 - PAD} y2={ref80Y} stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
      <line x1={PAD} y1={ref20Y} x2={600 - PAD} y2={ref20Y} stroke="#22c55e" strokeWidth="1" strokeDasharray="4,4" />
      <polyline points={kPts} fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round" />
      <polyline points={dPts} fill="none" stroke="#fb923c" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function ATRChart({ values }) {
  const slice = values.slice(-80)
  const valid = slice.filter(v => v !== null)
  const min = Math.min(...valid)
  const max = Math.max(...valid)
  const norm = normalizeSeries(slice, min, max)
  const pts = polylinePts(norm, 600, H, PAD)

  return (
    <svg viewBox={`0 0 600 ${H}`} width={W} height={H} preserveAspectRatio="none" className="w-full">
      <polyline points={pts} fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

// ─── interpretations ─────────────────────────────────────────────────────────

function interpretRSI(val) {
  if (val === null) return 'Sin datos suficientes para calcular el RSI.'
  const v = +val.toFixed(1)
  if (v > 70) return `RSI en zona de sobrecompra (${v} > 70). El precio podría estar agotando el impulso alcista.`
  if (v < 30) return `RSI en zona de sobreventa (${v} < 30). Podría haber un rebote o recuperación cercana.`
  if (v >= 50) return `RSI neutral-alcista (${v}). El momentum favorece levemente a los compradores.`
  return `RSI neutral-bajista (${v}). El momentum favorece levemente a los vendedores.`
}

function interpretMACD(macd, signal, hist) {
  if (macd === null || signal === null) return 'Sin datos suficientes para calcular el MACD.'
  const m = +macd.toFixed(4)
  const s = +signal.toFixed(4)
  const h = hist !== null ? +hist.toFixed(4) : null
  const cross = m > s ? 'alcista' : 'bajista'
  const histDesc = h !== null ? (h > 0 ? ' El histograma positivo refuerza el impulso alcista.' : ' El histograma negativo sugiere presión vendedora.') : ''
  return `MACD (${m}) ${m > s ? 'por encima' : 'por debajo'} de la señal (${s}), cruce ${cross}.${histDesc}`
}

function interpretStoch(k, d) {
  if (k === null || d === null) return 'Sin datos suficientes para calcular el Estocástico.'
  const kv = +k.toFixed(1)
  const dv = +d.toFixed(1)
  if (kv > 80) return `Estocástico en sobrecompra (K=${kv}, D=${dv}). Posible agotamiento de la tendencia alcista.`
  if (kv < 20) return `Estocástico en sobreventa (K=${kv}, D=${dv}). Posible rebote técnico inminente.`
  const dir = kv > dv ? 'K por encima de D (momentum alcista).' : 'K por debajo de D (momentum bajista).'
  return `Estocástico en zona neutral (K=${kv}, D=${dv}). ${dir}`
}

function interpretATR(val, closes) {
  if (val === null || !closes.length) return 'Sin datos suficientes para calcular el ATR.'
  const lastClose = closes[closes.length - 1]
  const atrPct = (val / lastClose * 100).toFixed(2)
  const level = atrPct > 3 ? 'alta' : atrPct > 1.5 ? 'moderada' : 'baja'
  return `ATR de ${val.toFixed(2)} (${atrPct}% del precio). Volatilidad ${level}. Usá este valor como referencia para dimensionar tu stop loss.`
}

// ─── Legend helpers ───────────────────────────────────────────────────────────

function Legend({ items }) {
  return (
    <div className="flex flex-wrap gap-3 mt-1 mb-2">
      {items.map(({ color, label }) => (
        <span key={label} className="flex items-center gap-1 text-xs text-slate-400">
          <span className="inline-block w-4 h-0.5 rounded" style={{ backgroundColor: color }} />
          {label}
        </span>
      ))}
    </div>
  )
}

// ─── Card wrapper ─────────────────────────────────────────────────────────────

function IndicatorCard({ title, value, valueColor, chart, legend, interpretation }) {
  return (
    <div className="bg-slate-800 rounded-xl p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">{title}</h3>
        <span className={`text-2xl font-bold tabular-nums ${valueColor}`}>{value}</span>
      </div>
      {legend && <Legend items={legend} />}
      <div className="rounded overflow-hidden bg-slate-900">{chart}</div>
      <p className="text-xs text-slate-400 leading-relaxed mt-1">{interpretation}</p>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function IndicatorPanel({ data }) {
  const closes = useMemo(() => data.map(d => d.close), [data])
  const highs  = useMemo(() => data.map(d => d.high),  [data])
  const lows   = useMemo(() => data.map(d => d.low),   [data])

  const rsiArr   = useMemo(() => calcRSI(closes, 14), [closes])
  const macdArr  = useMemo(() => calcMACD(closes, 12, 26, 9), [closes])
  const stochArr = useMemo(() => calcStochastic(highs, lows, closes, 14, 3), [highs, lows, closes])
  const atrArr   = useMemo(() => calcATR(highs, lows, closes, 14), [highs, lows, closes])

  const rsiVal    = lastVal(rsiArr)
  const macdLast  = lastVal(macdArr)
  const atrVal    = lastVal(atrArr)
  const stochLast = lastVal(stochArr)

  const macdLine   = macdLast?.MACD     ?? macdLast ?? null
  const signalLine = macdLast?.signal   ?? null
  const histLine   = macdLast?.histogram ?? null

  const macdValues   = macdArr.map(v => (v && typeof v === 'object' ? v.MACD     : null))
  const signalValues = macdArr.map(v => (v && typeof v === 'object' ? v.signal   : null))
  const histValues   = macdArr.map(v => (v && typeof v === 'object' ? v.histogram : null))

  const kValues = stochArr.map(v => (v && typeof v === 'object' ? v.k : null))
  const dValues = stochArr.map(v => (v && typeof v === 'object' ? v.d : null))
  const kVal = stochLast?.k ?? null
  const dVal = stochLast?.d ?? null

  function rsiColor(v) {
    if (v === null) return 'text-slate-400'
    if (v > 70) return 'text-red-400'
    if (v < 30) return 'text-green-400'
    return 'text-blue-400'
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <IndicatorCard
        title="RSI (14)"
        value={rsiVal !== null ? rsiVal.toFixed(1) : '—'}
        valueColor={rsiColor(rsiVal)}
        chart={<RSIChart values={rsiArr} />}
        legend={[
          { color: '#60a5fa', label: 'RSI' },
          { color: '#ef4444', label: 'Sobrecompra (70)' },
          { color: '#22c55e', label: 'Sobreventa (30)' },
        ]}
        interpretation={interpretRSI(rsiVal)}
      />

      <IndicatorCard
        title="MACD (12, 26, 9)"
        value={macdLine !== null ? macdLine.toFixed(3) : '—'}
        valueColor={macdLine !== null && macdLine > 0 ? 'text-green-400' : 'text-red-400'}
        chart={<MACDChart macdArr={macdValues} signalArr={signalValues} histArr={histValues} />}
        legend={[
          { color: '#60a5fa', label: 'MACD' },
          { color: '#fb923c', label: 'Señal' },
          { color: '#22c55e', label: 'Histograma +' },
          { color: '#ef4444', label: 'Histograma -' },
        ]}
        interpretation={interpretMACD(macdLine, signalLine, histLine)}
      />

      <IndicatorCard
        title="Estocástico (14, 3)"
        value={kVal !== null ? `K ${kVal.toFixed(1)}` : '—'}
        valueColor={kVal !== null && kVal > 80 ? 'text-red-400' : kVal !== null && kVal < 20 ? 'text-green-400' : 'text-blue-400'}
        chart={<StochChart kArr={kValues} dArr={dValues} />}
        legend={[
          { color: '#60a5fa', label: '%K' },
          { color: '#fb923c', label: '%D' },
          { color: '#ef4444', label: 'Sobrecompra (80)' },
          { color: '#22c55e', label: 'Sobreventa (20)' },
        ]}
        interpretation={interpretStoch(kVal, dVal)}
      />

      <IndicatorCard
        title="ATR (14)"
        value={atrVal !== null ? atrVal.toFixed(2) : '—'}
        valueColor="text-violet-400"
        chart={<ATRChart values={atrArr} />}
        legend={[{ color: '#a78bfa', label: 'ATR' }]}
        interpretation={interpretATR(atrVal, closes)}
      />
    </div>
  )
}
