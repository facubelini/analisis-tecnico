import { RSI, MACD, BollingerBands, SMA, EMA, Stochastic, ATR } from 'technicalindicators'

// Pad the start with nulls so output length matches input length
function pad(values, total) {
  const padding = Array(total - values.length).fill(null)
  return [...padding, ...values]
}

export function calcRSI(closes, period = 14) {
  try { return pad(RSI.calculate({ period, values: closes }), closes.length) }
  catch { return Array(closes.length).fill(null) }
}

export function calcMACD(closes, fast = 12, slow = 26, signal = 9) {
  try {
    return pad(
      MACD.calculate({ fastPeriod: fast, slowPeriod: slow, signalPeriod: signal, values: closes, SimpleMAOscillator: false, SimpleMASignal: false }),
      closes.length
    )
  } catch { return Array(closes.length).fill(null) }
}

export function calcBollinger(closes, period = 20, stdDev = 2) {
  try { return pad(BollingerBands.calculate({ period, stdDev, values: closes }), closes.length) }
  catch { return Array(closes.length).fill(null) }
}

export function calcSMA(closes, period = 20) {
  try { return pad(SMA.calculate({ period, values: closes }), closes.length) }
  catch { return Array(closes.length).fill(null) }
}

export function calcEMA(closes, period = 20) {
  try { return pad(EMA.calculate({ period, values: closes }), closes.length) }
  catch { return Array(closes.length).fill(null) }
}

export function calcStochastic(highs, lows, closes, period = 14, signal = 3) {
  try { return pad(Stochastic.calculate({ high: highs, low: lows, close: closes, period, signalPeriod: signal }), closes.length) }
  catch { return Array(closes.length).fill(null) }
}

export function calcATR(highs, lows, closes, period = 14) {
  try { return pad(ATR.calculate({ high: highs, low: lows, close: closes, period }), closes.length) }
  catch { return Array(closes.length).fill(null) }
}

// Return last non-null value from padded array
export function lastVal(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== null && arr[i] !== undefined) return arr[i]
  }
  return null
}

// Detect trend: 'alcista' | 'bajista' | 'lateral'
export function detectTrend(closes, sma50) {
  const lastClose = closes[closes.length - 1]
  const lastSma50 = lastVal(sma50)
  const change20 = closes.length >= 20
    ? (lastClose - closes[closes.length - 20]) / closes[closes.length - 20] * 100
    : 0

  if (change20 > 5 && lastClose > lastSma50) return 'alcista'
  if (change20 < -5 && lastClose < lastSma50) return 'bajista'
  return 'lateral'
}

// Detect support/resistance levels from recent swing highs/lows
export function detectLevels(data, lookback = 50) {
  const recent = data.slice(-lookback)
  const levels = []
  for (let i = 2; i < recent.length - 2; i++) {
    const isSwingHigh = recent[i].high > recent[i-1].high && recent[i].high > recent[i-2].high &&
                        recent[i].high > recent[i+1].high && recent[i].high > recent[i+2].high
    const isSwingLow  = recent[i].low  < recent[i-1].low  && recent[i].low  < recent[i-2].low  &&
                        recent[i].low  < recent[i+1].low  && recent[i].low  < recent[i+2].low
    if (isSwingHigh) levels.push({ value: recent[i].high, type: 'resistencia', time: recent[i].time })
    if (isSwingLow)  levels.push({ value: recent[i].low,  type: 'soporte',     time: recent[i].time })
  }
  return levels.slice(-10) // limit to 10 most recent
}

// Parse user-uploaded CSV into OHLCV array
export function parseCSV(text) {
  const lines = text.trim().split('\n')
  if (lines.length < 2) throw new Error('CSV vacío o con formato incorrecto')

  const header = lines[0].toLowerCase().split(',').map(h => h.trim().replace(/["\r]/g, ''))

  const idx = (candidates) => {
    for (const c of candidates) {
      const i = header.findIndex(h => h === c || h.includes(c))
      if (i !== -1) return i
    }
    return -1
  }

  const timeIdx   = idx(['date','fecha','time','timestamp'])
  const openIdx   = idx(['open','apertura'])
  const highIdx   = idx(['high','maximo','máximo','max'])
  const lowIdx    = idx(['low','minimo','mínimo','min'])
  const closeIdx  = idx(['close','cierre','adj close','adjusted close'])
  const volumeIdx = idx(['volume','volumen','vol'])

  if (timeIdx   === -1) throw new Error('Columna de fecha no encontrada (date, fecha, time)')
  if (openIdx   === -1) throw new Error('Columna de apertura no encontrada (open, apertura)')
  if (highIdx   === -1) throw new Error('Columna de máximo no encontrada (high, maximo)')
  if (lowIdx    === -1) throw new Error('Columna de mínimo no encontrada (low, minimo)')
  if (closeIdx  === -1) throw new Error('Columna de cierre no encontrada (close, cierre)')

  const data = []
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(c => c.trim().replace(/["\r]/g, ''))
    if (cols.length < 5) continue

    let time = cols[timeIdx]
    // Normalize MM/DD/YYYY or DD/MM/YYYY to YYYY-MM-DD
    if (/\d{1,2}\/\d{1,2}\/\d{4}/.test(time)) {
      const [a, b, y] = time.split('/')
      time = `${y}-${a.padStart(2,'0')}-${b.padStart(2,'0')}`
    }

    const open   = parseFloat(cols[openIdx])
    const high   = parseFloat(cols[highIdx])
    const low    = parseFloat(cols[lowIdx])
    const close  = parseFloat(cols[closeIdx])
    const volume = volumeIdx !== -1 ? (parseFloat(cols[volumeIdx]) || 0) : 0

    if (!time || [open,high,low,close].some(isNaN)) continue
    if (high < low || high < open || high < close || low > open || low > close) continue

    data.push({ time, open, high, low, close, volume })
  }

  if (data.length === 0) throw new Error('No se encontraron datos válidos en el CSV')
  return data.sort((a, b) => a.time.localeCompare(b.time))
}
