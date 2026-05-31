import { useMemo } from 'react'
import {
  calcRSI,
  calcMACD,
  calcStochastic,
  calcSMA,
  lastVal,
  detectTrend,
} from '../../utils/indicators'

// ─── helpers ─────────────────────────────────────────────────────────────────

function fmt(n, d = 2) {
  if (n === null || n === undefined || !isFinite(n)) return '—'
  return (+n).toFixed(d)
}

// ─── Analysis engine ──────────────────────────────────────────────────────────

function buildAnalysis(data) {
  const closes = data.map(d => d.close)
  const highs  = data.map(d => d.high)
  const lows   = data.map(d => d.low)

  const sma50Arr  = calcSMA(closes, 50)
  const rsiArr    = calcRSI(closes, 14)
  const macdArr   = calcMACD(closes, 12, 26, 9)
  const stochArr  = calcStochastic(highs, lows, closes, 14, 3)

  const trend     = detectTrend(closes, sma50Arr)
  const sma50Val  = lastVal(sma50Arr)
  const rsiVal    = lastVal(rsiArr)
  const macdLast  = lastVal(macdArr)
  const stochLast = lastVal(stochArr)

  const lastClose  = closes[closes.length - 1]
  const change20   = closes.length >= 20
    ? ((lastClose - closes[closes.length - 20]) / closes[closes.length - 20] * 100)
    : null

  // MACD decompose
  const macdLine   = macdLast && typeof macdLast === 'object' ? macdLast.MACD      : macdLast
  const signalLine = macdLast && typeof macdLast === 'object' ? macdLast.signal    : null
  const histLine   = macdLast && typeof macdLast === 'object' ? macdLast.histogram : null

  // Stochastic decompose
  const kVal = stochLast && typeof stochLast === 'object' ? stochLast.k : null
  const dVal = stochLast && typeof stochLast === 'object' ? stochLast.d : null

  // ── Build sections ──────────────────────────────────────────────────────────

  const trendLabel = { alcista: 'Alcista', bajista: 'Bajista', lateral: 'Lateral' }[trend] ?? 'Indeterminada'
  const trendColor = { alcista: 'text-green-400', bajista: 'text-red-400', lateral: 'text-yellow-400' }[trend] ?? 'text-slate-400'

  const trendSummary = sma50Val !== null && change20 !== null
    ? `El precio (${fmt(lastClose)}) ${lastClose > sma50Val ? 'opera por encima' : 'opera por debajo'} de la SMA50 (${fmt(sma50Val)}), con un cambio de ${fmt(change20, 1)}% en los ultimos 20 dias.`
    : `Precio actual: ${fmt(lastClose)}. Datos insuficientes para comparacion con SMA50.`

  const rsiSummary = rsiVal !== null
    ? rsiVal > 70
      ? `RSI en sobrecompra (${fmt(rsiVal, 1)}). El activo podria necesitar una pausa o correccion.`
      : rsiVal < 30
        ? `RSI en sobreventa (${fmt(rsiVal, 1)}). Podria producirse un rebote tecnico.`
        : `RSI neutral (${fmt(rsiVal, 1)}). Sin senales de agotamiento extremo.`
    : 'RSI: datos insuficientes.'

  const macdSummary = macdLine !== null && signalLine !== null
    ? `MACD (${fmt(macdLine, 3)}) ${macdLine > signalLine ? 'por encima' : 'por debajo'} de la senial (${fmt(signalLine, 3)}). ${
        histLine !== null
          ? histLine > 0 ? 'Histograma positivo, momentum alcista.' : 'Histograma negativo, momentum bajista.'
          : ''
      }`
    : 'MACD: datos insuficientes.'

  const stochSummary = kVal !== null && dVal !== null
    ? kVal > 80
      ? `Estocástico en sobrecompra (K=${fmt(kVal, 1)}, D=${fmt(dVal, 1)}).`
      : kVal < 20
        ? `Estocástico en sobreventa (K=${fmt(kVal, 1)}, D=${fmt(dVal, 1)}).`
        : `Estocástico neutral (K=${fmt(kVal, 1)}, D=${fmt(dVal, 1)}), sin extremos.`
    : 'Estocástico: datos insuficientes.'

  // ── Signals ────────────────────────────────────────────────────────────────

  const pros = []
  const cons = []

  // Trend
  if (trend === 'alcista') pros.push(`Tendencia alcista confirmada: precio por encima de SMA50 con alza del ${fmt(change20, 1)}% en 20 dias.`)
  if (trend === 'bajista') cons.push(`Tendencia bajista: precio por debajo de SMA50 con caida del ${fmt(Math.abs(change20), 1)}% en 20 dias.`)
  if (trend === 'lateral') cons.push('Tendencia lateral: sin direccion clara. El precio se mueve en rango.')

  // RSI
  if (rsiVal !== null) {
    if (rsiVal < 40) pros.push(`RSI bajo (${fmt(rsiVal, 1)}): el activo no esta sobrecomprado, hay margen de suba.`)
    if (rsiVal > 70) cons.push(`RSI en sobrecompra (${fmt(rsiVal, 1)}): mayor probabilidad de correccion a corto plazo.`)
    if (rsiVal >= 50 && rsiVal <= 70) pros.push(`RSI en zona alcista (${fmt(rsiVal, 1)}): momentum positivo sin sobrecompra extrema.`)
  }

  // MACD
  if (macdLine !== null && signalLine !== null) {
    if (macdLine > signalLine) pros.push('MACD por encima de la senial: cruce alcista activo.')
    else cons.push('MACD por debajo de la senial: cruce bajista, presion vendedora.')
    if (histLine !== null) {
      if (histLine > 0) pros.push('Histograma MACD positivo: el impulso alcista se mantiene.')
      else cons.push('Histograma MACD negativo: el impulso se debilita o es bajista.')
    }
  }

  // Stochastic
  if (kVal !== null) {
    if (kVal < 30) pros.push(`Estocástico en sobreventa (K=${fmt(kVal, 1)}): posible punto de entrada a considerar.`)
    if (kVal > 80) cons.push(`Estocástico sobrecomprado (K=${fmt(kVal, 1)}): el precio podria retroceder.`)
    if (kVal !== null && dVal !== null && kVal > dVal && kVal >= 30 && kVal <= 80)
      pros.push(`Linea K (${fmt(kVal, 1)}) por encima de D (${fmt(dVal, 1)}): momentum estocastico alcista.`)
  }

  return {
    trend, trendLabel, trendColor,
    trendSummary, rsiSummary, macdSummary, stochSummary,
    pros, cons,
    lastClose,
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SummaryRow({ label, value }) {
  return (
    <div className="flex gap-2 text-sm">
      <span className="text-slate-400 min-w-[100px] shrink-0">{label}:</span>
      <span className="text-slate-200 leading-snug">{value}</span>
    </div>
  )
}

function SignalList({ items, type }) {
  if (!items.length) return null
  const isFavor = type === 'favor'
  const icon    = isFavor ? '✅' : '⚠️'
  const title   = isFavor ? 'A FAVOR del movimiento alcista' : 'EN CONTRA del movimiento alcista'
  const borderColor = isFavor ? 'border-green-700/50' : 'border-red-700/50'
  const bgColor     = isFavor ? 'bg-green-900/20'     : 'bg-red-900/20'
  const titleColor  = isFavor ? 'text-green-400'       : 'text-red-400'

  return (
    <div className={`rounded-xl p-4 border ${bgColor} ${borderColor}`}>
      <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${titleColor}`}>{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((signal, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-200 leading-snug">
            <span className="shrink-0">{icon}</span>
            <span>{signal}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AnalysisSummary({ data, ticker }) {
  const analysis = useMemo(() => buildAnalysis(data), [data])

  function handlePrint() {
    window.print()
  }

  return (
    <div className="bg-slate-800 rounded-xl p-5 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-lg font-bold text-slate-100">
            Resumen de Analisis Tecnico
            {ticker && <span className="ml-2 text-blue-400">{ticker}</span>}
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">
            Generado a partir de los datos cargados. Solo con fines educativos.
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-slate-100 transition-colors print:hidden"
        >
          Imprimir
        </button>
      </div>

      {/* Trend badge */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-400">Tendencia detectada:</span>
        <span className={`text-sm font-bold uppercase tracking-wide ${analysis.trendColor}`}>
          {analysis.trendLabel}
        </span>
      </div>

      {/* Indicator summaries */}
      <div className="bg-slate-900/60 rounded-xl p-4 flex flex-col gap-3">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Resumen por indicador</h3>
        <SummaryRow label="Tendencia" value={analysis.trendSummary} />
        <SummaryRow label="RSI (14)"  value={analysis.rsiSummary} />
        <SummaryRow label="MACD"      value={analysis.macdSummary} />
        <SummaryRow label="Estocastico" value={analysis.stochSummary} />
      </div>

      {/* Signal lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SignalList items={analysis.pros} type="favor" />
        <SignalList items={analysis.cons} type="contra" />
      </div>

      {analysis.pros.length === 0 && analysis.cons.length === 0 && (
        <p className="text-sm text-slate-500 text-center py-2">
          No hay suficientes datos para generar seniales. Carga al menos 50 velas.
        </p>
      )}

      {/* Warning note */}
      <div className="bg-yellow-900/30 border border-yellow-700/40 rounded-xl p-4 flex gap-3">
        <span className="text-yellow-400 shrink-0 text-lg mt-0.5">⚠️</span>
        <p className="text-sm text-yellow-300 leading-relaxed">
          <span className="font-semibold">Advertencia: </span>
          Este analisis es solo educativo. Siempre defini tu stop loss antes de operar.
          Los indicadores tecnicos no garantizan resultados futuros y deben complementarse
          con un analisis propio y una estrategia de gestion de riesgo.
        </p>
      </div>
    </div>
  )
}
