# Analisis Tecnico - Curso Interactivo

Curso interactivo de analisis tecnico bursatil construido con React 18. Aprende a interpretar graficos, calcular indicadores tecnicos como RSI, MACD y Bandas de Bollinger, y tomar decisiones informadas con herramientas practicas directamente en el navegador.

## Demo en vivo

https://facubelini.github.io/analisis-tecnico/

## Caracteristicas

- 12 modulos de contenido educativo progresivo sobre analisis tecnico
- Graficos interactivos de velas japonesas con TradingView (lightweight-charts)
- Quiz de comprension al final de cada modulo
- Herramienta de analisis tecnico con RSI, MACD y Bandas de Bollinger
- Calculadora de gestion de riesgo (position sizing, stop loss, take profit)
- Carga de datos propios via CSV (columnas: date, open, high, low, close, volume)
- Datos de ejemplo precargados (activo TCHS) para empezar de inmediato
- Progreso guardado automaticamente en localStorage
- Diseno responsive optimizado para desktop y movil
- Dark mode completo con paleta slate/blue
- Todo el contenido en espanol

## Instalacion y uso local

```bash
git clone https://github.com/facubelini/analisis-tecnico.git
cd analisis-tecnico
npm install
npm run dev
```

Abre tu navegador en http://localhost:5173/analisis-tecnico/

## Uso de la herramienta de analisis

- Los datos de ejemplo (TCHS) se cargan automaticamente al ingresar a la herramienta.
- Para analizar tu propia accion: carga un CSV con columnas `date`, `open`, `high`, `low`, `close`, `volume`.
- Para obtencion automatica de datos (opcional): configura una API key de Financial Modeling Prep, Alpha Vantage o Twelve Data en la interfaz.

## Descargo de responsabilidad

El contenido de esta aplicacion es exclusivamente educativo. No constituye asesoramiento financiero, recomendacion de inversion ni consejo legal. Toda decision de inversion es responsabilidad exclusiva del usuario.

## Stack tecnico

| Tecnologia | Version | Uso |
|---|---|---|
| React | 18 | Framework principal |
| Vite | 5 | Bundler y dev server |
| Tailwind CSS | 3 | Estilos utilitarios |
| lightweight-charts | 4 | Graficos de velas (TradingView) |
| technicalindicators | - | Calculo de RSI, MACD, Bollinger |
| react-router-dom | 6 | HashRouter para GitHub Pages |
| GitHub Pages | - | Hosting estatico |
