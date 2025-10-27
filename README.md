# 📊 Analytics Dashboard - Real-Time Metrics

Dashboard analítico en tiempo real desarrollado con React, mostrando métricas clave de negocio con actualización automática cada 5 segundos.

## 🌟 Características

- **📈 Métricas en Tiempo Real**: Visualización de usuarios activos, ingresos y tasa de churn
- **🔄 Actualización Automática**: Polling cada 5 segundos con React Query
- **⚠️ Sistema de Alertas**: Notificaciones visuales cuando el churn supera el 5%
- **📊 Gráfico Interactivo**: Evolución temporal de métricas con tooltips personalizados
- **🎨 Diseño Moderno**: Interfaz soft y minimalista con glassmorphism
- **📱 Responsive**: Adaptado para desktop, tablet y mobile
- **♿ Accesible**: Implementación de ARIA labels y roles
- **✅ Testeado**: Suite de tests unitarios con Vitest

## 🛠️ Stack Tecnológico

### Frontend

- **React 18** - Librería UI
- **Vite** - Build tool
- **TailwindCSS** - Estilos
- **React Query** - Data fetching y cache
- **Recharts** - Visualización de datos
- **Lucide React** - Iconos

### Testing

- **Vitest** - Test runner
- **Testing Library** - Testing utilities

### API Mock

- **Express** - Servidor de desarrollo
- **CORS** - Configuración de acceso

## 📦 Instalación y Uso

### Prerequisitos

- Node.js >= 16.x
- npm o yarn

### Clonar el repositorio

```bash
git clone https://github.com/marialafont/colppy-challenge.git
cd colppy-challenge
```

### Instalar dependencias y ejecutar

**Terminal 1 - API Mock:**

```bash
cd api
npm install
npm start
```

La API correrá en `http://localhost:4000`

**Terminal 2 - Frontend:**

```bash
cd frontend
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
challenge-frontend-sr/
├── api/                        # API Mock Server
│   ├── server.js              # Servidor Express con endpoints
│   └── package.json
│
├── frontend/                   # Aplicación React
│   ├── public/
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   │   ├── Dashboard.jsx  # Componente principal
│   │   │   ├── KPICard.jsx    # Tarjetas de métricas
│   │   │   ├── MetricsChart.jsx # Gráfico de evolución
│   │   │   ├── AlertBanner.jsx  # Banner de alertas
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorMessage.jsx
│   │   ├── hooks/
│   │   │   └── useMetrics.js  # Hook de React Query
│   │   ├── services/
│   │   │   └── api.js         # Cliente API
│   │   ├── __tests__/         # Tests unitarios
│   │   │   ├── Dashboard.test.jsx
│   │   │   ├── KPICard.test.jsx
│   │   │   ├── MetricsChart.test.jsx
│   │   │   └── AlertBanner.test.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── vitest.config.js
│
├── docs/
│   └── screenshots/           # Screenshots del proyecto
├── README.md
└── .gitignore
```

## 🧪 Tests

```bash
cd frontend
npm test               # Ejecutar tests
npm run test:ui        # UI interactiva de Vitest
npm run test:coverage  # Reporte de cobertura
npm run test:watch     # Modo watch para desarrollo
```

**Coverage actual**: ~85% de cobertura en componentes principales

## 🔧 Variables de Entorno

Creá un archivo `.env` en `/frontend`:

```env
VITE_API_URL=http://localhost:4000
```

Para producción, ajustá la URL de la API según tu deploy.

## 🎯 Scripts Disponibles

### Frontend

| Comando                 | Descripción                                         |
| ----------------------- | --------------------------------------------------- |
| `npm run dev`           | Inicia el servidor de desarrollo en modo hot-reload |
| `npm run build`         | Genera el build optimizado para producción          |
| `npm run preview`       | Previsualiza el build de producción localmente      |
| `npm test`              | Ejecuta todos los tests con Vitest                  |
| `npm run test:ui`       | Abre la interfaz visual de Vitest                   |
| `npm run test:coverage` | Genera reporte de cobertura de tests                |
| `npm run test:watch`    | Ejecuta tests en modo watch                         |
| `npm run lint`          | Ejecuta ESLint para verificar código                |

### API

