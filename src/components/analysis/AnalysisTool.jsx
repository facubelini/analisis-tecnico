import { useState, useMemo } from 'react'
import { SAMPLE_DATA, SAMPLE_TICKER, SAMPLE_NAME } from '../../data/sampleData'
import CandlestickChart from './CandlestickChart'
import IndicatorPanel from './IndicatorPanel'
import RiskCalculator from './RiskCalculator'
import AnalysisSummary from './AnalysisSummary'
import CsvUploader from './CsvUploader'
import {
  calcRSI, calcMACD, calcSMA, calcEMA, calcBollinger,
  calcStochastic, detectTrend, detectLevels, lastVal,
} from '../../utils/indicators'

const TABS = [
  { id: 'chart',      label: 'Grafico' },
  { id: 'indicadores', label: 'Indicadores' },
  { id: 'riesgo',     label: 'Gestion de Riesgo' },
  { id: 'resumen',    label: 'Resumen' },
]

const OVERLAYS_CONFIG = [
  { key: 'sma20',     label: 'SMA 20',           color: 'text-yellow-400' },
  { key: 'sma50',     label: 'SMA 50',           color: 'text-purple-400' },
  { key: 'sma200',    label: 'SMA 200',          color: 'text-pink-400' },
  { key: 'ema20',     label: 'EMA 20',           color: 'text-cyan-400' },
  { key: 'bollinger', label: 'Bandas Bollinger', color: 'text-slate-400' },
]

function OverlayToggle({ label, color, active, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={[
        'flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 border',
        active
          ? 'bg-slate-700 border-slate-500 ' + color
          : 'bg-slate-800/50 border-slate-700/50 text-slate-500 hover:border-slate-600 hover:text-slate-400',
      ].join(' ')}
    >
      <span
        className={[
          'w-2 h-2 rounded-full flex-shrink-0 transition-colors',
          active ? color.replace('text-', 'bg-') : 'bg-slate-600',
        ].join(' ')}
      />
      {label}
    </button>
  )
}

export default function AnalysisTool() {
  const [data, setData]           = useState(SAMPLE_DATA)
  const [ticker, setTicker]       = useState(SAMPLE_TICKER)
  const [stockName, setStockName] = useState(SAMPLE_NAME)
  const [activeTab, setActiveTab] = useState('chart')
  const [overlays, setOverlays]   = useState({
    sma20: false, sma50: false, sma200: false, ema20: false, bollinger: false,
  })
  const [showUploader, setShowUploader] = useState(false)
  const [apiKey, setApiKey]             = useState(() => localStorage.getItem('at_apiKey') || '')
  const [error, setError]               = useState(null)

  // Derived quick stats for header
  const lastClose = data.length ? data[data.length - 1].close : 0
  const prevClose = data.length > 1 ? data[data.length - 2].close : lastClose
  const pctChange = prevClose !== 0 ? ((lastClose - prevClose) / prevClose) * 100 : 0

  const handleLoadSample = () => {
    setData(SAMPLE_DATA)
    setTicker(SAMPLE_TICKER)
    setStockName(SAMPLE_NAME)
    setError(null)
    setShowUploader(false)
  }

  const handleCsvData = (parsed) => {
    setData(parsed)
    setError(null)
  }

  const handleCsvError = (msg) => {
    setError(msg)
  }

  const handleApiKeySave = (value) => {
    setApiKey(value)
    localStorage.setItem('at_apiKey', value)
  }

  const toggleOverlay = (key) => {
    setOverlays((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="space-y-6">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl font-bold text-slate-100">{stockName}</h2>
            <span className="text-sm font-mono bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
              {ticker}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xl font-semibold text-slate-200">
              ${lastClose.toFixed(2)}
            </span>
            <span
              className={[
                'text-sm font-medium',
                pctChange >= 0 ? 'text-green-400' : 'text-red-400',
              ].join(' ')}
            >
              {pctChange >= 0 ? '+' : ''}{pctChange.toFixed(2)}%
            </span>
            <span className="text-xs text-slate-500">
              {data.length} velas — {data[0]?.time} a {data[data.length - 1]?.time}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleLoadSample}
            className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition-colors"
          >
            Usar datos de ejemplo
          </button>
          <button
            onClick={() => setShowUploader((v) => !v)}
            className={[
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
              showUploader
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-slate-600',
            ].join(' ')}
          >
            {showUploader ? 'Ocultar carga CSV' : 'Cargar CSV'}
          </button>
        </div>
      </div>

      {/* ── Error global ───────────────────────────────────────────── */}
      {error && (
        <div className="rounded-lg px-4 py-3 bg-red-900/40 border border-red-700/50 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* ── CSV uploader (colapsable) ───────────────────────────────── */}
      {showUploader && (
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 space-y-4">
          <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wide">
            Cargar datos desde CSV
          </h3>
          <CsvUploader onData={handleCsvData} onError={handleCsvError} />

          {/* API key field */}
          <div className="pt-2 border-t border-slate-700/40">
            <label className="block text-xs text-slate-500 uppercase tracking-wide mb-1.5">
              API Key (opcional — para futuras integraciones)
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Ingresa tu API key..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={() => handleApiKeySave(apiKey)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Overlay toggles ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold mr-1">
          Overlays:
        </span>
        {OVERLAYS_CONFIG.map(({ key, label, color }) => (
          <OverlayToggle
            key={key}
            label={label}
            color={color}
            active={overlays[key]}
            onToggle={() => toggleOverlay(key)}
          />
        ))}
      </div>

      {/* ── Tabs ────────────────────────────────────────────────────── */}
      <div>
        <div className="flex border-b border-slate-700/50 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                'px-5 py-2.5 text-sm font-medium transition-colors relative',
                activeTab === tab.id
                  ? 'text-blue-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-500'
                  : 'text-slate-500 hover:text-slate-300',
              ].join(' ')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab: Grafico */}
        {activeTab === 'chart' && (
          <CandlestickChart data={data} overlays={overlays} />
        )}

        {/* Tab: Indicadores */}
        {activeTab === 'indicadores' && (
          <IndicatorPanel data={data} />
        )}

        {/* Tab: Gestion de Riesgo */}
        {activeTab === 'riesgo' && (
          <RiskCalculator />
        )}

        {/* Tab: Resumen */}
        {activeTab === 'resumen' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Imprimir
              </button>
            </div>
            <AnalysisSummary data={data} ticker={ticker} />
          </div>
        )}
      </div>
    </div>
  )
}
