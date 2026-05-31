import { useState, useMemo } from 'react'

// ─── helpers ─────────────────────────────────────────────────────────────────

function safeNum(v) {
  const n = parseFloat(v)
  return isNaN(n) || n <= 0 ? null : n
}

function fmt(n, decimals = 2) {
  if (n === null || n === undefined || !isFinite(n)) return '—'
  return n.toLocaleString('es-AR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}

function fmtMoney(n) {
  if (n === null || n === undefined || !isFinite(n)) return '—'
  return '$' + n.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// ─── sub-components ───────────────────────────────────────────────────────────

function InputField({ label, hint, value, onChange, min, max, step, prefix, suffix }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</label>
      {hint && <p className="text-xs text-slate-500 leading-tight">{hint}</p>}
      <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg overflow-hidden focus-within:border-blue-500 transition-colors">
        {prefix && <span className="px-2 text-slate-400 text-sm select-none">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={e => onChange(e.target.value)}
          min={min}
          max={max}
          step={step ?? '0.01'}
          className="flex-1 bg-transparent py-2 px-2 text-slate-100 text-sm outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        {suffix && <span className="px-2 text-slate-400 text-sm select-none">{suffix}</span>}
      </div>
    </div>
  )
}

function ResultCard({ label, value, hint, color }) {
  const colorMap = {
    green:  { bg: 'bg-green-900/40',  border: 'border-green-700/50', text: 'text-green-400' },
    yellow: { bg: 'bg-yellow-900/40', border: 'border-yellow-700/50', text: 'text-yellow-400' },
    red:    { bg: 'bg-red-900/40',    border: 'border-red-700/50',    text: 'text-red-400'   },
    neutral:{ bg: 'bg-slate-800',     border: 'border-slate-700',     text: 'text-slate-100' },
  }
  const c = colorMap[color] ?? colorMap.neutral

  return (
    <div className={`rounded-xl p-3 border ${c.bg} ${c.border} flex flex-col gap-0.5`}>
      <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</span>
      <span className={`text-xl font-bold tabular-nums ${c.text}`}>{value}</span>
      {hint && <span className="text-xs text-slate-400 mt-0.5 leading-snug">{hint}</span>}
    </div>
  )
}

function RRBadge({ rr }) {
  if (rr === null) return null
  const color = rr >= 2 ? 'bg-green-500' : rr >= 1 ? 'bg-yellow-500' : 'bg-red-500'
  const label = rr >= 2 ? 'Buena relacion RR' : rr >= 1 ? 'RR aceptable' : 'RR insuficiente'
  return (
    <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ${color} bg-opacity-20 border border-current border-opacity-30`}>
      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${color}`} />
      <span className="text-sm font-semibold text-slate-100">{label}</span>
      <span className="ml-auto text-lg font-bold tabular-nums text-slate-100">1:{fmt(rr, 2)}</span>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function RiskCalculator() {
  const [entryPrice,   setEntryPrice]   = useState('')
  const [stopLoss,     setStopLoss]     = useState('')
  const [targetPrice,  setTargetPrice]  = useState('')
  const [capitalTotal, setCapitalTotal] = useState('')
  const [riskPercent,  setRiskPercent]  = useState('1.5')

  const calc = useMemo(() => {
    const entry   = safeNum(entryPrice)
    const stop    = safeNum(stopLoss)
    const target  = safeNum(targetPrice)
    const capital = safeNum(capitalTotal)
    const riskPct = safeNum(riskPercent)

    if (!entry || !stop || entry === stop) return null

    const riskPerShare   = Math.abs(entry - stop)
    const rewardPerShare = target ? Math.abs(target - entry) : null
    const rrRatio        = rewardPerShare !== null ? rewardPerShare / riskPerShare : null
    const capitalToRisk  = capital && riskPct ? capital * (riskPct / 100) : null
    const shares         = capitalToRisk ? Math.floor(capitalToRisk / riskPerShare) : null
    const totalRisk      = shares !== null ? shares * riskPerShare : null
    const totalReward    = shares !== null && rewardPerShare !== null ? shares * rewardPerShare : null

    return { riskPerShare, rewardPerShare, rrRatio, capitalToRisk, shares, totalRisk, totalReward }
  }, [entryPrice, stopLoss, targetPrice, capitalTotal, riskPercent])

  function rrColor(rr) {
    if (rr === null) return 'neutral'
    if (rr >= 2) return 'green'
    if (rr >= 1) return 'yellow'
    return 'red'
  }

  return (
    <div className="bg-slate-800 rounded-xl p-5 flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-bold text-slate-100">Calculadora de Gestion de Riesgo</h2>
        <p className="text-sm text-slate-400 mt-1">
          Defini tu entrada, stop loss y objetivo para calcular el tamano optimo de la posicion.
        </p>
      </div>

      {/* ── Inputs ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Precio de entrada"
          hint="Precio al que abris la operacion."
          value={entryPrice}
          onChange={setEntryPrice}
          prefix="$"
          min="0"
        />
        <InputField
          label="Stop loss"
          hint="Precio maximo de perdida aceptable."
          value={stopLoss}
          onChange={setStopLoss}
          prefix="$"
          min="0"
        />
        <InputField
          label="Precio objetivo"
          hint="Target de ganancia (take profit)."
          value={targetPrice}
          onChange={setTargetPrice}
          prefix="$"
          min="0"
        />
        <InputField
          label="Capital total"
          hint="Total de tu cuenta de trading."
          value={capitalTotal}
          onChange={setCapitalTotal}
          prefix="$"
          min="0"
        />
        <InputField
          label="Riesgo por operacion"
          hint="Porcentaje del capital que arriesgás (recomendado 1-2%)."
          value={riskPercent}
          onChange={setRiskPercent}
          suffix="%"
          min="0.1"
          max="100"
          step="0.1"
        />
      </div>

      {/* ── Results ── */}
      {calc && (
        <div className="flex flex-col gap-4">
          <hr className="border-slate-700" />

          {calc.rrRatio !== null && <RRBadge rr={calc.rrRatio} />}

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <ResultCard
              label="Riesgo por accion"
              value={fmtMoney(calc.riskPerShare)}
              hint="Diferencia entre entrada y stop loss."
              color="neutral"
            />
            {calc.rewardPerShare !== null && (
              <ResultCard
                label="Ganancia por accion"
                value={fmtMoney(calc.rewardPerShare)}
                hint="Diferencia entre objetivo y entrada."
                color="neutral"
              />
            )}
            {calc.rrRatio !== null && (
              <ResultCard
                label="Ratio riesgo/beneficio"
                value={`1:${fmt(calc.rrRatio, 2)}`}
                hint="Busca minimo 1:2 para operar."
                color={rrColor(calc.rrRatio)}
              />
            )}
            {calc.capitalToRisk !== null && (
              <ResultCard
                label="Capital en riesgo"
                value={fmtMoney(calc.capitalToRisk)}
                hint={`${riskPercent}% de tu cuenta.`}
                color="neutral"
              />
            )}
            {calc.shares !== null && (
              <ResultCard
                label="Acciones / contratos"
                value={calc.shares.toLocaleString('es-AR')}
                hint="Tamano optimo de la posicion."
                color="neutral"
              />
            )}
            {calc.totalRisk !== null && (
              <ResultCard
                label="Perdida maxima"
                value={fmtMoney(calc.totalRisk)}
                hint="Si el stop loss se activa."
                color="red"
              />
            )}
            {calc.totalReward !== null && (
              <ResultCard
                label="Ganancia potencial"
                value={fmtMoney(calc.totalReward)}
                hint="Si alcanza el objetivo."
                color="green"
              />
            )}
          </div>

          {/* Educational note */}
          <div className="bg-blue-900/30 border border-blue-700/40 rounded-lg p-3 text-xs text-blue-300 leading-relaxed">
            <span className="font-semibold">Como funciona: </span>
            El porcentaje de riesgo determina cuanto capital podes perder en esta operacion. Dividiendolo por el
            riesgo por accion obtenemos cuantas acciones operar. Asi el stop loss siempre protege tu cuenta.
            Nunca arriesgues mas de lo que estas dispuesto a perder.
          </div>
        </div>
      )}

      {!calc && (
        <div className="text-center py-6 text-slate-500 text-sm">
          Ingresa al menos el precio de entrada y el stop loss para ver los calculos.
        </div>
      )}
    </div>
  )
}
