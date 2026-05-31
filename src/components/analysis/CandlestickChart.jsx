import { useEffect, useRef } from 'react'
import { createChart, ColorType, LineStyle } from 'lightweight-charts'
import { calcSMA, calcEMA, calcBollinger } from '../../utils/indicators'

const THEME = {
  layout: {
    background: { type: ColorType.Solid, color: '#0f172a' },
    textColor: '#94a3b8',
  },
  grid: {
    vertLines: { color: '#1e293b' },
    horzLines: { color: '#1e293b' },
  },
  crosshair: {
    vertLine: { color: '#475569', labelBackgroundColor: '#334155' },
    horzLine: { color: '#475569', labelBackgroundColor: '#334155' },
  },
  timeScale: { borderColor: '#334155', timeVisible: true, secondsVisible: false },
  rightPriceScale: { borderColor: '#334155' },
}

export default function CandlestickChart({ data, overlays = {} }) {
  const containerRef = useRef(null)
  const chartRef     = useRef(null)
  const seriesRef    = useRef({})

  const closes = data.map(d => d.close)

  // Build or rebuild chart when data changes
  useEffect(() => {
    if (!containerRef.current || !data.length) return

    const chart = createChart(containerRef.current, {
      ...THEME,
      width: containerRef.current.clientWidth,
      height: 420,
    })
    chartRef.current = chart

    // --- Candlestick series ---
    const candles = chart.addCandlestickSeries({
      upColor: '#22c55e', downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e', wickDownColor: '#ef4444',
    })
    candles.setData(data.map(({ time, open, high, low, close }) => ({ time, open, high, low, close })))
    seriesRef.current.candles = candles

    // --- Volume histogram on separate scale ---
    const volume = chart.addHistogramSeries({
      priceFormat: { type: 'volume' },
      priceScaleId: 'vol',
    })
    chart.priceScale('vol').applyOptions({ scaleMargins: { top: 0.82, bottom: 0 } })
    volume.setData(data.map(d => ({
      time: d.time,
      value: d.volume,
      color: d.close >= d.open ? '#22c55e33' : '#ef444433',
    })))
    seriesRef.current.volume = volume

    chart.timeScale().fitContent()

    const onResize = () => {
      if (containerRef.current) chart.applyOptions({ width: containerRef.current.clientWidth })
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      chart.remove()
      chartRef.current = null
      seriesRef.current = {}
    }
  }, [data]) // eslint-disable-line react-hooks/exhaustive-deps

  // Toggle overlay series without rebuilding the whole chart
  useEffect(() => {
    const chart = chartRef.current
    if (!chart || !data.length) return

    const toggle = (key, create) => {
      if (overlays[key]) {
        if (!seriesRef.current[key]) seriesRef.current[key] = create()
      } else if (seriesRef.current[key]) {
        chart.removeSeries(seriesRef.current[key])
        seriesRef.current[key] = null
      }
    }

    const lineData = (values) =>
      data.map((d, i) => values[i] !== null ? { time: d.time, value: values[i] } : null).filter(Boolean)

    toggle('sma20', () => {
      const s = chart.addLineSeries({ color: '#f59e0b', lineWidth: 1, title: 'SMA 20', priceLineVisible: false })
      s.setData(lineData(calcSMA(closes, 20)))
      return s
    })
    toggle('sma50', () => {
      const s = chart.addLineSeries({ color: '#8b5cf6', lineWidth: 1, title: 'SMA 50', priceLineVisible: false })
      s.setData(lineData(calcSMA(closes, 50)))
      return s
    })
    toggle('sma200', () => {
      const s = chart.addLineSeries({ color: '#ec4899', lineWidth: 1, title: 'SMA 200', priceLineVisible: false })
      s.setData(lineData(calcSMA(closes, 200)))
      return s
    })
    toggle('ema20', () => {
      const s = chart.addLineSeries({ color: '#06b6d4', lineWidth: 1, title: 'EMA 20', priceLineVisible: false, lineStyle: LineStyle.Dashed })
      s.setData(lineData(calcEMA(closes, 20)))
      return s
    })

    // Bollinger bands (3 series keyed as bbU, bbM, bbL)
    if (overlays.bollinger) {
      if (!seriesRef.current.bbU) {
        const bb = calcBollinger(closes, 20, 2)
        const opts = { priceLineVisible: false, lineWidth: 1, lineStyle: LineStyle.Dashed }
        const bbU = chart.addLineSeries({ ...opts, color: '#64748b', title: 'BB Sup' })
        const bbM = chart.addLineSeries({ ...opts, color: '#94a3b8', title: 'BB Med' })
        const bbL = chart.addLineSeries({ ...opts, color: '#64748b', title: 'BB Inf' })
        bbU.setData(data.map((d, i) => bb[i] ? { time: d.time, value: bb[i].upper  } : null).filter(Boolean))
        bbM.setData(data.map((d, i) => bb[i] ? { time: d.time, value: bb[i].middle } : null).filter(Boolean))
        bbL.setData(data.map((d, i) => bb[i] ? { time: d.time, value: bb[i].lower  } : null).filter(Boolean))
        seriesRef.current.bbU = bbU
        seriesRef.current.bbM = bbM
        seriesRef.current.bbL = bbL
      }
    } else if (seriesRef.current.bbU) {
      ['bbU','bbM','bbL'].forEach(k => { chart.removeSeries(seriesRef.current[k]); seriesRef.current[k] = null })
    }
  }, [overlays, data, closes])

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-700/50">
      <div ref={containerRef} className="w-full" />
    </div>
  )
}
