export const TOTAL_MODULES = 12

export const MODULES = [
  {
    id: 1,
    title: '¿Qué es el análisis técnico?',
    description: 'Fundamentos del análisis técnico, sus premisas y diferencias con el análisis fundamental.',
    icon: '📊',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        El <strong class="text-blue-400">análisis técnico</strong> es el estudio del comportamiento pasado del precio y el volumen de un activo financiero con el objetivo de anticipar movimientos futuros. A diferencia de otros enfoques, no busca determinar si una empresa está barata o cara en función de sus ganancias o activos, sino que se enfoca exclusivamente en lo que muestra el gráfico.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Análisis Técnico vs. Análisis Fundamental</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-slate-300">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="text-left py-2 pr-4 text-slate-400">Criterio</th>
                <th class="text-left py-2 pr-4 text-blue-400">Técnico</th>
                <th class="text-left py-2 text-indigo-400">Fundamental</th>
              </tr>
            </thead>
            <tbody class="space-y-1">
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-slate-400">¿Qué estudia?</td>
                <td class="py-2 pr-4">Precio y volumen</td>
                <td class="py-2">Estados financieros</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-slate-400">Horizonte</td>
                <td class="py-2 pr-4">Corto/mediano plazo</td>
                <td class="py-2">Largo plazo</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-slate-400">Herramienta</td>
                <td class="py-2 pr-4">Gráficos</td>
                <td class="py-2">Balances, ratios</td>
              </tr>
              <tr>
                <td class="py-2 pr-4 text-slate-400">Pregunta clave</td>
                <td class="py-2 pr-4">¿Hacia dónde va el precio?</td>
                <td class="py-2">¿Cuánto vale la empresa?</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Las tres premisas del análisis técnico</h3>
        <div class="space-y-4">
          <div class="flex gap-3">
            <span class="text-2xl">1️⃣</span>
            <div>
              <p class="text-slate-200 font-semibold">El precio descuenta todo</p>
              <p class="text-slate-400 text-sm mt-1">El precio de mercado ya refleja toda la información disponible: noticias, expectativas, sentimiento y fundamentos. No hace falta analizar nada más que el gráfico.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="text-2xl">2️⃣</span>
            <div>
              <p class="text-slate-200 font-semibold">Los precios se mueven en tendencias</p>
              <p class="text-slate-400 text-sm mt-1">Una vez que un activo establece una tendencia, tiene más probabilidad de continuar en esa dirección que de revertirla abruptamente. El trabajo del analista es identificar y sumarse a la tendencia.</p>
            </div>
          </div>
          <div class="flex gap-3">
            <span class="text-2xl">3️⃣</span>
            <div>
              <p class="text-slate-200 font-semibold">La historia se repite</p>
              <p class="text-slate-400 text-sm mt-1">Los patrones gráficos se repiten porque la psicología humana (miedo, codicia, esperanza) no cambia. Las mismas situaciones tienden a generar reacciones similares en los participantes del mercado.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Advertencia importante</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>El análisis técnico no predice el futuro con certeza, trabaja con probabilidades.</li>
          <li>Ningún indicador funciona el 100% del tiempo en todos los mercados.</li>
          <li>Debe combinarse con una gestión estricta del riesgo para ser útil.</li>
          <li>Los mercados pueden ser irracionales más tiempo del que uno puede resistir.</li>
        </ul>
      </div>
      <p class="text-slate-300 leading-relaxed">
        A pesar de sus limitaciones, el análisis técnico es ampliamente utilizado por traders y gestores de fondos de todo el mundo. Su valor reside no en predecir el futuro, sino en proveer un <strong class="text-slate-100">marco objetivo</strong> para tomar decisiones de entrada, salida y gestión de riesgo.
      </p>
    </div>`,
    quiz: [
      {
        question: '¿Cuál es la primera premisa del análisis técnico?',
        options: [
          'Los precios se mueven al azar',
          'El precio descuenta toda la información disponible',
          'Los fundamentos son más importantes que el precio',
          'El volumen predice el precio'
        ],
        correctIndex: 1,
        explanation: 'La primera premisa establece que el precio ya refleja toda la información disponible en el mercado, incluyendo noticias, expectativas y fundamentos.'
      },
      {
        question: '¿En qué se diferencia principalmente el análisis técnico del fundamental?',
        options: [
          'El técnico estudia estados financieros; el fundamental estudia gráficos',
          'El técnico es más confiable que el fundamental',
          'El técnico estudia precio y volumen; el fundamental estudia estados financieros',
          'No hay diferencias significativas entre ambos'
        ],
        correctIndex: 2,
        explanation: 'El análisis técnico se enfoca en precio y volumen a través de gráficos, mientras que el fundamental analiza balances, ratios y métricas financieras de la empresa.'
      },
      {
        question: '¿Por qué se dice que "la historia se repite" en análisis técnico?',
        options: [
          'Porque los algoritmos programan los mismos movimientos',
          'Porque la psicología humana (miedo y codicia) no cambia',
          'Porque los precios siguen ciclos matemáticos exactos',
          'Porque las empresas repiten sus resultados financieros'
        ],
        correctIndex: 1,
        explanation: 'Los patrones gráficos se repiten porque la psicología humana permanece constante. El miedo y la codicia generan reacciones similares ante situaciones parecidas.'
      }
    ]
  },
  {
    id: 2,
    title: 'Cómo leer un gráfico de precios',
    description: 'Tipos de gráficos, lectura de velas OHLC y selección de timeframes.',
    icon: '📈',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        Un gráfico de precios es la herramienta principal del analista técnico. Representa visualmente la evolución del precio de un activo a lo largo del tiempo. Saber leerlo correctamente es el primer paso para aplicar cualquier técnica de análisis.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Tipos de gráficos</h3>
        <div class="space-y-4">
          <div class="border-l-2 border-blue-500 pl-4">
            <p class="text-slate-200 font-semibold">Gráfico de línea</p>
            <p class="text-slate-400 text-sm mt-1">Conecta únicamente los precios de cierre de cada período. Es el más simple pero pierde información sobre la volatilidad intraperiodo. Útil para ver tendencias generales de largo plazo.</p>
          </div>
          <div class="border-l-2 border-indigo-500 pl-4">
            <p class="text-slate-200 font-semibold">Gráfico de barras (OHLC)</p>
            <p class="text-slate-400 text-sm mt-1">Muestra la apertura, máximo, mínimo y cierre de cada período. Una línea vertical indica el rango entre máximo y mínimo; un trazo horizontal a la izquierda indica la apertura y a la derecha el cierre.</p>
          </div>
          <div class="border-l-2 border-green-500 pl-4">
            <p class="text-slate-200 font-semibold">Gráfico de velas japonesas (Candlestick)</p>
            <p class="text-slate-400 text-sm mt-1">El más popular entre traders. Combina toda la información OHLC en una representación visual muy intuitiva. El cuerpo de la vela muestra apertura y cierre; las mechas (sombras) muestran máximo y mínimo.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Anatomía de un dato OHLC</h3>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="bg-slate-700/50 rounded-lg p-3">
            <span class="text-blue-400 font-bold">O — Open (Apertura)</span>
            <p class="text-slate-400 mt-1">Precio al que abrió el período. Primer precio negociado.</p>
          </div>
          <div class="bg-slate-700/50 rounded-lg p-3">
            <span class="text-green-400 font-bold">H — High (Máximo)</span>
            <p class="text-slate-400 mt-1">El precio más alto alcanzado durante el período.</p>
          </div>
          <div class="bg-slate-700/50 rounded-lg p-3">
            <span class="text-red-400 font-bold">L — Low (Mínimo)</span>
            <p class="text-slate-400 mt-1">El precio más bajo alcanzado durante el período.</p>
          </div>
          <div class="bg-slate-700/50 rounded-lg p-3">
            <span class="text-yellow-400 font-bold">C — Close (Cierre)</span>
            <p class="text-slate-400 mt-1">Precio de cierre. El más importante para la mayoría de indicadores.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Timeframes: ¿cuál usar?</h3>
        <p class="text-slate-400 text-sm mb-3">El timeframe define qué período representa cada vela o barra del gráfico. La elección depende de tu estilo de trading:</p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-slate-300">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="text-left py-2 pr-4 text-slate-400">Timeframe</th>
                <th class="text-left py-2 pr-4 text-slate-400">Perfil</th>
                <th class="text-left py-2 text-slate-400">Duración del trade</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-blue-300">1min – 15min</td>
                <td class="py-2 pr-4">Scalper</td>
                <td class="py-2">Segundos a horas</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-blue-300">1H – 4H</td>
                <td class="py-2 pr-4">Day trader</td>
                <td class="py-2">Horas a días</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-blue-300">Diario (1D)</td>
                <td class="py-2 pr-4">Swing trader</td>
                <td class="py-2">Días a semanas</td>
              </tr>
              <tr>
                <td class="py-2 pr-4 text-blue-300">Semanal / Mensual</td>
                <td class="py-2 pr-4">Posicionista</td>
                <td class="py-2">Semanas a meses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4">
        <h4 class="text-blue-400 font-semibold mb-2">Consejo: análisis multi-timeframe</h4>
        <p class="text-slate-300 text-sm">Los traders profesionales suelen usar múltiples timeframes: uno mayor para identificar la tendencia principal y uno menor para afinar la entrada. Por ejemplo, el diario para la tendencia y el 4H para buscar el punto de entrada.</p>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Qué información contiene un dato OHLC?',
        options: [
          'Solo el precio de apertura y cierre',
          'Apertura, máximo, mínimo y cierre',
          'Precio promedio y volumen',
          'Solo el precio máximo y mínimo'
        ],
        correctIndex: 1,
        explanation: 'OHLC son las siglas de Open (apertura), High (máximo), Low (mínimo) y Close (cierre). Estos cuatro valores describen completamente el movimiento del precio en un período.'
      },
      {
        question: 'Un trader que mantiene posiciones durante días o semanas debería priorizar qué timeframe para su análisis principal?',
        options: [
          'Gráfico de 1 minuto',
          'Gráfico de 15 minutos',
          'Gráfico diario',
          'Gráfico de 1 hora'
        ],
        correctIndex: 2,
        explanation: 'El swing trader, que opera en un horizonte de días a semanas, usa el gráfico diario como referencia principal para identificar la tendencia y los niveles clave.'
      },
      {
        question: '¿Cuál es la ventaja principal del gráfico de velas japonesas sobre el gráfico de línea?',
        options: [
          'Es más fácil de leer para principiantes',
          'Muestra solo el precio de cierre, que es el más importante',
          'Muestra apertura, máximo, mínimo y cierre de forma visual e intuitiva',
          'No tiene ninguna ventaja, ambos son equivalentes'
        ],
        correctIndex: 2,
        explanation: 'Las velas japonesas muestran toda la información OHLC en un formato visual que permite identificar rápidamente la presión compradora o vendedora y la volatilidad del período.'
      }
    ]
  },
  {
    id: 3,
    title: 'Velas japonesas',
    description: 'Anatomía de las velas y patrones de reversión más importantes.',
    icon: '🕯️',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        Las velas japonesas fueron desarrolladas en Japón en el siglo XVIII por el comerciante de arroz Munehisa Homma. Son hoy el método de representación gráfica más usado en el mundo. Su poder radica en que muestran visualmente la batalla entre compradores y vendedores en cada período de tiempo.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Anatomía de una vela</h3>
        <div class="space-y-3">
          <div class="flex gap-3 items-start">
            <div class="w-5 h-5 bg-green-500 rounded mt-0.5 shrink-0"></div>
            <div>
              <p class="text-slate-200 font-semibold">Vela alcista (verde/blanca)</p>
              <p class="text-slate-400 text-sm">El cierre es mayor que la apertura. Los compradores ganaron la batalla en ese período. El cuerpo va de apertura (abajo) a cierre (arriba).</p>
            </div>
          </div>
          <div class="flex gap-3 items-start">
            <div class="w-5 h-5 bg-red-500 rounded mt-0.5 shrink-0"></div>
            <div>
              <p class="text-slate-200 font-semibold">Vela bajista (roja/negra)</p>
              <p class="text-slate-400 text-sm">El cierre es menor que la apertura. Los vendedores controlaron el período. El cuerpo va de apertura (arriba) a cierre (abajo).</p>
            </div>
          </div>
          <div class="border-t border-slate-700 pt-3">
            <p class="text-slate-200 font-semibold">Mechas (sombras)</p>
            <p class="text-slate-400 text-sm mt-1">Las líneas que sobresalen del cuerpo. La mecha superior indica el máximo alcanzado; la mecha inferior indica el mínimo. Una mecha larga significa que el precio llegó a ese nivel pero fue rechazado.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Patrones de una sola vela</h3>
        <div class="space-y-4">
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-yellow-400 font-semibold">Doji</p>
            <p class="text-slate-300 text-sm mt-1">Apertura y cierre iguales o casi iguales. Cuerpo muy pequeño con mechas variables. Indica indecisión del mercado. Adquiere significado según el contexto: en tendencia alcista sugiere posible reversión.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Martillo (Hammer)</p>
            <p class="text-slate-300 text-sm mt-1">Mecha inferior larga (al menos 2x el cuerpo), cuerpo pequeño en la parte superior, poca o ninguna mecha superior. Aparece en tendencias bajistas y señala posible reversión alcista.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Estrella fugaz (Shooting Star)</p>
            <p class="text-slate-300 text-sm mt-1">Mecha superior larga, cuerpo pequeño en la parte inferior, poca o ninguna mecha inferior. Aparece en tendencias alcistas y señala posible reversión bajista.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Patrones de dos y tres velas</h3>
        <div class="space-y-4">
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Envolvente alcista (Bullish Engulfing)</p>
            <p class="text-slate-300 text-sm mt-1">Una vela roja seguida de una vela verde más grande que "envuelve" completamente la anterior. Señal fuerte de reversión alcista, especialmente en soportes.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Envolvente bajista (Bearish Engulfing)</p>
            <p class="text-slate-300 text-sm mt-1">Una vela verde seguida de una vela roja más grande que envuelve completamente la anterior. Señal fuerte de reversión bajista, especialmente en resistencias.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Estrella de la mañana (Morning Star)</p>
            <p class="text-slate-300 text-sm mt-1">Patrón de tres velas: una vela bajista grande, una vela pequeña (doji o casi) con gap, y una vela alcista grande. Señal de reversión alcista potente.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Estrella de la noche (Evening Star)</p>
            <p class="text-slate-300 text-sm mt-1">Inverso de la mañana: vela alcista grande, vela pequeña con gap, vela bajista grande. Señal de reversión bajista potente, especialmente en resistencias o máximos históricos.</p>
          </div>
        </div>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Contexto es clave</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Un patrón de velas es más confiable cuando aparece en un nivel de soporte o resistencia relevante.</li>
          <li>Siempre confirmar con la siguiente vela antes de actuar.</li>
          <li>El volumen eleva la confiabilidad del patrón.</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Qué indica una vela con cuerpo verde (alcista)?',
        options: [
          'El precio máximo fue mayor que el mínimo',
          'El precio de cierre fue mayor que el de apertura',
          'El volumen fue elevado durante el período',
          'El precio abrió en gap respecto al cierre anterior'
        ],
        correctIndex: 1,
        explanation: 'Una vela verde o alcista indica que el precio cerró por encima de donde abrió, lo que significa que los compradores dominaron durante ese período.'
      },
      {
        question: '¿Qué patrón de una sola vela indica indecisión del mercado?',
        options: [
          'Martillo',
          'Estrella fugaz',
          'Doji',
          'Marubozu'
        ],
        correctIndex: 2,
        explanation: 'El Doji tiene apertura y cierre casi iguales (cuerpo mínimo), lo que refleja un equilibrio entre compradores y vendedores e indica indecisión en el mercado.'
      },
      {
        question: '¿En qué contexto un martillo (Hammer) es una señal de reversión alcista?',
        options: [
          'Después de una tendencia alcista prolongada',
          'Después de una tendencia bajista prolongada',
          'En cualquier momento, sin importar la tendencia previa',
          'Solo cuando aparece cerca de una resistencia'
        ],
        correctIndex: 1,
        explanation: 'El martillo es significativo cuando aparece después de una tendencia bajista. Su mecha inferior larga indica que los vendedores empujaron el precio hacia abajo pero los compradores recuperaron el control.'
      },
      {
        question: '¿Cuántas velas compone el patrón "Estrella de la mañana"?',
        options: [
          'Una vela',
          'Dos velas',
          'Tres velas',
          'Cuatro velas'
        ],
        correctIndex: 2,
        explanation: 'La Estrella de la mañana es un patrón de tres velas: una grande bajista, una pequeña de transición (doji o similar) y una grande alcista. Es una señal potente de reversión al alza.'
      }
    ]
  },
  {
    id: 4,
    title: 'Tendencias, soportes y resistencias',
    description: 'Identificación de tendencias, canales y niveles clave de precio.',
    icon: '📉',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        La tendencia es la dirección predominante del precio a lo largo del tiempo. Identificarla correctamente es quizás la habilidad más valiosa del analista técnico, ya que operar a favor de la tendencia aumenta significativamente las probabilidades de éxito.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Tipos de tendencia</h3>
        <div class="space-y-3">
          <div class="flex gap-3 items-start">
            <span class="text-green-400 text-xl">↗️</span>
            <div>
              <p class="text-green-400 font-semibold">Tendencia alcista (Uptrend)</p>
              <p class="text-slate-400 text-sm mt-1">Serie de <strong class="text-slate-300">máximos crecientes (HH)</strong> y <strong class="text-slate-300">mínimos crecientes (HL)</strong>. Cada rebote lleva el precio más arriba que el anterior y cada corrección se detiene más arriba que la corrección previa.</p>
            </div>
          </div>
          <div class="flex gap-3 items-start">
            <span class="text-red-400 text-xl">↘️</span>
            <div>
              <p class="text-red-400 font-semibold">Tendencia bajista (Downtrend)</p>
              <p class="text-slate-400 text-sm mt-1">Serie de <strong class="text-slate-300">máximos decrecientes (LH)</strong> y <strong class="text-slate-300">mínimos decrecientes (LL)</strong>. Cada intento de recuperación falla más abajo y cada caída rompe el mínimo anterior.</p>
            </div>
          </div>
          <div class="flex gap-3 items-start">
            <span class="text-yellow-400 text-xl">↔️</span>
            <div>
              <p class="text-yellow-400 font-semibold">Tendencia lateral (Ranging/Consolidación)</p>
              <p class="text-slate-400 text-sm mt-1">El precio oscila entre un rango definido sin hacer nuevos máximos ni mínimos significativos. Típicamente precede a un movimiento importante. Los trades dentro del rango son de bajo riesgo pero bajo potencial.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Líneas de tendencia y canales</h3>
        <p class="text-slate-300 text-sm mb-3">Una línea de tendencia se traza conectando al menos dos mínimos relevantes (en tendencia alcista) o dos máximos relevantes (en tendencia bajista). Cuantos más puntos toque, más válida es la línea.</p>
        <div class="grid grid-cols-1 gap-3 text-sm">
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-blue-300 font-semibold">Canal alcista</p>
            <p class="text-slate-400 mt-1">Se forma trazando una línea paralela a la línea de tendencia alcista, pasando por los máximos. El precio rebota entre ambas líneas. La zona inferior es compra; la superior es toma de ganancias.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-red-300 font-semibold">Canal bajista</p>
            <p class="text-slate-400 mt-1">Paralelo a la línea de tendencia bajista pasando por los mínimos. La zona superior es venta; la inferior es cobertura de cortos.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Soporte y resistencia</h3>
        <p class="text-slate-300 text-sm mb-3">Son niveles de precio donde la oferta o demanda han sido lo suficientemente fuertes como para detener o revertir el movimiento del precio en el pasado.</p>
        <div class="space-y-3">
          <div class="bg-green-900/30 border border-green-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Soporte</p>
            <p class="text-slate-300 text-sm mt-1">Nivel donde el precio tiende a encontrar demanda (compradores) al bajar. Históricamente ha detenido o revertido caídas. Si se rompe, suele convertirse en resistencia.</p>
          </div>
          <div class="bg-red-900/30 border border-red-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Resistencia</p>
            <p class="text-slate-300 text-sm mt-1">Nivel donde el precio tiende a encontrar oferta (vendedores) al subir. Históricamente ha detenido o revertido subidas. Si se rompe (breakout), suele convertirse en soporte.</p>
          </div>
        </div>
      </div>
      <div class="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4">
        <h4 class="text-blue-400 font-semibold mb-2">Inversión de roles (Role Reversal)</h4>
        <p class="text-slate-300 text-sm">Un concepto fundamental: cuando un soporte se rompe decisivamente, se convierte en resistencia. Cuando una resistencia se rompe, se convierte en soporte. Este fenómeno permite anticipar futuros niveles de reacción del precio.</p>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Cómo se define una tendencia alcista en términos de estructura de precio?',
        options: [
          'El precio sube sin ninguna corrección',
          'Serie de máximos crecientes y mínimos crecientes',
          'El precio siempre cierra por encima de la media móvil de 200 períodos',
          'El volumen es consistentemente alto'
        ],
        correctIndex: 1,
        explanation: 'Una tendencia alcista se define por una sucesión de máximos crecientes (HH: Higher Highs) y mínimos crecientes (HL: Higher Lows). Cada ola de subida llega más alto y cada corrección se detiene más arriba.'
      },
      {
        question: '¿Qué ocurre típicamente cuando un nivel de resistencia es roto decisivamente?',
        options: [
          'El precio cae inmediatamente de vuelta al nivel anterior',
          'La resistencia rota se convierte en un nuevo soporte',
          'El nivel pierde toda relevancia futura',
          'El volumen siempre disminuye tras el rompimiento'
        ],
        correctIndex: 1,
        explanation: 'El fenómeno de inversión de roles establece que cuando una resistencia es superada con decisión, ese nivel tiende a convertirse en soporte en futuras correcciones del precio.'
      },
      {
        question: '¿Cuántos puntos de contacto mínimos se necesitan para validar una línea de tendencia?',
        options: [
          'Uno',
          'Dos',
          'Cinco',
          'Diez'
        ],
        correctIndex: 1,
        explanation: 'Se necesitan al menos dos puntos de contacto para trazar una línea de tendencia válida. Cuantos más puntos toque la línea sin romperse, mayor es su relevancia.'
      }
    ]
  },
  {
    id: 5,
    title: 'Volumen',
    description: 'El volumen como confirmador de movimientos y tendencias.',
    icon: '📦',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        El volumen mide la cantidad total de contratos, acciones o unidades intercambiadas durante un período determinado. Es considerado el indicador más honesto del mercado porque no puede ser manipulado fácilmente: refleja el compromiso real de los participantes detrás de cada movimiento de precio.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Principios básicos del volumen</h3>
        <div class="space-y-3 text-sm">
          <div class="flex items-start gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-green-400 text-lg mt-0.5">✓</span>
            <div>
              <p class="text-slate-200 font-semibold">Volumen alto confirma el movimiento</p>
              <p class="text-slate-400 mt-1">Cuando el precio sube con volumen alto, indica que muchos participantes respaldan ese movimiento. Lo mismo aplica en caídas: un descenso con volumen alto confirma la presión vendedora real.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-red-400 text-lg mt-0.5">✗</span>
            <div>
              <p class="text-slate-200 font-semibold">Volumen bajo cuestiona el movimiento</p>
              <p class="text-slate-400 mt-1">Si el precio sube pero el volumen es bajo, la subida puede no ser sostenible. Implica falta de convicción. Es una señal de alerta especialmente en rompimientos de niveles importantes.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Volumen en diferentes escenarios</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="text-left py-2 pr-3 text-slate-400">Precio</th>
                <th class="text-left py-2 pr-3 text-slate-400">Volumen</th>
                <th class="text-left py-2 text-slate-400">Interpretación</th>
              </tr>
            </thead>
            <tbody class="text-slate-300">
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-3 text-green-400">↑ Sube</td>
                <td class="py-2 pr-3 text-green-400">Alto</td>
                <td class="py-2">Tendencia alcista sana, continuación probable</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-3 text-green-400">↑ Sube</td>
                <td class="py-2 pr-3 text-red-400">Bajo</td>
                <td class="py-2">Movimiento débil, posible trampa alcista</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-3 text-red-400">↓ Baja</td>
                <td class="py-2 pr-3 text-green-400">Alto</td>
                <td class="py-2">Distribución/pánico, tendencia bajista fuerte</td>
              </tr>
              <tr>
                <td class="py-2 pr-3 text-red-400">↓ Baja</td>
                <td class="py-2 pr-3 text-red-400">Bajo</td>
                <td class="py-2">Corrección sin convicción, puede revertir pronto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Volumen en rompimientos (Breakouts)</h3>
        <p class="text-slate-300 text-sm mb-3">Los rompimientos de soportes, resistencias o patrones gráficos deben ir acompañados de volumen significativamente mayor al promedio para considerarse válidos.</p>
        <div class="grid grid-cols-1 gap-3 text-sm">
          <div class="bg-green-900/30 border border-green-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Breakout verdadero</p>
            <p class="text-slate-300 mt-1">Ruptura de resistencia con volumen 1.5x o más sobre el promedio. Los compradores están comprometidos y el movimiento tiene fundamento real.</p>
          </div>
          <div class="bg-red-900/30 border border-red-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Falso rompimiento (Fakeout)</p>
            <p class="text-slate-300 mt-1">El precio supera el nivel pero el volumen es bajo. Alta probabilidad de que el precio regrese al rango anterior. Una trampa para traders impulsivos.</p>
          </div>
        </div>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Valores de referencia</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Un rompimiento se considera de alta calidad con volumen mayor al 150% del promedio de 20 días.</li>
          <li>Días de reversión a menudo muestran el mayor volumen de toda la tendencia (climax de volumen).</li>
          <li>Períodos de baja volatilidad con volumen descendente suelen preceder movimientos importantes.</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Qué sugiere un precio en subida acompañado de volumen bajo?',
        options: [
          'Una tendencia alcista muy sana y confiable',
          'Un movimiento débil sin convicción real, posible trampa',
          'El mercado está en equilibrio perfecto',
          'Una inminente ruptura de resistencia'
        ],
        correctIndex: 1,
        explanation: 'Precio subiendo con volumen bajo indica falta de convicción detrás del movimiento. Sin participación real del mercado, la subida puede no sostenerse y ser una trampa alcista.'
      },
      {
        question: '¿Qué característica diferencia un rompimiento verdadero de uno falso?',
        options: [
          'La velocidad del movimiento de precio',
          'El volumen significativamente mayor al promedio en el rompimiento real',
          'Que el precio rompa por más del 5%',
          'Que ocurra en el horario de apertura del mercado'
        ],
        correctIndex: 1,
        explanation: 'Un breakout verdadero se confirma con volumen notablemente superior al promedio (generalmente 1.5x o más). Esto demuestra que hay participación real y compromiso de los traders.'
      },
      {
        question: '¿Qué significa un "climax de volumen"?',
        options: [
          'El volumen más bajo registrado en la tendencia',
          'El punto donde el volumen es igual al precio',
          'Una jornada con el volumen más alto de toda la tendencia, que suele señalar un agotamiento',
          'Cuando el volumen se mantiene constante durante varios días'
        ],
        correctIndex: 2,
        explanation: 'Un climax de volumen es una jornada de volumen extremadamente alto que suele señalar el agotamiento del movimiento. Es común en puntos de reversión importantes de tendencia.'
      }
    ]
  },
  {
    id: 6,
    title: 'Medias móviles',
    description: 'SMA vs EMA, usos prácticos y las señales del Golden Cross y Death Cross.',
    icon: '〰️',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        Las medias móviles son uno de los indicadores técnicos más usados y versátiles. Su función principal es <strong class="text-blue-400">suavizar el ruido</strong> del precio y revelar la dirección de la tendencia. También actúan como niveles dinámicos de soporte y resistencia.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">SMA vs. EMA</h3>
        <div class="space-y-4">
          <div>
            <p class="text-slate-200 font-semibold">SMA — Media Móvil Simple</p>
            <p class="text-slate-400 text-sm mt-1">Calcula el promedio aritmético de los últimos N cierres. Todos los precios tienen el mismo peso. Es más lenta y estable, ideal para identificar tendencias de largo plazo.</p>
            <div class="bg-slate-700/40 rounded p-2 mt-2 font-mono text-xs text-blue-300">
              SMA(20) = (C1 + C2 + ... + C20) / 20
            </div>
          </div>
          <div>
            <p class="text-slate-200 font-semibold">EMA — Media Móvil Exponencial</p>
            <p class="text-slate-400 text-sm mt-1">Da más peso a los precios recientes usando un factor de ponderación. Reacciona más rápido a los cambios de precio. Preferida para trading de corto y mediano plazo.</p>
            <div class="bg-slate-700/40 rounded p-2 mt-2 text-xs text-blue-300">
              <span>EMA hoy = (Cierre × k) + (EMA ayer × (1 - k))</span>
              <span class="block text-slate-500 mt-1">donde k = 2 / (N + 1)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Períodos más usados</h3>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="bg-slate-700/40 rounded-lg p-3 text-center">
            <span class="text-blue-400 font-bold text-lg">20</span>
            <p class="text-slate-400 mt-1">Tendencia de corto plazo. ~1 mes de trading.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3 text-center">
            <span class="text-blue-400 font-bold text-lg">50</span>
            <p class="text-slate-400 mt-1">Tendencia intermedia. ~2.5 meses. Muy seguida.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3 text-center">
            <span class="text-blue-400 font-bold text-lg">100</span>
            <p class="text-slate-400 mt-1">Tendencia de mediano plazo. ~5 meses.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3 text-center">
            <span class="text-blue-400 font-bold text-lg">200</span>
            <p class="text-slate-400 mt-1">Tendencia de largo plazo. Referencia institucional.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Golden Cross y Death Cross</h3>
        <div class="space-y-4">
          <div class="bg-green-900/30 border border-green-700/40 rounded-xl p-4">
            <p class="text-green-400 font-semibold text-base">Golden Cross (Cruz Dorada)</p>
            <p class="text-slate-300 text-sm mt-2">La SMA de 50 períodos <strong class="text-green-400">cruza hacia arriba</strong> la SMA de 200 períodos. Se considera una señal alcista de largo plazo. Históricamente ha precedido períodos de subida sostenida en índices y acciones.</p>
            <p class="text-slate-400 text-xs mt-2">Señal: Alcista de largo plazo | Confiabilidad: Alta en tendencias fuertes</p>
          </div>
          <div class="bg-red-900/30 border border-red-700/40 rounded-xl p-4">
            <p class="text-red-400 font-semibold text-base">Death Cross (Cruz de la Muerte)</p>
            <p class="text-slate-300 text-sm mt-2">La SMA de 50 períodos <strong class="text-red-400">cruza hacia abajo</strong> la SMA de 200 períodos. Se considera una señal bajista de largo plazo. Puede indicar el inicio de una tendencia bajista prolongada.</p>
            <p class="text-slate-400 text-xs mt-2">Señal: Bajista de largo plazo | Advertencia: Es un indicador rezagado, puede confirmar tarde</p>
          </div>
        </div>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Limitación importante</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Las medias móviles son indicadores rezagados (lagging): confirman la tendencia pero no la predicen.</li>
          <li>En mercados laterales generan muchas señales falsas (whipsaws).</li>
          <li>Combinalas con osciladores para mejorar la calidad de las señales.</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Cuál es la diferencia principal entre la SMA y la EMA?',
        options: [
          'La SMA usa datos de volumen; la EMA solo usa datos de precio',
          'La EMA da más peso a los precios recientes; la SMA trata todos los precios por igual',
          'La SMA es más rápida; la EMA es más lenta',
          'La EMA solo se puede usar en timeframes diarios'
        ],
        correctIndex: 1,
        explanation: 'La EMA aplica un factor de ponderación exponencial que da mayor importancia a los precios más recientes, haciéndola más reactiva. La SMA calcula un promedio simple donde todos los precios tienen igual peso.'
      },
      {
        question: '¿Qué es el Golden Cross?',
        options: [
          'Cuando el precio cruza hacia arriba la SMA de 200',
          'Cuando la SMA de 50 cruza hacia arriba la SMA de 200',
          'Cuando la EMA de 12 cruza hacia arriba la EMA de 26',
          'Cuando el precio alcanza un nuevo máximo histórico'
        ],
        correctIndex: 1,
        explanation: 'El Golden Cross ocurre cuando la media móvil de 50 períodos cruza hacia arriba la media móvil de 200 períodos. Es considerada una señal alcista de largo plazo seguida por muchos inversores institucionales.'
      },
      {
        question: '¿En qué condición de mercado las medias móviles generan más señales falsas?',
        options: [
          'En tendencias alcistas fuertes',
          'En tendencias bajistas pronunciadas',
          'En mercados laterales o sin tendencia definida',
          'Con volumen muy alto'
        ],
        correctIndex: 2,
        explanation: 'En mercados laterales (ranging), el precio cruza repetidamente las medias móviles hacia arriba y abajo sin dirección definida, generando muchas señales falsas conocidas como "whipsaws".'
      },
      {
        question: '¿Cuál es la media móvil más usada como referencia por inversores institucionales?',
        options: [
          'SMA de 10 períodos',
          'EMA de 20 períodos',
          'SMA de 200 períodos',
          'EMA de 50 períodos'
        ],
        correctIndex: 2,
        explanation: 'La SMA de 200 períodos es la referencia de largo plazo más seguida por fondos e inversores institucionales. El precio sobre la SMA200 se considera terreno alcista; por debajo, bajista.'
      }
    ]
  },
  {
    id: 7,
    title: 'Indicadores de momentum',
    description: 'RSI, MACD, Estocástico y divergencias como señales de trading.',
    icon: '⚡',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        Los indicadores de momentum miden la velocidad y fuerza de los movimientos del precio. A diferencia de las medias móviles, son osciladores que fluctúan dentro de rangos definidos y permiten identificar condiciones de sobrecompra, sobreventa y agotamiento de tendencias.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">RSI — Índice de Fuerza Relativa</h3>
        <p class="text-slate-300 text-sm mb-3">Desarrollado por J. Welles Wilder, mide la magnitud de los cambios de precio para evaluar condiciones de sobrecompra/sobreventa. Oscila entre 0 y 100.</p>
        <div class="grid grid-cols-3 gap-3 text-center text-sm mb-3">
          <div class="bg-red-900/40 border border-red-700/50 rounded-lg p-3">
            <span class="text-red-400 font-bold text-lg">+70</span>
            <p class="text-slate-400 mt-1">Zona de sobrecompra</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <span class="text-slate-300 font-bold text-lg">50</span>
            <p class="text-slate-400 mt-1">Línea de equilibrio</p>
          </div>
          <div class="bg-green-900/40 border border-green-700/50 rounded-lg p-3">
            <span class="text-green-400 font-bold text-lg">-30</span>
            <p class="text-slate-400 mt-1">Zona de sobreventa</p>
          </div>
        </div>
        <p class="text-slate-400 text-xs">Período estándar: 14. En tendencias fuertes, el RSI puede mantenerse en sobrecompra/sobreventa por períodos prolongados.</p>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">MACD — Convergencia/Divergencia de Medias Móviles</h3>
        <p class="text-slate-300 text-sm mb-3">Combina medias móviles exponenciales para detectar cambios de momentum y tendencia. Compuesto por tres elementos:</p>
        <div class="space-y-2 text-sm">
          <div class="flex gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-blue-400 font-bold w-24 shrink-0">Línea MACD</span>
            <span class="text-slate-300">EMA(12) - EMA(26). Muestra la relación entre dos EMAs.</span>
          </div>
          <div class="flex gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-yellow-400 font-bold w-24 shrink-0">Señal</span>
            <span class="text-slate-300">EMA(9) de la línea MACD. Cuando la MACD cruza la señal hacia arriba es alcista; hacia abajo es bajista.</span>
          </div>
          <div class="flex gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-green-400 font-bold w-24 shrink-0">Histograma</span>
            <span class="text-slate-300">Diferencia entre MACD y señal. Barras positivas (crecientes) indican momentum alcista; barras negativas indican momentum bajista.</span>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Estocástico</h3>
        <p class="text-slate-300 text-sm mb-3">Compara el cierre actual con el rango de precios de un período. Oscila entre 0 y 100. Configuración estándar: 14,3,3.</p>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="bg-red-900/30 border border-red-700/40 rounded-lg p-3 text-center">
            <span class="text-red-400 font-bold">Mayor a 80</span>
            <p class="text-slate-400 mt-1">Zona de sobrecompra</p>
          </div>
          <div class="bg-green-900/30 border border-green-700/40 rounded-lg p-3 text-center">
            <span class="text-green-400 font-bold">Menor a 20</span>
            <p class="text-slate-400 mt-1">Zona de sobreventa</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Divergencias: la señal más poderosa</h3>
        <div class="space-y-3 text-sm">
          <div class="bg-green-900/30 border border-green-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Divergencia alcista (regular)</p>
            <p class="text-slate-300 mt-1">El precio hace mínimos más bajos pero el indicador (RSI/MACD) hace mínimos más altos. Señal de agotamiento bajista y posible reversión al alza.</p>
          </div>
          <div class="bg-red-900/30 border border-red-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Divergencia bajista (regular)</p>
            <p class="text-slate-300 mt-1">El precio hace máximos más altos pero el indicador hace máximos más bajos. Señal de agotamiento alcista y posible reversión a la baja.</p>
          </div>
        </div>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Valores de referencia</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>RSI: período 14 es el estándar; niveles 70/30 para activos normales, 80/20 para activos muy volátiles.</li>
          <li>MACD: configuración estándar (12, 26, 9); ajustar a (5, 13, 5) para scalping.</li>
          <li>Las divergencias son más confiables en timeframes mayores (4H, diario, semanal).</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Qué indica un RSI por encima de 70?',
        options: [
          'El precio está a punto de subir fuertemente',
          'El activo está en zona de sobrecompra',
          'El volumen es muy alto',
          'La tendencia bajista está por comenzar inevitablemente'
        ],
        correctIndex: 1,
        explanation: 'Un RSI superior a 70 indica zona de sobrecompra: el precio ha subido rápido en relación a su historia reciente. No significa necesariamente reversión inmediata, pero señala que el movimiento puede estar sobreextendido.'
      },
      {
        question: '¿Qué significa una divergencia bajista en el RSI?',
        options: [
          'El RSI hace mínimos más bajos mientras el precio hace mínimos más altos',
          'El precio hace máximos más altos mientras el RSI hace máximos más bajos',
          'El RSI está por debajo de 30',
          'El precio y el RSI se mueven en la misma dirección'
        ],
        correctIndex: 1,
        explanation: 'Una divergencia bajista ocurre cuando el precio registra nuevos máximos pero el RSI no los confirma (hace máximos más bajos). Esto señala debilitamiento del momentum alcista y posible reversión a la baja.'
      },
      {
        question: '¿Qué representa el histograma del MACD?',
        options: [
          'El volumen de operaciones del período',
          'La diferencia entre el precio y la EMA de 26',
          'La diferencia entre la línea MACD y la línea de señal',
          'El RSI calculado con EMAs'
        ],
        correctIndex: 2,
        explanation: 'El histograma del MACD muestra la diferencia entre la línea MACD y la línea de señal. Cuando el histograma crece en positivo indica momentum alcista creciente; cuando decrece o es negativo indica momentum bajista.'
      },
      {
        question: '¿En qué nivel del Estocástico se considera que el activo está en zona de sobreventa?',
        options: [
          'Mayor a 80',
          'Entre 40 y 60',
          'Menor a 20',
          'Menor a 50'
        ],
        correctIndex: 2,
        explanation: 'El Estocástico indica sobreventa cuando está por debajo de 20, lo que sugiere que el precio cerró cerca de los mínimos del rango reciente y puede estar próximo a un rebote.'
      }
    ]
  },
  {
    id: 8,
    title: 'Indicadores de volatilidad',
    description: 'Bandas de Bollinger y ATR para medir y operar la volatilidad.',
    icon: '🎢',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        La volatilidad mide la intensidad de los movimientos del precio. Los indicadores de volatilidad no señalan dirección, sino la amplitud esperada de los movimientos. Son herramientas fundamentales para dimensionar correctamente el riesgo y las metas de ganancia.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Bandas de Bollinger</h3>
        <p class="text-slate-300 text-sm mb-4">Desarrolladas por John Bollinger, consisten en tres líneas: una SMA central y dos bandas ubicadas a N desviaciones estándar por encima y por debajo. La configuración estándar es SMA(20) con 2 desviaciones estándar.</p>
        <div class="space-y-3 text-sm">
          <div class="flex gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-slate-400 w-28 shrink-0">Banda superior</span>
            <span class="text-slate-300">SMA(20) + 2 desviaciones estándar. Actúa como resistencia dinámica.</span>
          </div>
          <div class="flex gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-blue-400 w-28 shrink-0">Banda media</span>
            <span class="text-slate-300">SMA de 20 períodos. Sirve como soporte/resistencia dinámica central.</span>
          </div>
          <div class="flex gap-3 bg-slate-700/40 rounded-lg p-3">
            <span class="text-slate-400 w-28 shrink-0">Banda inferior</span>
            <span class="text-slate-300">SMA(20) - 2 desviaciones estándar. Actúa como soporte dinámico.</span>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Señales clave de las Bandas de Bollinger</h3>
        <div class="space-y-3">
          <div class="bg-yellow-900/30 border border-yellow-700/40 rounded-lg p-3">
            <p class="text-yellow-400 font-semibold">Squeeze (Contracción)</p>
            <p class="text-slate-300 text-sm mt-1">Las bandas se estrechan notablemente, indicando baja volatilidad. Históricamente precede a un movimiento explosivo. No indica dirección por sí solo; hay que esperar la ruptura.</p>
          </div>
          <div class="bg-blue-900/30 border border-blue-700/40 rounded-lg p-3">
            <p class="text-blue-400 font-semibold">Expansión (Walking the Band)</p>
            <p class="text-slate-300 text-sm mt-1">Las bandas se ensanchan y el precio "camina" a lo largo de una banda. En tendencias fuertes el precio puede tocar o superar repetidamente la banda superior (alcista) o inferior (bajista).</p>
          </div>
          <div class="bg-green-900/30 border border-green-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Toque de banda como señal</p>
            <p class="text-slate-300 text-sm mt-1">En mercados laterales, el toque de la banda inferior con RSI bajo puede ser señal de compra; el toque de la banda superior con RSI alto puede ser señal de venta. En tendencias, esto NO aplica.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">ATR — Rango Verdadero Promedio</h3>
        <p class="text-slate-300 text-sm mb-3">Desarrollado también por Wilder, el ATR mide la volatilidad promedio de un activo durante los últimos N períodos. No indica dirección, sino la amplitud media de los movimientos.</p>
        <div class="space-y-2 text-sm">
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-blue-300 font-semibold">Uso para stop loss</p>
            <p class="text-slate-400 mt-1">Colocar el stop a 1.5x o 2x el ATR del activo por debajo del punto de entrada evita que la volatilidad normal del mercado active el stop prematuramente.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-blue-300 font-semibold">Uso para dimensionar targets</p>
            <p class="text-slate-400 mt-1">Si el ATR es $2, no es realista esperar que el precio recorra $10 en un solo día. El ATR provee un marco realista para las metas de ganancia.</p>
          </div>
        </div>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Valores de referencia</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Bandas de Bollinger estándar: SMA(20), 2 desviaciones estándar.</li>
          <li>ATR estándar: período de 14. Para stops, multiplicar por 1.5x a 2x.</li>
          <li>El Squeeze de Bollinger se confirma cuando el ancho de banda está en mínimos de 6 meses.</li>
          <li>Statísticamente, el precio permanece dentro de las bandas el 95% del tiempo (con 2σ).</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Qué indica el "Squeeze" en las Bandas de Bollinger?',
        options: [
          'El precio está en sobrecompra extrema',
          'Las bandas se contraen indicando baja volatilidad y probable movimiento explosivo próximo',
          'El precio ha tocado la banda superior tres veces seguidas',
          'El volumen ha caído a mínimos históricos'
        ],
        correctIndex: 1,
        explanation: 'El Squeeze ocurre cuando las Bandas de Bollinger se estrechan mucho, reflejando un período de baja volatilidad. Históricamente, este estado precede a movimientos de precio importantes, aunque no indica la dirección.'
      },
      {
        question: '¿Para qué sirve principalmente el ATR en el trading práctico?',
        options: [
          'Para predecir la dirección del próximo movimiento',
          'Para identificar zonas de sobrecompra y sobreventa',
          'Para dimensionar stops y targets según la volatilidad real del activo',
          'Para detectar divergencias con el precio'
        ],
        correctIndex: 2,
        explanation: 'El ATR mide la volatilidad media del activo y permite colocar stops a una distancia coherente con esa volatilidad (ej: 1.5x ATR), evitando stops demasiado ajustados que se activan por ruido normal.'
      },
      {
        question: '¿En qué condición de mercado es más confiable la estrategia de comprar al tocar la banda inferior de Bollinger?',
        options: [
          'En tendencias alcistas muy fuertes',
          'En tendencias bajistas pronunciadas',
          'En mercados laterales dentro de un rango definido',
          'En cualquier condición de mercado'
        ],
        correctIndex: 2,
        explanation: 'Comprar al tocar la banda inferior (y vender en la superior) funciona bien en mercados laterales donde el precio oscila dentro de un rango. En tendencias fuertes, el precio puede "caminar" la banda durante mucho tiempo.'
      }
    ]
  },
  {
    id: 9,
    title: 'Patrones de gráfico',
    description: 'Formaciones clásicas de reversión y continuación con sus implicaciones.',
    icon: '🔷',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        Los patrones de gráfico son formaciones reconocibles en la acción del precio que han demostrado históricamente tener implicaciones direccionales. Se dividen en dos categorías: patrones de <strong class="text-blue-400">reversión</strong> (señalan cambio de tendencia) y patrones de <strong class="text-indigo-400">continuación</strong> (señalan pausa antes de retomar la tendencia).
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Patrones de reversión</h3>
        <div class="space-y-4">
          <div>
            <p class="text-red-400 font-semibold">Hombro-Cabeza-Hombro (HCH)</p>
            <p class="text-slate-300 text-sm mt-1">Aparece en tops. Tres máximos donde el central (cabeza) es el más alto. Los dos laterales (hombros) están a nivel similar. La "línea del cuello" conecta los mínimos entre los picos. La ruptura de la línea del cuello es la señal de venta. El objetivo de precio se mide desde la cabeza hasta el cuello, y esa distancia se proyecta desde la ruptura hacia abajo.</p>
          </div>
          <div>
            <p class="text-green-400 font-semibold">HCH Invertido</p>
            <p class="text-slate-300 text-sm mt-1">Inverso del anterior, aparece en suelos. Señal alcista. La ruptura de la línea del cuello con volumen confirma la entrada. El objetivo se proyecta hacia arriba.</p>
          </div>
          <div>
            <p class="text-red-400 font-semibold">Doble Techo (Double Top)</p>
            <p class="text-slate-300 text-sm mt-1">El precio alcanza dos veces el mismo nivel de máximos sin poder superarlo. La ruptura del mínimo entre los dos toques (neckline) activa la señal bajista. Patrón muy confiable en resistencias históricas.</p>
          </div>
          <div>
            <p class="text-green-400 font-semibold">Doble Piso (Double Bottom)</p>
            <p class="text-slate-300 text-sm mt-1">El precio toca dos veces el mismo nivel de mínimos. La ruptura del máximo entre los dos suelos activa la señal alcista. Forma una "W" en el gráfico.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Patrones de continuación</h3>
        <div class="space-y-4">
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-yellow-400 font-semibold">Triángulo Simétrico</p>
            <p class="text-slate-300 text-sm mt-1">Máximos decrecientes y mínimos crecientes convergen. Período de compresión. La ruptura ocurre en la misma dirección que la tendencia previa (continuación) aunque puede romper en cualquier dirección.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Triángulo Ascendente</p>
            <p class="text-slate-300 text-sm mt-1">Resistencia horizontal plana con mínimos crecientes. Indica acumulación de compradores. La ruptura hacia arriba de la resistencia es la señal de entrada alcista.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Triángulo Descendente</p>
            <p class="text-slate-300 text-sm mt-1">Soporte horizontal plano con máximos decrecientes. Indica distribución. La ruptura a la baja del soporte es la señal de entrada bajista.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-blue-400 font-semibold">Banderas y Banderines (Flags & Pennants)</p>
            <p class="text-slate-300 text-sm mt-1">Correcciones breves y ordenadas después de un movimiento fuerte (el asta). Son patrones de alta probabilidad de continuación. La bandera es rectangular; el banderín es triangular convergente. El objetivo es la longitud del asta proyectada desde la ruptura.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-indigo-400 font-semibold">Cuñas (Wedges)</p>
            <p class="text-slate-300 text-sm mt-1">Cuña ascendente en tendencia alcista es bajista (continuación bajista tras corrección). Cuña descendente en tendencia bajista es alcista. Ambas líneas convergen en la misma dirección.</p>
          </div>
        </div>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Regla de confirmación</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Ningún patrón es válido hasta que el precio rompa el nivel clave (neckline, resistencia, soporte).</li>
          <li>La ruptura debe ser confirmada con volumen elevado.</li>
          <li>Esperar el cierre de la vela por fuera del patrón antes de actuar.</li>
          <li>Los retests del nivel roto son oportunidades de segunda entrada con menor riesgo.</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Qué tipo de patrón es el Hombro-Cabeza-Hombro (HCH)?',
        options: [
          'Patrón de continuación alcista',
          'Patrón de reversión bajista',
          'Patrón de continuación bajista',
          'Patrón de consolidación neutral'
        ],
        correctIndex: 1,
        explanation: 'El HCH es un patrón de reversión bajista que aparece en tops de tendencias alcistas. La ruptura de la línea del cuello señala el fin de la tendencia alcista e inicio de una tendencia bajista.'
      },
      {
        question: '¿Qué característica define al Triángulo Ascendente?',
        options: [
          'Máximos decrecientes y mínimos crecientes que convergen',
          'Resistencia horizontal plana con mínimos crecientes que convergen',
          'Soporte horizontal plano con máximos decrecientes',
          'Dos toques en el mismo nivel de precio con volumen descendente'
        ],
        correctIndex: 1,
        explanation: 'El Triángulo Ascendente tiene una resistencia horizontal plana (precio que no puede superarla) y mínimos crecientes, lo que indica que los compradores están haciendo presión progresiva y apunta a una ruptura alcista.'
      },
      {
        question: '¿Qué información provee "el asta" en un patrón de bandera?',
        options: [
          'El nivel donde colocar el stop loss',
          'La duración esperada de la consolidación',
          'La magnitud del movimiento previo, que se usa para proyectar el objetivo tras la ruptura',
          'El volumen necesario para confirmar la ruptura'
        ],
        correctIndex: 2,
        explanation: 'El asta es el movimiento fuerte que precede a la bandera. Su longitud se proyecta desde el punto de ruptura de la bandera para estimar el objetivo de precio del movimiento siguiente.'
      },
      {
        question: '¿Qué forma en el gráfico describe un patrón de Doble Piso?',
        options: [
          'Una M',
          'Una W',
          'Una V',
          'Una U'
        ],
        correctIndex: 1,
        explanation: 'El Doble Piso forma una "W": el precio toca un soporte, rebota, vuelve a testear el mismo soporte, y vuelve a rebotar. La ruptura del máximo entre los dos pisos es la señal alcista.'
      }
    ]
  },
  {
    id: 10,
    title: 'Retrocesos de Fibonacci',
    description: 'Niveles clave de Fibonacci y cómo usarlos en correcciones de precio.',
    icon: '🌀',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        Los retrocesos de Fibonacci son una herramienta técnica basada en la secuencia matemática de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13, 21...). Al dividir un número de la secuencia por el siguiente, se obtiene aproximadamente 0.618 (la "razón áurea"), que aparece repetidamente en la naturaleza y, según muchos traders, también en los mercados financieros.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Niveles clave de Fibonacci</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="text-left py-2 pr-4 text-slate-400">Nivel</th>
                <th class="text-left py-2 pr-4 text-slate-400">Relevancia</th>
                <th class="text-left py-2 text-slate-400">Origen</th>
              </tr>
            </thead>
            <tbody class="text-slate-300">
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-blue-300 font-bold">23.6%</td>
                <td class="py-2 pr-4">Retroceso superficial</td>
                <td class="py-2">Tendencias muy fuertes</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-blue-400 font-bold">38.2%</td>
                <td class="py-2 pr-4">Retroceso moderado</td>
                <td class="py-2">Primer soporte relevante</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-yellow-400 font-bold">50%</td>
                <td class="py-2 pr-4">Retroceso psicológico</td>
                <td class="py-2">No es Fibonacci, pero es muy seguido</td>
              </tr>
              <tr class="border-b border-slate-700/50">
                <td class="py-2 pr-4 text-orange-400 font-bold">61.8%</td>
                <td class="py-2 pr-4">Retroceso dorado</td>
                <td class="py-2">Razón áurea, el más importante</td>
              </tr>
              <tr>
                <td class="py-2 pr-4 text-red-400 font-bold">78.6%</td>
                <td class="py-2 pr-4">Retroceso profundo</td>
                <td class="py-2">Límite antes de invalidación</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Cómo trazar los niveles</h3>
        <div class="space-y-3 text-sm">
          <div class="flex gap-3 items-start">
            <span class="text-blue-400 font-bold w-6 shrink-0">1.</span>
            <p class="text-slate-300">Identificar el <strong>swing más reciente</strong>: el movimiento completo entre un mínimo y un máximo relevantes (en tendencia alcista) o entre un máximo y un mínimo (en tendencia bajista).</p>
          </div>
          <div class="flex gap-3 items-start">
            <span class="text-blue-400 font-bold w-6 shrink-0">2.</span>
            <p class="text-slate-300">En tendencia alcista: trazar desde el mínimo del swing hasta el máximo. La herramienta calculará automáticamente los niveles entre ambos puntos.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span class="text-blue-400 font-bold w-6 shrink-0">3.</span>
            <p class="text-slate-300">Esperar que el precio retroceda hasta uno de los niveles clave. Buscar confluencia con otros factores (soporte previo, media móvil, patrón de velas) para aumentar la confiabilidad.</p>
          </div>
          <div class="flex gap-3 items-start">
            <span class="text-blue-400 font-bold w-6 shrink-0">4.</span>
            <p class="text-slate-300">El stop loss se coloca debajo del nivel de Fibonacci buscado (o debajo del 78.6% si se opera el 61.8%). Si el precio rompe el 78.6% con decisión, la estructura puede estar invalidada.</p>
          </div>
        </div>
      </div>
      <div class="bg-blue-900/30 border border-blue-700/50 rounded-xl p-4">
        <h4 class="text-blue-400 font-semibold mb-2">Zonas de confluencia</h4>
        <p class="text-slate-300 text-sm mb-2">La mayor utilidad de Fibonacci surge cuando sus niveles coinciden con otros elementos técnicos:</p>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Nivel de Fibonacci + soporte/resistencia histórico</li>
          <li>Nivel de Fibonacci + media móvil importante (SMA 50 o 200)</li>
          <li>Nivel de Fibonacci + línea de tendencia</li>
          <li>Nivel de Fibonacci + patrón de velas de reversión</li>
        </ul>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Limitaciones</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Los niveles de Fibonacci son zonas, no puntos exactos. El precio puede superarlos ligeramente.</li>
          <li>No usar Fibonacci como única herramienta de decisión.</li>
          <li>La elección del swing correcto (mínimo a máximo) es subjetiva y afecta los niveles resultantes.</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Cuál es el nivel de Fibonacci considerado más importante y por qué?',
        options: [
          'El 50%, porque es el punto medio matemático exacto',
          'El 38.2%, porque es el primer retroceso significativo',
          'El 61.8%, porque se deriva de la razón áurea de la secuencia de Fibonacci',
          'El 23.6%, porque indica tendencias muy fuertes'
        ],
        correctIndex: 2,
        explanation: 'El 61.8% es el nivel más importante porque se deriva directamente de la razón áurea (φ ≈ 1.618), presente en la secuencia de Fibonacci. Es el nivel que más respeto recibe de los participantes del mercado.'
      },
      {
        question: 'En una tendencia alcista, ¿cómo se trazan correctamente los retrocesos de Fibonacci?',
        options: [
          'Desde el máximo hasta el mínimo del movimiento',
          'Desde el mínimo del swing hasta el máximo del swing',
          'Desde el precio actual hasta la media móvil',
          'Desde el cierre del primer día hasta el cierre del último día'
        ],
        correctIndex: 1,
        explanation: 'En tendencia alcista se traza la herramienta de Fibonacci desde el mínimo del swing (punto de partida del movimiento) hasta el máximo del swing (punto de llegada), para identificar los niveles de soporte en la corrección.'
      },
      {
        question: '¿Qué hace más confiable un nivel de Fibonacci como zona de entrada?',
        options: [
          'Que sea el primer nivel alcanzado en la corrección',
          'Que coincida con otros elementos técnicos (soporte, media móvil, patrón de velas)',
          'Que el precio lo toque exactamente al decimal',
          'Que el RSI esté en 50 en ese momento'
        ],
        correctIndex: 1,
        explanation: 'La confluencia de un nivel de Fibonacci con otros factores técnicos (soporte histórico, media móvil importante, patrón de velas de reversión) aumenta significativamente la probabilidad de que el nivel sea respetado.'
      }
    ]
  },
  {
    id: 11,
    title: 'Gestión del riesgo',
    description: 'Stop loss, take profit, relación riesgo-recompensa y tamaño de posición.',
    icon: '🛡️',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        La gestión del riesgo es la parte más importante del trading. Muchos traders pierden dinero no porque sus análisis sean incorrectos, sino porque no gestionan adecuadamente el riesgo. Un trader con análisis mediocre pero excelente gestión de riesgo puede ser rentable; un trader con análisis brillante pero pobre gestión de riesgo terminará perdiendo.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Stop Loss</h3>
        <p class="text-slate-300 text-sm mb-3">Orden automática que cierra la posición si el precio alcanza un nivel desfavorable predefinido. <strong class="text-slate-200">Es la herramienta más importante para preservar el capital.</strong></p>
        <div class="space-y-2 text-sm">
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-blue-300 font-semibold">Stop técnico</p>
            <p class="text-slate-400 mt-1">Se coloca debajo de un soporte relevante (en compras) o sobre una resistencia relevante (en ventas cortas). Si el nivel se rompe, la tesis de trade ya no es válida.</p>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-blue-300 font-semibold">Stop por ATR</p>
            <p class="text-slate-400 mt-1">Se coloca a 1.5x o 2x el ATR del activo. Ajusta automáticamente el stop a la volatilidad real, evitando que el ruido del mercado active el stop prematuramente.</p>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Take Profit y Relación Riesgo-Recompensa (R:R)</h3>
        <p class="text-slate-300 text-sm mb-4">La relación R:R compara la ganancia potencial con la pérdida potencial del trade. Es el factor más importante para evaluar si un trade vale la pena.</p>
        <div class="grid grid-cols-3 gap-3 text-center text-sm mb-4">
          <div class="bg-red-900/40 border border-red-700/50 rounded-lg p-3">
            <span class="text-red-400 font-bold text-base">1:1</span>
            <p class="text-slate-400 mt-1">Mínimo aceptable. Necesitas acertar más del 50%.</p>
          </div>
          <div class="bg-yellow-900/40 border border-yellow-700/50 rounded-lg p-3">
            <span class="text-yellow-400 font-bold text-base">1:2</span>
            <p class="text-slate-400 mt-1">Razonable. Puedes ser rentable acertando 40%.</p>
          </div>
          <div class="bg-green-900/40 border border-green-700/50 rounded-lg p-3">
            <span class="text-green-400 font-bold text-base">1:3</span>
            <p class="text-slate-400 mt-1">Ideal. Rentable acertando incluso el 30% de trades.</p>
          </div>
        </div>
        <div class="bg-blue-900/30 border border-blue-700/40 rounded-lg p-3 text-sm">
          <p class="text-blue-300 font-semibold">Ejemplo con R:R 1:2</p>
          <p class="text-slate-300 mt-1">Si arriesgo $100 por trade y busco ganar $200, con un 40% de aciertos: 4 ganancias × $200 = $800; 6 pérdidas × $100 = $600. Resultado neto: <strong class="text-green-400">+$200</strong> positivo.</p>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Tamaño de posición</h3>
        <p class="text-slate-300 text-sm mb-3">Define cuánto capital arriesgar por operación. La regla más extendida es la del 1-2% del capital total por trade.</p>
        <div class="bg-slate-700/40 rounded-lg p-4">
          <p class="text-blue-300 font-semibold text-sm mb-2">Fórmula de tamaño de posición</p>
          <div class="font-mono text-xs bg-slate-900 rounded p-3 text-green-400">
            <p>Riesgo en $ = Capital × % de riesgo (ej: 1%)</p>
            <p class="mt-1">Unidades = Riesgo en $ / Distancia al stop</p>
          </div>
          <p class="text-slate-400 text-xs mt-2">Ejemplo: Capital $10.000 × 1% = $100 de riesgo. Si el stop está a $2 del precio de entrada, comprar 50 unidades.</p>
        </div>
      </div>
      <div class="bg-red-900/30 border border-red-700/50 rounded-xl p-4">
        <h4 class="text-red-400 font-semibold mb-2">Regla fundamental</h4>
        <p class="text-slate-300 text-sm">Con una gestión adecuada del riesgo, <strong class="text-slate-100">necesitas acertar solo el 30-40% de tus trades</strong> para ser rentable si mantienes una buena relación R:R. El objetivo no es ganar siempre, sino que las ganancias superen a las pérdidas.</p>
      </div>
      <div class="bg-amber-900/30 border border-amber-700/50 rounded-xl p-4">
        <h4 class="text-amber-400 font-semibold mb-2">⚠️ Valores de referencia</h4>
        <ul class="text-sm text-slate-300 space-y-1 list-disc list-inside">
          <li>Nunca arriesgar más del 1-2% del capital total en un único trade.</li>
          <li>Relación R:R mínima recomendada: 1:2. Ideal: 1:3 o superior.</li>
          <li>No mover el stop loss para abajo (en compras) esperando que el precio rebote.</li>
          <li>Siempre definir stop y target ANTES de abrir la posición.</li>
        </ul>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Cuál es la regla estándar sobre el porcentaje máximo del capital a arriesgar por operación?',
        options: [
          'Máximo 10% del capital total',
          'Máximo 5% del capital total',
          'Máximo 1-2% del capital total',
          'No existe una regla estándar, depende de cada trader'
        ],
        correctIndex: 2,
        explanation: 'La regla más extendida entre traders profesionales es no arriesgar más del 1-2% del capital total en una única operación. Esto protege el capital de una racha de pérdidas sin que sea devastadora.'
      },
      {
        question: '¿Cuál es la relación Riesgo-Recompensa mínima recomendada para un trade?',
        options: [
          '1:1 (arriesgar igual a lo que se espera ganar)',
          '1:2 (arriesgar la mitad de lo que se espera ganar)',
          '2:1 (arriesgar el doble de lo que se espera ganar)',
          '3:1 (arriesgar el triple de lo que se espera ganar)'
        ],
        correctIndex: 1,
        explanation: 'La relación mínima recomendada es 1:2, es decir, por cada unidad de riesgo se busca ganar al menos 2 unidades. Esto permite ser rentable incluso acertando menos del 50% de las operaciones.'
      },
      {
        question: 'Un trader tiene capital de $5.000 y aplica el riesgo del 1%. Si el stop está a $5 del precio de entrada, ¿cuántas acciones debe comprar?',
        options: [
          '5 acciones',
          '10 acciones',
          '50 acciones',
          '100 acciones'
        ],
        correctIndex: 1,
        explanation: 'Riesgo en $ = $5.000 × 1% = $50. Unidades = $50 / $5 por acción = 10 acciones. Así, si el stop se activa, la pérdida máxima es exactamente $50 (1% del capital).'
      },
      {
        question: '¿Por qué la gestión del riesgo importa más que el porcentaje de aciertos?',
        options: [
          'Porque el mercado siempre premia al que acierta más veces',
          'Porque con buena relación R:R se puede ser rentable acertando el 30-40% de los trades',
          'Porque el análisis técnico predice el mercado con alta precisión',
          'No importa más, ambos factores son igualmente importantes'
        ],
        correctIndex: 1,
        explanation: 'Con una relación R:R de 1:3, un trader que acierta solo el 30% de sus operaciones puede ser rentable: 3 ganancias de $300 = $900 supera a 7 pérdidas de $100 = $700. La gestión del riesgo es el diferenciador clave.'
      }
    ]
  },
  {
    id: 12,
    title: 'Armando un plan de trade',
    description: 'Confluencia, checklist completo y proceso de decisión integrador.',
    icon: '📋',
    content: `<div class="space-y-6">
      <p class="text-slate-300 leading-relaxed">
        El plan de trade es el documento mental (o físico) que un trader completa antes de abrir cualquier posición. Opera sin un plan es operar impulsivamente, que es la causa número uno de pérdidas en trading. Un buen plan elimina las decisiones emocionales y reemplaza el miedo y la codicia con un proceso sistemático.
      </p>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">El concepto de confluencia</h3>
        <p class="text-slate-300 text-sm mb-3">La confluencia es la coincidencia de múltiples señales técnicas apuntando en la misma dirección. Un trade de alta calidad tiene al menos 3 factores confluyentes. Cuantos más factores coincidan, mayor es la probabilidad estadística del trade.</p>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-green-400 font-semibold">Alta confluencia (3+ factores)</p>
            <ul class="text-slate-400 mt-1 space-y-1 list-disc list-inside text-xs">
              <li>Tendencia alcista en diario</li>
              <li>Retroceso al 61.8% de Fibonacci</li>
              <li>Soporte histórico en el nivel</li>
              <li>RSI en sobreventa</li>
              <li>Vela de reversión alcista</li>
            </ul>
          </div>
          <div class="bg-slate-700/40 rounded-lg p-3">
            <p class="text-red-400 font-semibold">Baja confluencia (1-2 factores)</p>
            <ul class="text-slate-400 mt-1 space-y-1 list-disc list-inside text-xs">
              <li>RSI en sobreventa</li>
              <li>Intuición del trader</li>
              <li>Noticia positiva</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-4">Checklist completo antes de operar</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <div class="w-5 h-5 border-2 border-blue-500 rounded mt-0.5 shrink-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <div>
              <p class="text-slate-200 font-semibold text-sm">1. Tendencia principal</p>
              <p class="text-slate-400 text-xs mt-0.5">¿Cuál es la tendencia en el timeframe mayor? ¿Opero a favor o en contra?</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-5 h-5 border-2 border-blue-500 rounded mt-0.5 shrink-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <div>
              <p class="text-slate-200 font-semibold text-sm">2. Niveles clave</p>
              <p class="text-slate-400 text-xs mt-0.5">¿Dónde están los soportes y resistencias más cercanos? ¿Hay Fibonacci relevante?</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-5 h-5 border-2 border-blue-500 rounded mt-0.5 shrink-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <div>
              <p class="text-slate-200 font-semibold text-sm">3. Señal de entrada</p>
              <p class="text-slate-400 text-xs mt-0.5">¿Qué patrón o señal técnica justifica la entrada ahora? ¿Hay confluencia?</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-5 h-5 border-2 border-blue-500 rounded mt-0.5 shrink-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <div>
              <p class="text-slate-200 font-semibold text-sm">4. Stop loss definido</p>
              <p class="text-slate-400 text-xs mt-0.5">¿Dónde está mi stop? ¿Está en un nivel técnico lógico? ¿A cuánto ATR equivale?</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-5 h-5 border-2 border-blue-500 rounded mt-0.5 shrink-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <div>
              <p class="text-slate-200 font-semibold text-sm">5. Take profit y R:R</p>
              <p class="text-slate-400 text-xs mt-0.5">¿Cuál es mi objetivo? ¿La relación R:R es de al menos 1:2?</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-5 h-5 border-2 border-blue-500 rounded mt-0.5 shrink-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <div>
              <p class="text-slate-200 font-semibold text-sm">6. Tamaño de posición</p>
              <p class="text-slate-400 text-xs mt-0.5">¿Cuántas unidades compro para no arriesgar más del 1-2% del capital?</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-5 h-5 border-2 border-blue-500 rounded mt-0.5 shrink-0 flex items-center justify-center">
              <div class="w-2 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <div>
              <p class="text-slate-200 font-semibold text-sm">7. Plan de gestión durante el trade</p>
              <p class="text-slate-400 text-xs mt-0.5">¿Movo el stop a breakeven en algún punto? ¿Tomo ganancias parciales?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h3 class="font-semibold text-blue-400 mb-3">Proceso de decisión integrado</h3>
        <div class="space-y-2 text-sm">
          <div class="flex gap-2 items-center">
            <span class="text-blue-400 font-bold">Paso 1</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-300">Análisis de tendencia (timeframe mayor)</span>
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-blue-400 font-bold">Paso 2</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-300">Identificar zona de interés (soporte/resistencia/Fibonacci)</span>
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-blue-400 font-bold">Paso 3</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-300">Esperar señal de activación (patrón, cruce, ruptura)</span>
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-blue-400 font-bold">Paso 4</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-300">Verificar confluencia y R:R mínimo 1:2</span>
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-blue-400 font-bold">Paso 5</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-300">Calcular tamaño de posición → ejecutar</span>
          </div>
          <div class="flex gap-2 items-center">
            <span class="text-blue-400 font-bold">Paso 6</span>
            <span class="text-slate-400">→</span>
            <span class="text-slate-300">Gestionar el trade y registrar en el diario</span>
          </div>
        </div>
      </div>
      <div class="bg-green-900/30 border border-green-700/50 rounded-xl p-4">
        <h4 class="text-green-400 font-semibold mb-2">El diario de trading</h4>
        <p class="text-slate-300 text-sm">Registrar cada operación (entrada, salida, razonamiento, resultado y aprendizaje) es la herramienta más poderosa para mejorar como trader. Los patrones en tus errores se vuelven visibles y pueden corregirse sistemáticamente.</p>
      </div>
    </div>`,
    quiz: [
      {
        question: '¿Qué es la "confluencia" en el contexto del análisis técnico?',
        options: [
          'Cuando dos medias móviles se cruzan al mismo tiempo',
          'La coincidencia de múltiples señales técnicas apuntando en la misma dirección',
          'Cuando el precio y el volumen confirman la misma tendencia',
          'Un patrón de velas japonesas de tres períodos'
        ],
        correctIndex: 1,
        explanation: 'La confluencia es cuando múltiples factores técnicos independientes coinciden y apuntan en la misma dirección (tendencia + nivel de Fibonacci + indicador + patrón de velas). Cuantos más factores confluyan, mayor es la probabilidad del trade.'
      },
      {
        question: '¿Cuál es el primer paso recomendado antes de buscar una entrada?',
        options: [
          'Revisar el RSI en el timeframe de 1 minuto',
          'Calcular el tamaño de posición',
          'Analizar la tendencia en el timeframe mayor',
          'Identificar el stop loss exacto'
        ],
        correctIndex: 2,
        explanation: 'El primer paso es siempre determinar la tendencia principal en el timeframe mayor. Operar a favor de la tendencia principal aumenta significativamente la probabilidad de éxito de cualquier setup.'
      },
      {
        question: '¿Para qué sirve llevar un diario de trading?',
        options: [
          'Para calcular automáticamente el tamaño de posición',
          'Para predecir el próximo movimiento del mercado',
          'Para identificar patrones en los errores y mejorar sistemáticamente',
          'Para registrar las noticias económicas que afectan al mercado'
        ],
        correctIndex: 2,
        explanation: 'El diario de trading registra cada operación con su razonamiento y resultado. Con el tiempo permite identificar errores recurrentes, sesgos y fortalezas propias, lo que facilita la mejora continua y sistemática como trader.'
      }
    ]
  }
]
