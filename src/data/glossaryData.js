// Glosario de análisis técnico — 50+ términos en español
// El campo 'module' indica en qué módulo del curso se introduce el término (1-12)

export const GLOSSARY = [
  {
    term: 'Análisis técnico',
    definition: 'Metodología de evaluación de activos financieros basada en el estudio de la acción del precio y el volumen histórico, con el objetivo de predecir movimientos futuros del mercado.',
    module: 1,
  },
  {
    term: 'Análisis fundamental',
    definition: 'Enfoque de valoración de activos que examina factores económicos, financieros y cualitativos de una empresa o mercado para determinar su valor intrínseco.',
    module: 1,
  },
  {
    term: 'Vela japonesa',
    definition: 'Representación gráfica del precio de un activo durante un período determinado. Muestra el precio de apertura, máximo, mínimo y cierre (OHLC) mediante un cuerpo rectangular y mechas.',
    module: 2,
  },
  {
    term: 'OHLC',
    definition: 'Acrónimo de Open (apertura), High (máximo), Low (mínimo) y Close (cierre). Representa los cuatro precios clave de un período de negociación.',
    module: 2,
  },
  {
    term: 'Timeframe',
    definition: 'Marco temporal o período de tiempo que representa cada vela o barra en un gráfico. Puede ser de 1 minuto, 5 minutos, 1 hora, 1 día, 1 semana, entre otros.',
    module: 1,
  },
  {
    term: 'Tendencia',
    definition: 'Dirección predominante del movimiento del precio a lo largo del tiempo. Puede ser alcista (precio sube), bajista (precio baja) o lateral (precio se mueve sin dirección clara).',
    module: 3,
  },
  {
    term: 'Soporte',
    definition: 'Nivel de precio donde la demanda es suficientemente fuerte para detener o revertir una caída del precio. El precio tiende a rebotar al alza desde niveles de soporte.',
    module: 3,
  },
  {
    term: 'Resistencia',
    definition: 'Nivel de precio donde la oferta es suficientemente fuerte para detener o revertir un alza del precio. El precio tiende a rechazarse a la baja desde niveles de resistencia.',
    module: 3,
  },
  {
    term: 'Volumen',
    definition: 'Cantidad total de acciones, contratos o unidades de un activo negociadas durante un período determinado. El volumen confirma la fortaleza o debilidad de un movimiento de precio.',
    module: 2,
  },
  {
    term: 'Media móvil',
    definition: 'Indicador que calcula el precio promedio de un activo durante un número determinado de períodos, suavizando las fluctuaciones del precio para identificar la tendencia subyacente.',
    module: 5,
  },
  {
    term: 'SMA',
    definition: 'Simple Moving Average o Media Móvil Simple. Calcula el promedio aritmético del precio de cierre durante un número determinado de períodos, dando igual peso a todos los valores.',
    module: 5,
  },
  {
    term: 'EMA',
    definition: 'Exponential Moving Average o Media Móvil Exponencial. Tipo de media móvil que da mayor peso a los precios más recientes, haciéndola más sensible a los cambios recientes del mercado.',
    module: 5,
  },
  {
    term: 'RSI',
    definition: 'Relative Strength Index o Índice de Fuerza Relativa. Oscilador que mide la velocidad y magnitud de los cambios de precio en una escala de 0 a 100, indicando condiciones de sobrecompra (>70) o sobreventa (<30).',
    module: 6,
  },
  {
    term: 'MACD',
    definition: 'Moving Average Convergence Divergence. Indicador de momentum que muestra la relación entre dos medias móviles exponenciales. Se compone de la línea MACD, la línea de señal y el histograma.',
    module: 6,
  },
  {
    term: 'Histograma',
    definition: 'Componente del MACD que representa gráficamente la diferencia entre la línea MACD y la línea de señal mediante barras verticales. Valores positivos indican momentum alcista; negativos, bajista.',
    module: 6,
  },
  {
    term: 'Señal',
    definition: 'En el contexto del MACD, es una media móvil exponencial de 9 períodos aplicada sobre la línea MACD. Sus cruces con la línea MACD generan señales de compra o venta.',
    module: 6,
  },
  {
    term: 'Bandas de Bollinger',
    definition: 'Indicador compuesto por una media móvil central y dos bandas exteriores situadas a una distancia de dos desviaciones estándar. Miden la volatilidad y ayudan a identificar condiciones extremas del precio.',
    module: 7,
  },
  {
    term: 'Squeeze',
    definition: 'Fenómeno en las Bandas de Bollinger donde las bandas se contraen significativamente, indicando baja volatilidad y anticipando un movimiento explosivo del precio en cualquier dirección.',
    module: 7,
  },
  {
    term: 'ATR',
    definition: 'Average True Range o Rango Verdadero Promedio. Indicador que mide la volatilidad del mercado calculando el promedio del rango verdadero durante un período. Se utiliza para dimensionar posiciones y colocar stop loss.',
    module: 7,
  },
  {
    term: 'Fibonacci',
    definition: 'Secuencia matemática descubierta por Leonardo Fibonacci. En análisis técnico se aplican los niveles de retroceso (23.6%, 38.2%, 50%, 61.8%, 78.6%) para identificar zonas de soporte y resistencia.',
    module: 8,
  },
  {
    term: 'Retroceso',
    definition: 'Movimiento temporal del precio en dirección opuesta a la tendencia principal. Los retrocesos de Fibonacci ayudan a identificar niveles donde el precio podría encontrar soporte o resistencia antes de continuar la tendencia.',
    module: 8,
  },
  {
    term: 'Hombro-cabeza-hombro',
    definition: 'Patrón de reversión compuesto por tres máximos, donde el central (cabeza) es más alto que los dos laterales (hombros). Su confirmación se produce al romper la línea de cuello (neckline) a la baja.',
    module: 9,
  },
  {
    term: 'Doble techo',
    definition: 'Patrón de reversión bajista formado por dos máximos consecutivos aproximadamente al mismo nivel de precio, separados por un mínimo intermedio. Señala el agotamiento de la tendencia alcista.',
    module: 9,
  },
  {
    term: 'Doble piso',
    definition: 'Patrón de reversión alcista formado por dos mínimos consecutivos aproximadamente al mismo nivel de precio, separados por un máximo intermedio. Señala el agotamiento de la tendencia bajista.',
    module: 9,
  },
  {
    term: 'Triángulo',
    definition: 'Patrón de consolidación formado por líneas de tendencia convergentes que conectan máximos y mínimos sucesivos. Puede ser ascendente, descendente o simétrico, y suele resolver en la dirección de la tendencia previa.',
    module: 9,
  },
  {
    term: 'Bandera',
    definition: 'Patrón de continuación que se forma después de un movimiento brusco del precio (asta). Consiste en una pequeña consolidación rectangular o ligeramente inclinada en sentido contrario a la tendencia, antes de continuar el movimiento.',
    module: 9,
  },
  {
    term: 'Cuña',
    definition: 'Patrón formado por dos líneas de tendencia convergentes con pendiente en la misma dirección. La cuña ascendente es bajista y la cuña descendente es alcista. Indica una pérdida de momentum en la dirección de la cuña.',
    module: 9,
  },
  {
    term: 'Divergencia',
    definition: 'Situación donde el precio y un indicador (como el RSI o MACD) se mueven en direcciones opuestas. La divergencia alcista (precio hace mínimos menores pero el indicador no) anticipa reversiones al alza; la bajista, a la baja.',
    module: 10,
  },
  {
    term: 'Sobrecompra',
    definition: 'Condición del mercado donde el precio ha subido demasiado rápido y un activo podría estar sobrevaluado en el corto plazo. En el RSI, se considera sobrecompra cuando supera el nivel 70.',
    module: 6,
  },
  {
    term: 'Sobreventa',
    definition: 'Condición del mercado donde el precio ha caído demasiado rápido y un activo podría estar subvaluado en el corto plazo. En el RSI, se considera sobreventa cuando cae por debajo del nivel 30.',
    module: 6,
  },
  {
    term: 'Stop loss',
    definition: 'Orden de venta colocada a un precio determinado para limitar las pérdidas si el mercado se mueve en contra de la posición. Es una herramienta fundamental en la gestión del riesgo.',
    module: 11,
  },
  {
    term: 'Take profit',
    definition: 'Orden de venta colocada a un precio objetivo para asegurar las ganancias cuando el mercado alcanza el nivel deseado. Permite cerrar la posición automáticamente al llegar al objetivo de beneficio.',
    module: 11,
  },
  {
    term: 'Gestión de riesgo',
    definition: 'Conjunto de técnicas y reglas para controlar las pérdidas potenciales en las operaciones de trading. Incluye el uso de stop loss, el dimensionamiento correcto de posiciones y la definición de la relación riesgo/beneficio.',
    module: 11,
  },
  {
    term: 'Relación riesgo/beneficio',
    definition: 'Ratio que compara la pérdida máxima aceptada (distancia al stop loss) con la ganancia potencial esperada (distancia al take profit). Una relación de 1:2 significa que por cada unidad arriesgada se espera ganar dos.',
    module: 11,
  },
  {
    term: 'Tamaño de posición',
    definition: 'Cantidad de capital o número de acciones/contratos invertidos en una operación. Se calcula en función del capital disponible, el porcentaje máximo de riesgo por operación y la distancia al stop loss.',
    module: 11,
  },
  {
    term: 'Golden cross',
    definition: 'Señal alcista que se produce cuando una media móvil de corto plazo (generalmente la de 50 períodos) cruza hacia arriba a una media móvil de largo plazo (generalmente la de 200 períodos).',
    module: 5,
  },
  {
    term: 'Death cross',
    definition: 'Señal bajista que se produce cuando una media móvil de corto plazo (generalmente la de 50 períodos) cruza hacia abajo a una media móvil de largo plazo (generalmente la de 200 períodos).',
    module: 5,
  },
  {
    term: 'Doji',
    definition: 'Vela japonesa cuyo precio de apertura y cierre son iguales o muy similares, formando una cruz o signo de suma (+). Indica indecisión en el mercado y puede anticipar un cambio de tendencia.',
    module: 4,
  },
  {
    term: 'Martillo',
    definition: 'Vela japonesa con cuerpo pequeño en la parte superior y mecha inferior larga (al menos el doble del cuerpo). Aparece en tendencias bajistas y señala un posible giro alcista al indicar rechazo del precio a bajos niveles.',
    module: 4,
  },
  {
    term: 'Estrella fugaz',
    definition: 'Vela japonesa con cuerpo pequeño en la parte inferior y mecha superior larga (al menos el doble del cuerpo). Aparece en tendencias alcistas y señala un posible giro bajista al indicar rechazo del precio a altos niveles.',
    module: 4,
  },
  {
    term: 'Envolvente alcista',
    definition: 'Patrón de dos velas donde la segunda vela (alcista) "envuelve" completamente el cuerpo de la primera vela (bajista). Aparece en tendencias bajistas y señala una fuerte reversión al alza.',
    module: 4,
  },
  {
    term: 'Envolvente bajista',
    definition: 'Patrón de dos velas donde la segunda vela (bajista) "envuelve" completamente el cuerpo de la primera vela (alcista). Aparece en tendencias alcistas y señala una fuerte reversión a la baja.',
    module: 4,
  },
  {
    term: 'Estocástico',
    definition: 'Oscilador que compara el precio de cierre de un activo con su rango de precios durante un período determinado. Oscila entre 0 y 100; valores superiores a 80 indican sobrecompra y valores inferiores a 20, sobreventa.',
    module: 6,
  },
  {
    term: 'Confluencia',
    definition: 'Situación donde múltiples señales o niveles técnicos (soporte/resistencia, retroceso de Fibonacci, media móvil, etc.) coinciden en la misma zona de precio, incrementando la probabilidad de un giro o reacción del mercado.',
    module: 12,
  },
  {
    term: 'Breakout',
    definition: 'Ruptura del precio por encima de una resistencia o por debajo de un soporte, generalmente acompañada de un incremento en el volumen. Indica el inicio de un nuevo movimiento en la dirección de la ruptura.',
    module: 3,
  },
  {
    term: 'Pullback',
    definition: 'Movimiento de retroceso temporal del precio hacia el nivel que acaba de romper (soporte convertido en resistencia o viceversa), antes de continuar en la dirección del breakout. Ofrece una segunda oportunidad de entrada.',
    module: 3,
  },
  {
    term: 'Canal',
    definition: 'Patrón formado por dos líneas de tendencia paralelas (superior e inferior) que encuadran el movimiento del precio. Puede ser alcista, bajista o lateral. Permite identificar zonas de compra y venta dentro del rango.',
    module: 3,
  },
  {
    term: 'Línea de tendencia',
    definition: 'Línea recta que conecta dos o más puntos de precio relevantes (mínimos en tendencia alcista o máximos en tendencia bajista). Su ruptura puede indicar un cambio de tendencia.',
    module: 3,
  },
  {
    term: 'Swing high',
    definition: 'Máximo local del precio, es decir, un punto donde el precio alcanza un valor superior al de las velas anteriores y posteriores. Se utiliza para trazar resistencias y líneas de tendencia bajista.',
    module: 3,
  },
  {
    term: 'Swing low',
    definition: 'Mínimo local del precio, es decir, un punto donde el precio alcanza un valor inferior al de las velas anteriores y posteriores. Se utiliza para trazar soportes y líneas de tendencia alcista.',
    module: 3,
  },
  {
    term: 'Momentum',
    definition: 'Fuerza o velocidad con la que el precio se mueve en una dirección determinada. Un momentum alto indica que el movimiento es fuerte y sostenido; un momentum débil puede señalar agotamiento de la tendencia.',
    module: 6,
  },
  {
    term: 'Acción del precio',
    definition: 'Técnica de análisis que estudia los movimientos del precio en el gráfico sin depender de indicadores. Se basa en la lectura de velas japonesas, patrones chartistas, soportes y resistencias.',
    module: 2,
  },
  {
    term: 'Chartismo',
    definition: 'Rama del análisis técnico que se centra en la identificación de patrones gráficos en los gráficos de precios para predecir el comportamiento futuro del mercado.',
    module: 9,
  },
  {
    term: 'Volatilidad',
    definition: 'Medida de la magnitud de las variaciones del precio de un activo en un período de tiempo. Alta volatilidad implica grandes oscilaciones; baja volatilidad indica movimientos más estables y contenidos.',
    module: 7,
  },
]