| Comando       | Descripción                            |
| ------------- | -------------------------------------- |
| `npm start`   | Inicia el servidor mock en puerto 4000 |
| `npm run dev` | Inicia con nodemon para auto-reload    |

## 📊 API Endpoints

### GET `/metrics`

Retorna un array de métricas simuladas.

**Query Parameters:**

- `count` (opcional): Número de registros a retornar (default: 20)

**Response:**

```json
[
  {
    "timestamp": "2025-10-25T18:30:00.000Z",
    "activeUsers": 3421,
    "newUsers": 156,
    "revenue": 8543.21,
    "churnRate": 0.042,
    "byRegion": {
      "US": 1500,
      "EU": 980,
      "LATAM": 641,
      "APAC": 300
    }
  }
]
```

## 🚀 Deploy

### Railway (Implementado)

Este proyecto está deployado en Railway, con el frontend y la API corriendo como servicios independientes.

**Configuración:**

1. Frontend:
   - Build Command: `cd frontend && npm install && npm run build`
   - Start Command: `cd frontend && npm run preview -- --host 0.0.0.0`
   - Variables de entorno: `VITE_API_URL` apuntando a la URL del servicio API

2. API:
   - Build Command: `cd api && npm install`
   - Start Command: `cd api && npm start`
   - Puerto configurado automáticamente por Railway

**Nota**: Asegurate de configurar las variables de entorno correctamente en el dashboard de Railway.

### Alternativas

**Vercel:**
```bash
cd frontend
vercel
```

**Netlify:**
```bash
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

### Optimizaciones Implementadas

- **Code splitting**: Recharts y React Query separados en chunks independientes
- **Bundle size optimizado**: De 508KB a chunks de 454KB (recharts), 39KB (react-query) y 15KB (main)
- **React Query cache**: Reduce requests innecesarios al servidor
- **Tailwind purged**: Solo clases utilizadas en el build final
- **Assets optimizados**: SVG para iconos con Lucide React

### Bundle Size

- Main chunk: ~15KB (gzip: ~5KB)
- Recharts chunk: ~454KB (gzip: ~140KB)
- React Query chunk: ~39KB (gzip: ~12KB)

## 🔧 Troubleshooting

### La API no responde

**Problema**: El frontend no puede conectarse a la API.

**Solución**:

1. Verificá que el servidor API esté corriendo en `http://localhost:4000`
2. Chequeá que el archivo `.env` tenga la URL correcta
3. Asegurate de que no haya otro proceso usando el puerto 4000

```bash
# Verificar qué está usando el puerto
lsof -i :4000  # Mac/Linux
netstat -ano | findstr :4000  # Windows
```

### Error de CORS

**Problema**: Error de CORS al hacer requests a la API.

**Solución**:
El servidor mock ya tiene CORS configurado. Si aún tenés el error:

1. Reiniciá el servidor API
2. Verificá que la URL en `.env` no tenga trailing slash
3. Limpiá el cache del navegador

### Tests fallan con "Cannot find module"

**Problema**: Tests no encuentran módulos o componentes.

**Solución**:

```bash
cd frontend
rm -rf node_modules
npm install
npm test
```

### El gráfico no se renderiza

**Problema**: El componente MetricsChart no muestra datos.

**Solución**:

1. Abrí las DevTools y chequeá errores en consola
2. Verificá que la API esté retornando datos válidos
3. Confirmá que haya al menos 2 puntos de datos (Recharts requiere mínimo 2)

### Hot reload no funciona

**Problema**: Los cambios no se reflejan automáticamente.

**Solución**:

```bash
# Detené el servidor (Ctrl+C)
cd frontend
rm -rf node_modules/.vite
npm run dev
```

### Port 5173 o 4000 ya está en uso

**Problema**: El puerto está ocupado por otro proceso.

**Solución**:

```bash
# Matar proceso en puerto específico
kill -9 $(lsof -t -i:5173)  # Mac/Linux

# O cambiar el puerto en vite.config.js
server: {
  port: 3000  // Usar otro puerto
}
```

## 👩‍💻 Desarrollado por

**María Lafont**

- GitHub: [@marialafont](https://github.com/marialafont)
- Email: merlafont@gmail.com

## 📄 Licencia

Este proyecto fue desarrollado como parte de un challenge técnico para Colppy.
