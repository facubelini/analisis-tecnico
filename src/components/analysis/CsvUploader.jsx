import { useState, useRef, useCallback } from 'react'
import { parseCSV } from '../../utils/indicators'

const EXAMPLE_ROWS = [
  { date: '2024-01-02', open: '148.50', high: '151.20', low: '147.80', close: '150.30', volume: '3240000' },
  { date: '2024-01-03', open: '150.30', high: '152.80', low: '149.60', close: '151.90', volume: '2980000' },
  { date: '2024-01-04', open: '151.90', high: '153.40', low: '150.70', close: '152.60', volume: '3110000' },
]

export default function CsvUploader({ onData, onError }) {
  const [isDragging, setIsDragging] = useState(false)
  const [status, setStatus] = useState(null) // null | { type: 'success' | 'error', message: string }
  const inputRef = useRef(null)

  const processFile = useCallback((file) => {
    if (!file) return
    if (!file.name.toLowerCase().endsWith('.csv')) {
      const msg = 'El archivo debe tener extensión .csv'
      setStatus({ type: 'error', message: msg })
      onError(msg)
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const parsed = parseCSV(e.target.result)
        setStatus({ type: 'success', message: `${parsed.length} filas cargadas correctamente.` })
        onData(parsed)
      } catch (err) {
        const msg = err.message || 'Error al parsear el CSV'
        setStatus({ type: 'error', message: msg })
        onError(msg)
      }
    }
    reader.onerror = () => {
      const msg = 'No se pudo leer el archivo'
      setStatus({ type: 'error', message: msg })
      onError(msg)
    }
    reader.readAsText(file)
  }, [onData, onError])

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    processFile(file)
  }

  const handleFileChange = (e) => {
    processFile(e.target.files[0])
    e.target.value = ''
  }

  return (
    <div className="space-y-4">
      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={[
          'border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200',
          'bg-slate-800/50 cursor-pointer select-none',
          isDragging
            ? 'border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.25)] animate-pulse'
            : 'border-slate-600 hover:border-slate-500',
        ].join(' ')}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".csv"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="flex flex-col items-center gap-3 text-slate-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-12 h-12 transition-colors duration-200 ${isDragging ? 'text-blue-400' : 'text-slate-500'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>

          {isDragging ? (
            <p className="text-blue-400 font-medium">Solta el archivo aqui</p>
          ) : (
            <>
              <p className="font-medium text-slate-300">
                Arrastra un archivo CSV aqui
              </p>
              <p className="text-sm text-slate-500">o hace clic para seleccionarlo</p>
            </>
          )}
        </div>
      </div>

      {/* Status message */}
      {status && (
        <div
          className={[
            'rounded-lg px-4 py-3 text-sm font-medium',
            status.type === 'success'
              ? 'bg-green-900/40 text-green-400 border border-green-700/50'
              : 'bg-red-900/40 text-red-400 border border-red-700/50',
          ].join(' ')}
        >
          {status.type === 'success' ? '+ ' : '! '}{status.message}
        </div>
      )}

      {/* Format guide */}
      <div className="mt-4">
        <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide font-semibold">
          Formato esperado del CSV
        </p>
        <div className="overflow-x-auto rounded-lg border border-slate-700/50">
          <table className="w-full text-xs text-slate-400">
            <thead>
              <tr className="bg-slate-700/40 text-slate-300">
                {['date', 'open', 'high', 'low', 'close', 'volume'].map((col) => (
                  <th key={col} className="px-3 py-2 text-left font-semibold tracking-wide">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {EXAMPLE_ROWS.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-800/10'}
                >
                  <td className="px-3 py-1.5 font-mono">{row.date}</td>
                  <td className="px-3 py-1.5 font-mono">{row.open}</td>
                  <td className="px-3 py-1.5 font-mono">{row.high}</td>
                  <td className="px-3 py-1.5 font-mono">{row.low}</td>
                  <td className="px-3 py-1.5 font-mono">{row.close}</td>
                  <td className="px-3 py-1.5 font-mono">{row.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-600 mt-2">
          Tambien se aceptan columnas en español (fecha, apertura, maximo, minimo, cierre, volumen) y fechas en formato MM/DD/AAAA.
        </p>
      </div>
    </div>
  )
}
